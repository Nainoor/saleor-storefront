import Link from "next/link";
import * as React from "react";
import { generatePath } from "react-router";

import { FeaturedProduct } from "@graphql/gqlTypes/FeaturedProduct";
import { paths } from "@paths";
import { Carousel, ProductListItem } from "..";
// import { ProductList } from "@components/organisms";
// import { ProductTile } from "@components/molecules";

import "./scss/index.scss";
// import * as S from "./styles";


interface ProductsFeaturedProps {
  title: string | undefined;
  products: FeaturedProduct[] | undefined;
}

export const ProductsFeatured: React.FC<ProductsFeaturedProps> = ({
  title,
  products,
}) =>
  products?.length ? (
    <div className="products-featured">
      <div className="container">
        <h3>{title}</h3>
        <Carousel>
          {products.map(product => (
            <Link
              href={generatePath(paths.product, { slug: product.slug })}
              key={product.id}
            >
              <a>
                <ProductListItem product={product} />
              </a>
            </Link>
          ))}
        </Carousel>
        
          {/* <ProductList
            products={products}
            canLoadMore
            loading={false}
            // onLoadMore={onLoadMore}
          /> */}

          {/* <S.List data-test="productList">
            {products.map(product => {
              const { slug, name } = product;
              return (
                slug &&
                name && (
                  <Link href={generatePath(paths.product, { slug })} key={slug}>
                    <a>
                      <ProductTile product={product} />
                    </a>
                  </Link>
                )
              );
            })}
          </S.List>
         */}


      </div>
    </div>
  ) : null;
