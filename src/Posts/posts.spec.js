import React from "react";
import Index from "./index.js";

describe("Index component", () => {
  it("should render Index component", function () {
    const component = shallow(<Index />);
    expect(component).toMatchSnapshot();
  });
});
