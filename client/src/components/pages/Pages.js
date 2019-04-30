import React, { Component } from "react";
import Page from "./Page";
import PropTypes from "prop-types";
import { ButtonsCard, Button } from "../common/styles/Buttons";

export class Pages extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pageNumber: "1"
    };
  }

  onClick = i => e => {
    e.preventDefault();
    this.setState({ pageNumber: i });
  };

  render() {
    const buttons = [];
    const pagesCount = Math.ceil((this.props.planets.count + 1) / 10);

    for (let i = 1; i <= pagesCount; i++) {
      buttons.push(
        <Button className="m-2" href="#" onClick={this.onClick(i)}>
          {i}
        </Button>
      );
    }
    return (
      <div>
        <Page pageNumber={this.state.pageNumber} />
        <ButtonsCard>{buttons}</ButtonsCard>
      </div>
    );
  }
}

Pages.propTypes = {
  planets: PropTypes.object.isRequired
};

export default Pages;
