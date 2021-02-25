import React from "react";
import Index from "./index";

// shallow - осуществляет неглубокую отрисовку компонента
// beforeEach - выполняется перед каждым it. То есть, если у нас в тесте содержится n-ое число it-ов, то функция вызовется столько же раз перед непосредственным выполнением каждого "it".

const setUp = (props) => shallow(<Index {...props} />);

describe("Should render a Index component", () => {
  let component;

  beforeEach(() => {
    component = setUp();
  });

  it("should contain .post wrapper", () => {
    const wrapper = component.find(".post");
    expect(wrapper.length).toBe(1);
  });

  it("should contain a link", () => {
    const wrapper = component.find("a");
    expect(wrapper.length).toBe(1);
  });

  it("should render created date", () => {
    const created_at = "01-03-2020";

    component = setUp({
      created_at,
    });

    const expectedDate = new Date(created_at).toLocaleDateString();

    const date = component.find(".date");

    expect(date.text()).toBe(expectedDate);
  });
});
