import React from "react";
import { Page } from "../../../components/pages/Page";
import { Planet } from "../../../components/planets/Planet";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";

const Props = {
  planets: {
    planets: [{ name: "name" }, { name: "name2" }]
  }
};

const wrapper = shallow(<Page {...Props} />);
describe("render component", () => {
  it("renders component", () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});

describe("render planets", () => {
  it("renders correct number of planets", () => {
    expect(wrapper.find(Planet).length).toEqual(2);
  });
});
