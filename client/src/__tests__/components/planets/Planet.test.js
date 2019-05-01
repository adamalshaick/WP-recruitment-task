import React from "react";
import { Planet } from "../../../components/planets/Planet";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import { TableRow } from "../../../components/common/styles/Table";

const Props = {
  planet: {}
};

const wrapper = shallow(<Planet {...Props} />);

describe("render component", () => {
  it("renders component", () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});

describe("show planet info functionality", () => {
  it("toggles planet info state", () => {
    expect(wrapper.state().showPlanetInfo).toEqual(false);
    wrapper.find(TableRow).simulate("click", { preventDefault() {} });
    expect(wrapper.state().showPlanetInfo).toEqual(true);
    wrapper.find(TableRow).simulate("click", { preventDefault() {} });
    expect(wrapper.state().showPlanetInfo).toEqual(false);
  });
});
