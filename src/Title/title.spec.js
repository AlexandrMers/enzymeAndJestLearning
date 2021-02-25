import React from "react";
import Title from "./index";

describe("Title component", () => {
  it("should render component Title with props", () => {
    const component = shallow(<Title title="test title" />);
    expect(component).toMatchSnapshot();
  });

  it("should render component Title without props", () => {
    const component = shallow(<Title />);
    expect(component).toMatchSnapshot();
  });
});
