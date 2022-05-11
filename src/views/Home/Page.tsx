import classNames from "classnames";
import Link from "next/link";
import * as React from "react";
import { FormattedMessage, useIntl } from "react-intl";
import { generatePath } from "react-router";

import { paths } from "@paths";
import { FeaturedProducts } from "@utils/ssr";

import { ProductsFeatured, Carousel } from "../../components";
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
  const categoriesExist = () => {
    return categories && categories.edges && categories.edges.length > 0;
  };
  const intl = useIntl();

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
      <section className="bg-white shadow">
        <div className="container"> 
         

      <Carousel>
      
      {categories.edges.map(({ node: category }) => (
        <div key={category.id}>

        <div className="row"> 
          <div className="col-lg-6 col-xl-6 col-xxl-5">
            <div className="my-5">
              <h1 className="display-4">Best products &amp; <br/> brands in our store</h1> 
              <p className="lead">Trendy Products, Factory Prices, Excellent Service</p> 
              <a href="https://bhuvanpatel.com" className="btn btn-primary btn-lg"> Discover </a> 
              <a href="https://bhuvanpatel.com" className="btn btn-light btn-lg"> Learn more </a> 
            </div> 
          </div> 
          <div className="col-lg-6 col-xl-6 col-xxl-7"> 
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
        </div> 


                
                  
                </div>
              ))}
      </Carousel>

      </div> 
      </section>

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
      </div>
      <ProductsFeatured
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
      )}
    </>
  );
};

export default Page;
