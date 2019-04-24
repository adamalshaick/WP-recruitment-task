import React, { Component } from "react";

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
      <div>
        <div onClick={this.onClick} />
      </div>
    );
  }
}

export default Planet;
