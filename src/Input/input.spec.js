import React from "react";
import Input from "./index";

describe("Input component", () => {
  it("should render Input component", () => {
    const component = shallow(<Input />);
    expect(component).toMatchSnapshot();
  });

  describe("проверка дефолтных пропсов", () => {
    it("метод onChange должен вернуть undefined", () => {
      const result = Input.defaultProps.onChange();
      expect(result).toBe(undefined);
    });

    it("метод onKeyPress должен вернуть undefined", () => {
      const result = Input.defaultProps.onKeyPress();
      expect(result).toBe(undefined);
    });
  });
});
