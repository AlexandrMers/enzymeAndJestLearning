import React from "react";
import Select from "./index";

/**
 * @var {{
 *   options: Array.<{value: String, label: String}>,
 *   value: Number,
 *   handleChange: Function
 * }}
 */
const props = {
  options: [
    {
      value: "some value 1",
      label: "some label 1",
    },
    {
      value: "some value 2",
      label: "some label 2",
    },
  ],
  value: 0,
  handleChange: () => {},
};

const setUp = (props) => shallow(<Select {...props} />);

describe("тестирование компонента Select", () => {
  describe("с переданными пропсами", () => {
    const component = setUp(props);

    it("должен отрендериться элемент select", () => {
      const select = component.find("select");
      expect(select).toHaveLength(1);
    });

    it("должны отрендериться 2 option-а", () => {
      const options = component.find("option");
      expect(options).toHaveLength(2);
    });
  });

  describe("без переданных пропсов", () => {
    it("должен отрендериться плейсхолдер", () => {
      const component = setUp();
      const placeholder = component.find(".placeholder");

      expect(placeholder).toHaveLength(1);
    });
  });

  describe("проверка дефолтных пропсов", () => {
    it("handleChange должен вернуть undefined", () => {
      const result = Select.defaultProps.handleChange();

      expect(result).toBe(undefined);
    });
  });
});
