import React, { Component } from "react";
import { TableRow, TableElement, TableName } from "../common/styles/Table";
import { PlanetCard, PlanetWrapper } from "../common/styles/Planet";
import PlanetInfo from "./PlanetInfo";

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
        <TableRow onClick={this.onClick} active={this.props.toggled}>
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

export default Planet;

// import React from "react";
// import { TableRow, TableElement, TableName } from "../common/styles/Table";
// import { PlanetCard, PlanetWrapper } from "../common/styles/Planet";
// import PlanetInfo from "./PlanetInfo";

// export const Planet = ({ planet, active, onToggle }) => {
//   return (
//     <>
//       <TableRow onClick={onToggle} active={active}>
//         <TableName>{planet.name}</TableName>
//         <TableElement>{planet.diameter}</TableElement>
//         <TableElement>{planet.climate}</TableElement>
//         <TableElement>{planet.gravity}</TableElement>
//         <TableElement>{planet.population}</TableElement>
//       </TableRow>
//       {active ? <PlanetInfo active={active} planet={planet} /> : null}
//     </>
//   );
// };

// export default Planet;
