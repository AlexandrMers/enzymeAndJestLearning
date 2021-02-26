import React from "react";
import Posts from "./index.js";

function simulateChange(input, SEARCH_QUERY_STATE_1) {
  input.simulate("change", {
    target: {
      value: SEARCH_QUERY_STATE_1,
    },
  });
}

function expectValuesWithComponent(component, SEARCH_QUERY_STATE_1) {
  expect(component.find("input.input").props().value).toEqual(
    SEARCH_QUERY_STATE_1
  );
}

describe("Posts component", () => {
  let component;

  beforeEach(() => {
    component = mount(<Posts />);
  });

  it("should render Posts component", function () {
    expect(component).toMatchSnapshot();
  });
  //
  describe("методы компонента Posts", () => {
    describe("метод - handleHitsChange()", () => {
      it("дефолтное состояние hitsPerPage и page", () => {
        const INITIAL_HITS_PER_PAGE = 20;
        const INITIAL_PAGE_NUMBER = 2;
        const selectElement = component.find("select");

        expect(selectElement.prop("value")).toEqual(INITIAL_HITS_PER_PAGE);
        expect(component.find("h2").text()).toEqual(
          `current page - ${INITIAL_PAGE_NUMBER}`
        );
      });

      it("изменение perPage", () => {
        const CHANGE_PER_PAGE_VALUE = 10;
        const PAGE_NUMBER = 0;

        const selectElement = component.find("select");

        selectElement.simulate("change", {
          target: {
            value: Number(CHANGE_PER_PAGE_VALUE),
          },
        });

        const resultValue = component.find("select").props().value;

        expect(resultValue).toEqual(CHANGE_PER_PAGE_VALUE);
        expect(component.find("h2").text()).toEqual(
          `current page - ${PAGE_NUMBER}`
        );
      });
    });

    describe("метод - handleInputChange()", () => {
      let input;

      beforeEach(() => {
        input = component.find("input.input");
      });

      it("изменение состояния searchQuery", () => {
        const SEARCH_QUERY_STATE_0 = "";
        const SEARCH_QUERY_STATE_1 = "Запрос для теста 1";
        const SEARCH_QUERY_STATE_2 = "Запрос для теста 2";

        expectValuesWithComponent(component, SEARCH_QUERY_STATE_0);

        simulateChange(input, SEARCH_QUERY_STATE_1);
        expectValuesWithComponent(component, SEARCH_QUERY_STATE_1);

        simulateChange(input, SEARCH_QUERY_STATE_2);
        expectValuesWithComponent(component, SEARCH_QUERY_STATE_2);
      });
    });
  });
});
