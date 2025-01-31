import * as React from "react";

import { ShopMenusQuery } from "@graphql/gqlTypes/ShopMenusQuery";

import { NavLink } from "..";

import "./scss/index.scss";

export type NavProps = { menu: ShopMenusQuery["footer"] };

export const Nav: React.FC<NavProps> = ({ menu }) => (
  <footer className="footer-nav">
    <div className="container-lg">
      <div className="row">
        {menu?.items.map(item => (
          <div className="col-6 col-md-3 col-lg-3 col-xl-3">
            <div className="footer-nav__section" key={item.id}>
              <h4 className="footer-nav__section-header">
                <NavLink item={item} />
              </h4>
              <div className="footer-nav__section-content">
                {item.children.map(subItem => (
                  <p key={subItem.id}>
                    <NavLink item={subItem} />
                  </p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </footer>
);
