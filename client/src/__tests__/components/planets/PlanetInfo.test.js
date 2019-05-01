import React from "react";
import { PlanetInfo } from "../../../components/planets/PlanetInfo";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import Films from "../../../components/planets/Films";
import Residents from "../../../components/planets/Residents";

describe("planet info functionality when active", () => {
  const Props = {
    planet: {
      films: [{ title: "title1" }, { title: "title2" }, { title: "title3" }],
      residents: [{ name: "resident1" }, { name: "resident2" }]
    },
    active: true
  };

  const wrapper = shallow(<PlanetInfo {...Props} />);
  it("renders component", () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it("returns correct number of films component", () => {
    expect(wrapper.find(Films).length).toEqual(3);
  });

  it("returns correct number of residents component", () => {
    expect(wrapper.find(Residents).length).toEqual(2);
  });
});

describe("planet info functionality when disabled", () => {
  const Props = {
    planet: {
      films: [{ title: "title1" }, { title: "title2" }, { title: "title3" }],
      residents: [{ name: "resident1" }, { name: "resident2" }]
    },
    active: false
  };

  const wrapper = shallow(<PlanetInfo {...Props} />);
  it("renders component", () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it("doenst render films and residents components", () => {
    expect(wrapper.find(Films).length).toEqual(0);
    expect(wrapper.find(Residents).length).toEqual(0);
  });
});
