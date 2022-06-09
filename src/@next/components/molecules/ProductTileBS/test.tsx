import "jest-styled-components";

import { mount, shallow } from "enzyme";
import React from "react";

import { ProductTileBS } from ".";
import { PRODUCT } from "./fixtures";

describe("<ProductTile />", () => {
  it("exists", () => {
    const wrapper = shallow(<ProductTileBS product={PRODUCT} />);

    expect(wrapper.exists()).toEqual(true);
  });
  it("has product name", () => {
    const wrapper = shallow(<ProductTileBS product={PRODUCT} />);

    expect(wrapper.text()).toContain(PRODUCT.name);
  });
  it("has price displayed", () => {
    const wrapper = mount(<ProductTileBS product={PRODUCT} />);

    expect(wrapper.text()).toContain(
      String(PRODUCT.pricing!.priceRange!.start!.gross!.amount)
    );
  });
});
