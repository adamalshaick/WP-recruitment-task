import React, { Component } from "react";
import { connect } from "react-redux";
import Loading from "../common/Loading";
import { getPlanets } from "../../actions/planetsActions";

export default ChildComponent => {
  class ComposedComponent extends Component {
    componentDidMount() {
      this.props.getPlanets();
    }
    render() {
      const { planets } = this.props.planets;
      if (!planets || planets.loading) {
        return <Loading />;
      }
      return <ChildComponent {...this.props} />;
    }
  }

  const mapStateToProps = state => ({
    planets: state.planets
  });

  return connect(
    mapStateToProps,
    { getPlanets }
  )(ComposedComponent);
};
