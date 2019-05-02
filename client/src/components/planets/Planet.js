import React, { Component } from "react";
import { TableRow, TableElement, TableName } from "../common/styles/Table";
import { PlanetWrapper } from "../common/styles/Planet";
import PlanetInfo from "./PlanetInfo";
import PropTypes from "prop-types";

export class Planet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showPlanetInfo: false
    };
  }

  onClick = e => {
    e.preventDefault();
    this.setState(prevState => ({
      showPlanetInfo: !prevState.showPlanetInfo
    }));
  };

  render() {
    return (
      <>
        <TableRow onClick={this.onClick} active={this.state.showPlanetInfo}>
          <TableName>{this.props.planet.name}</TableName>
          <TableElement>{this.props.planet.diameter}</TableElement>
          <TableElement>{this.props.planet.climate}</TableElement>
          <TableElement>{this.props.planet.gravity}</TableElement>
          <TableElement>{this.props.planet.population}</TableElement>
        </TableRow>
        <PlanetInfo
          active={this.state.showPlanetInfo}
          planet={this.props.planet}
        />
        <PlanetWrapper
          active={this.state.showPlanetInfo}
          onClick={this.onClick}
        />
      </>
    );
  }
}

Planet.propTypes = {
  planet: PropTypes.object.isRequired
};

export default Planet;
