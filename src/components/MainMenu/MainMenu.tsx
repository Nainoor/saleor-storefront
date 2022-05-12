import { useAuth, useCart } from "@saleor/sdk";
import classNames from "classnames";
import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import { FormattedMessage } from "react-intl";
import Media from "react-media";
import ReactSVG from "react-svg";

import { DemoBanner } from "@components/atoms";
import { ShopMenusQuery } from "@graphql/gqlTypes/ShopMenusQuery";
import { paths } from "@paths";
import { commonMessages } from "@temp/intl";

import cartImg from "../../images/cart.svg";
import hamburgerImg from "../../images/hamburger.svg";
import hamburgerHoverImg from "../../images/hamburger-hover.svg";
import logoImg from "../../images/logo.svg";
import searchImg from "../../images/search.svg";
import userImg from "../../images/user.svg";
import {
  MenuDropdown,
  Offline,
  Online,
  OverlayContext,
  OverlayTheme,
  OverlayType,
} from "..";
import { NavDropdown } from "./NavDropdown";

import "./scss/index.scss";
import {
  mediumScreen,
  smallScreen,
} from "../../globalStyles/scss/variables.scss";

interface MainMenuProps {
  demoMode: boolean;
  menu: ShopMenusQuery["mainMenu"];
  loading: boolean;
}

