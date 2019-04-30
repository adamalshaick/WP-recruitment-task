import React, { Component } from "react";
import fetchPlanetsPage from "../hoc/fetchPlanetsPage";
import PropTypes from "prop-types";
import Planet from "../planets/Planet";
import PlanetInfo from "../planets/PlanetInfo";
import {
  Table,
  Wrapper,
  TableElement,
  TableRow,
  TableName,
  TableHeader
} from "../common/styles/Table";
import { PlanetWrapper } from "../common/styles/Planet";

class Page extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showPlanetInfo: false
    };
  }

  onClick = () => {
    this.setState(prevState => ({
      showPlanetInfo: !prevState.showPlanetInfo
    }));
  };
  render() {
    return (
      <Table>
        <TableHeader>
          <TableName>Name</TableName>
          <TableElement>Diameter</TableElement>
          <TableElement>Climate</TableElement>
          <TableElement>Gravity</TableElement>
          <TableElement>Population</TableElement>
        </TableHeader>
        {this.props.planets.planets.map(planet => {
          return (
            <Planet
              planet={planet}
              onToggle={this.onClick}
              toogled={this.state.showPlanetInfo}
            />
          );
        })}
      </Table>
    );
  }
}

Page.propTypes = {
  pageNumber: PropTypes.number.isRequired
};

export default fetchPlanetsPage(Page);
