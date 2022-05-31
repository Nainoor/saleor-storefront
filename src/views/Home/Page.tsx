import classNames from "classnames";
import Link from "next/link";
import * as React from "react";
// import { useIntl } from "react-intl";
// import { FormattedMessage, useIntl } from "react-intl";
import { generatePath } from "react-router";

import { paths } from "@paths";
import { FeaturedProducts } from "@utils/ssr";

// import { Carousel, ProductListItemBS } from "../../components";
import { Carousel } from "../../components";
// import { ProductsFeatured, Carousel, ProductListItemBS } from "../../components";
import { structuredData } from "../../core/SEO/Homepage/structuredData";
import noPhotoImg from "../../images/no-photo.svg";
import {
  HomePageProducts_categories,
  HomePageProducts_shop,
} from "./gqlTypes/HomePageProducts";

import "./scss/index.scss";

const Page: React.FC<{
  categories: HomePageProducts_categories;
  featuredProducts: FeaturedProducts;
  shop: HomePageProducts_shop;
}> = ({ categories, featuredProducts, shop }) => {
  // const categoriesExist = () => {
  //   return categories && categories.edges && categories.edges.length > 0;
  // };
  // const intl = useIntl();

  return (
    <>
      <script className="structured-data-list" type="application/ld+json">
        {structuredData(shop)}
      </script>
      {/* <div
        className="home-page__hero"
        style={
          featuredProducts.backgroundImage
            ? {
                backgroundImage: `url(${featuredProducts.backgroundImage.url})`,
              }
            : null
        }
      >
        <div className="home-page__hero-text">
          <div>
            <span className="home-page__hero__title">
              <h1>
                <FormattedMessage defaultMessage="Final reduction" />
              </h1>
            </span>
          </div>
          <div>
            <span className="home-page__hero__title">
              <h1>
                <FormattedMessage defaultMessage="Up to 70% off sale" />
              </h1>
            </span>
          </div>
        </div>
        <div className="home-page__hero-action">
          {categoriesExist() && (
            <Link
              href={generatePath(paths.category, {
                slug: categories.edges[0].node.slug,
              })}
            >
              <a>
                <Button testingContext="homepageHeroActionButton">
                  <FormattedMessage defaultMessage="Shop sale" />
                </Button>
              </a>
            </Link>
          )}
        </div>
      </div> */}
      <section className="">
        <div className="container-fluid"> 
          <Carousel autoplay wrapAround pauseOnHover slidesToShow={1} slidesToScroll={1}>
      
            {categories.edges.map(({ node: category }) => (
              <div key={category.id} className="px-xl-5">
                <div className="row"> 
                  <div className="col-lg"> 
                    <Link href={generatePath(paths.category, {
                      slug: category.slug,
                      })}
                      key={category.id}
                    >
                    <a>
                      <div
                        className={classNames(
                          "home-page__categories__list__image",
                          {
                            "home-page__categories__list__image--no-photo": !category.backgroundImage,
                          }
                        )}
                        style={{
                          backgroundImage: `url(${
                            category.backgroundImage
                              ? category.backgroundImage.url
                              : noPhotoImg
                          })`,
                        }}
                      />
                      {/* <h3>{category.name}</h3> */}
                    </a>
                    </Link>
                  </div> 
                </div> 
              </div>
            ))}
          </Carousel>
        </div> 
      </section>
      
      <blockquote className="blockquote text-center mb-4">
        <p className="my-3 block-line">`Unique artwork at affordable prices. It&#39;s different.`</p>
      </blockquote>
      

      <section id="recommended-products" className="">
        <div className="container-fluid"> 
          <h3 className="text-center section-heading">Ganesh Art</h3>           
          <Carousel autoplay wrapAround height="100%" pauseOnHover={false} slidesToScroll={1} width="90%" cellAlign="center" className="mx-auto">               
            {[...Array(10)].map((elementInArray, index) => (    
                <Link
                  href={generatePath(paths.category, { slug: "prints" })}                        
                >
                  <a>
                    <div className="card mx-0 border-0">
                    <img src={`/static/product_images/ganesh/${index+1}.jpg`} alt=""/>
                    </div>
                  </a>
                </Link>                    
              ))}
          </Carousel>        
        </div> 
      </section>

      <section id="recommended-products" className="mt-3">
        <div className="container-fluid"> 
          <h3 className="text-center section-heading">Bharatnatyam Art</h3>           
          <Carousel autoplay wrapAround height="100%" pauseOnHover={false} slidesToScroll={1} width="90%" cellAlign="center" className="mx-auto">               
            {[...Array(10)].map((elementInArray, index) => (    
                <Link
                  href={generatePath(paths.category, { slug: "prints" })}                        
                >
                  <a>
                    <div className="card mx-0 border-0">
                    <img src={`/static/product_images/ganesh/${index+1}.jpg`} alt=""/>
                    </div>
                  </a>
                </Link>                    
              ))}
          </Carousel>        
        </div> 
      </section>

      


{/* <section className="bg-white">
        <div className="container-fluid"> 
         

      <Carousel autoplay wrapAround pauseOnHover={false} slidesToShow={1} slidesToScroll={1}>
      
      {categories.edges.map(({ node: category }) => (
        <div key={category.id} className="px-xl-5">

        <div className="row"> 

        <div className="col-lg"> 
          <Link href={generatePath(paths.category, {
            slug: category.slug,
          })}
          key={category.id}
        >
          <a>
            <div
              className={classNames(
                "home-page__categories__list__image",
                {
                  "home-page__categories__list__image--no-photo": !category.backgroundImage,
                }
              )}
              style={{
                backgroundImage: `url(${
                  category.backgroundImage
                    ? category.backgroundImage.url
                    : noPhotoImg
                })`,
              }}
            />
            <h3>{category.name}</h3> 
          </a>
        </Link>
          </div> 
        
          
        </div> 


                
                  
                </div>
              ))}
      </Carousel>

      </div> 
      </section> */}



{/* 
      <div className="home-page__hero">
        <section>
          <div className="home-page__hero___title">
            <h1>
              <FormattedMessage defaultMessage="Bhuvan Patel Originals" />
            </h1>
          </div>
          <div className="home-page__hero___message">
            <h1>
              <FormattedMessage defaultMessage="Affordable art for everyone!" />
            </h1>
          </div>
        </section>
      </div> */}
      {/* <ProductsFeatured
        products={featuredProducts.products}
        title={intl.formatMessage({ defaultMessage: "Featured" })}
      />
      {categoriesExist() && (
        <div className="home-page__categories">
          <div className="container">
            <h3>
              <FormattedMessage defaultMessage="Shop by category" />
            </h3>
            <div className="home-page__categories__list">
              {categories.edges.map(({ node: category }) => (
                <div key={category.id}>
                  <Link
                    href={generatePath(paths.category, {
                      slug: category.slug,
                    })}
                    key={category.id}
                  >
                    <a>
                      <div
                        className={classNames(
                          "home-page__categories__list__image",
                          {
                            "home-page__categories__list__image--no-photo": !category.backgroundImage,
                          }
                        )}
                        style={{
                          backgroundImage: `url(${
                            category.backgroundImage
                              ? category.backgroundImage.url
                              : noPhotoImg
                          })`,
                        }}
                      />
                      <h3>{category.name}</h3>
                    </a>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      )} */}
    </>
  );
};

export default Page;
