import React from "react";
import Pages from "../../../components/pages/Pages";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import Page from "../../../components/pages/Page";

const Props = {
  planets: {
    count: 61
  }
};

const wrapper = shallow(<Pages {...Props} />);
describe("render component", () => {
  it("renders component", () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  describe("pages functionality", () => {
    it("returns correct number of Page components", () => {
      expect(wrapper.find(Page).length).toEqual(7);
    });

    it("gives each Page component correct page number", () => {
      let i = 1;
      wrapper.find(Page).forEach(node => {
        expect(node.props().pageNumber).toEqual(i);
        i = i + 1;
      });
    });
  });
});
