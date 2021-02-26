import React from "react";
import Posts from "./index.js";

const setUp = (props) => shallow(<Posts {...props} />);

describe("Posts component", () => {
  const DEFAULT_PAGE = 10;
  let component;
  let instance;

  beforeEach(() => {
    component = setUp();
    instance = component.instance();
    console.log("instance -> ", instance);
  });

  it("should render Index component", function () {
    const component = shallow(<Posts />);
    expect(component).toMatchSnapshot();
  });
});
