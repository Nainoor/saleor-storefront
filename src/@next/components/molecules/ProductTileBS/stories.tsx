import { storiesOf } from "@storybook/react";
import React from "react";

import { ProductTileBS } from ".";
import { PRODUCT } from "./fixtures";

storiesOf("@components/molecules/ProductTile", module)
  .addParameters({ component: ProductTileBS })
  .add("default", () => (
    <div style={{ width: "400px" }}>
      <ProductTileBS product={PRODUCT} />
    </div>
  ));