export const MainMenu: React.FC<MainMenuProps> = ({
  demoMode,
  menu,
  loading,
}) => {
  const overlayContext = useContext(OverlayContext);
  const { user, signOut } = useAuth();
  const { items } = useCart();
  const [activeDropdown, setActiveDropdown] = useState<string>(undefined);

  const menuItems = menu?.items || [];
  const cartItemsQuantity =
    (items &&
      items.reduce((prevVal, currVal) => prevVal + currVal.quantity, 0)) ||
    0;

  const handleSignOut = () => signOut();

  const showDropdownHandler = (itemId: string, hasSubNavigation: boolean) => {
    if (hasSubNavigation) {
      setActiveDropdown(itemId);
    }
  };

  const hideDropdownHandler = () => {
    if (activeDropdown) {
      setActiveDropdown(undefined);
    }
  };

  useEffect(() => {
    if (activeDropdown) {
      overlayContext.show(OverlayType.mainMenuNav, OverlayTheme.modal);
    } else {
      overlayContext.hide();
    }
  }, [activeDropdown]);

  return (

    // <header className="section-header border-bottom"> 
    //   <nav className="navbar navbar-expand-lg navbar-light"> 
    //     <div className="container">
    //       <a className="navbar-brand" href="#"> 
    //         <img src={logoImg} height="40" className="logo"/>
            
    //           {/* <Link href={paths.home}>
    //             <a>
    //               <ReactSVG path={logoImg} />
    //             </a>
    //           </Link> */}
            
    //       </a>
    //       <div className="order-lg-last flex-shrink-0">
    //         <a href="#" className="btn btn-icon btn-light"> 
    //           <i className="fa fa-search"></i>
    //         </a> 
    //         <a href="#" className="btn btn-icon btn-light">
    //           <i className="fa fa-user"></i>
    //         </a>
    //         <a href="#" className="btn btn-icon btn-primary">
    //           <i className="fa fa-shopping-cart"></i>
    //         </a> 
    //         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar_main4" aria-expanded="false" aria-label="Toggle navigation"> 
    //           <span className="navbar-toggler-icon"></span>
    //         </button> 
    //       </div>
    //       <div className="collapse navbar-collapse" id="navbar_main4">
    //         <ul className="navbar-nav mx-auto">
    //           <li className="nav-item"> 
    //             <a className="nav-link" href="#"> Home </a> 
    //           </li> 
    //           <li className="nav-item"> 
    //             <a className="nav-link" href="#"> About </a>
    //           </li> 
    //           <li className="nav-item">
    //             <a className="nav-link" href="#"> Services </a>
    //           </li>
    //           <li className="nav-item dropdown">
    //             <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"> Products </a>
    //             <ul className="dropdown-menu"> 
    //               <li> 
    //                 <a className="dropdown-item" href="#"> Submenu item 1 </a> 
    //               </li> 
    //               <li> 
    //                 <a className="dropdown-item" href="#"> Submenu item 2 </a> 
    //               </li> 
    //             </ul> 
    //           </li> 
    //           <li className="nav-item"> 
    //             <a className="nav-link" href="#"> Contacts </a> 
    //           </li>
    //         </ul> 
    //       </div> 
    //     </div>
    //   </nav>
    // </header>




    <header
      className={classNames({
        "header-with-dropdown": !!activeDropdown,
      })}
    >
      {demoMode && <DemoBanner />}
      <nav className="main-menu" id="header">

      <div className="main-menu__left">
          <Link href={paths.home}>
            <a>
              <ReactSVG path={logoImg} />
            </a>
          </Link>
        </div>

        <div className="main-menu__center">
          <ul>
            <Media
              query={{ maxWidth: mediumScreen }}
              render={() => (
                <li
                  data-test="toggleSideMenuLink"
                  className="main-menu__hamburger"
                  onClick={() =>
                    overlayContext.show(
                      OverlayType.sideNav,
                      OverlayTheme.left,
                      { data: menuItems }
                    )
                  }
                >
                  <ReactSVG
                    path={hamburgerImg}
                    className="main-menu__hamburger--icon"
                  />
                  <ReactSVG
                    path={hamburgerHoverImg}
                    className="main-menu__hamburger--hover"
                  />
                </li>
              )}
            />
            <Media
              query={{ minWidth: mediumScreen }}
              render={() =>
                menuItems.map(item => {
                  const hasSubNavigation = !!item?.children?.length;
                  return (
                    <li
                      data-test="mainMenuItem"
                      className="main-menu__item"
                      key={item.id}
                    >
                      <NavDropdown
                        overlay={overlayContext}
                        showDropdown={
                          activeDropdown === item.id && hasSubNavigation
                        }
                        onShowDropdown={() =>
                          showDropdownHandler(item.id, hasSubNavigation)
                        }
                        onHideDropdown={hideDropdownHandler}
                        {...item}
                      />
                    </li>
                  );
                })
              }
            />
            <Online>
              <Media
                query={{ maxWidth: smallScreen }}
                render={() =>
                  !loading && (
                    <>
                      {user ? (
                        <MenuDropdown
                          suffixClass="__rightdown"
                          head={
                            <li className="main-menu__icon main-menu__user--active">
                              <ReactSVG path={userImg} />
                            </li>
                          }
                          content={
                            <ul className="main-menu__dropdown">
                              <li data-test="mobileMenuMyAccountLink">
                                <Link href={paths.account}>
                                  <a>
                                    <FormattedMessage
                                      {...commonMessages.myAccount}
                                    />
                                  </a>
                                </Link>
                              </li>
                              <li data-test="mobileMenuOrderHistoryLink">
                                <Link href={paths.accountOrderHistory}>
                                  <a>
                                    <FormattedMessage
                                      {...commonMessages.orderHistory}
                                    />
                                  </a>
                                </Link>
                              </li>
                              <li data-test="mobileMenuAddressBookLink">
                                <Link href={paths.accountAddressBook}>
                                  <a>
                                    <FormattedMessage
                                      {...commonMessages.addressBook}
                                    />
                                  </a>
                                </Link>
                              </li>
                              <li
                                onClick={handleSignOut}
                                data-test="mobileMenuLogoutLink"
                              >
                                <FormattedMessage {...commonMessages.logOut} />
                              </li>
                            </ul>
                          }
                        />
                      ) : (
                        <li
                          data-test="mobileMenuLoginLink"
                          className="main-menu__icon"
                          onClick={() =>
                            overlayContext.show(
                              OverlayType.login,
                              OverlayTheme.left
                            )
                          }
                        >
                          <ReactSVG path={userImg} />
                        </li>
                      )}
                    </>
                  )
                }
              />
            </Online>
          </ul>
        </div>

        <div className="main-menu__right">
          <ul>
            <Online>
              <Media
                query={{ minWidth: smallScreen }}
                render={() =>
                  !loading && (
                    <>
                      {user ? (
                        <MenuDropdown
                          head={
                            <li className="main-menu__icon main-menu__user--active">
                              <ReactSVG path={userImg} />
                            </li>
                          }
                          content={
                            <ul className="main-menu__dropdown">
                              <li data-test="desktopMenuMyAccountLink">
                                <Link href={paths.account}>
                                  <a>
                                    <FormattedMessage
                                      {...commonMessages.myAccount}
                                    />
                                  </a>
                                </Link>
                              </li>
                              <li data-test="desktopMenuOrderHistoryLink">
                                <Link href={paths.accountOrderHistory}>
                                  <a>
                                    <FormattedMessage
                                      {...commonMessages.orderHistory}
                                    />
                                  </a>
                                </Link>
                              </li>
                              <li data-test="desktopMenuAddressBookLink">
                                <Link href={paths.accountAddressBook}>
                                  <a>
                                    <FormattedMessage
                                      {...commonMessages.addressBook}
                                    />
                                  </a>
                                </Link>
                              </li>
                              <li
                                onClick={handleSignOut}
                                data-test="desktopMenuLogoutLink"
                              >
                                <FormattedMessage {...commonMessages.logOut} />
                              </li>
                            </ul>
                          }
                        />
                      ) : (
                        <li
                          data-test="desktopMenuLoginOverlayLink"
                          className="main-menu__icon"
                          onClick={() =>
                            overlayContext.show(
                              OverlayType.login,
                              OverlayTheme.right
                            )
                          }
                        >
                          <ReactSVG path={userImg} />
                        </li>
                      )}
                    </>
                  )
                }
              />
              <li
                data-test="menuCartOverlayLink"
                className="main-menu__icon main-menu__cart"
                onClick={() => {
                  overlayContext.show(OverlayType.cart, OverlayTheme.right);
                }}
              >
                {!loading && (
                  <>
                    <ReactSVG path={cartImg} />
                    {cartItemsQuantity > 0 ? (
                      <span className="main-menu__cart__quantity">
                        {cartItemsQuantity}
                      </span>
                    ) : null}
                  </>
                )}
              </li>
            </Online>
            <Offline>
              <li className="main-menu__offline">
                <Media
                  query={{ minWidth: mediumScreen }}
                  render={() => (
                    <span>
                      <FormattedMessage defaultMessage="Offline" />
                    </span>
                  )}
                />
              </li>
            </Offline>
            <li
              data-test="menuSearchOverlayLink"
              className="main-menu__search"
              onClick={() =>
                overlayContext.show(OverlayType.search, OverlayTheme.right)
              }
            >
              <Media
                query={{ minWidth: mediumScreen }}
                render={() => (
                  <span>
                    <FormattedMessage {...commonMessages.search} />
                  </span>
                )}
              />
              <ReactSVG path={searchImg} />
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};
