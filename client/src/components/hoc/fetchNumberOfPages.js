import React, { Component } from "react";
import { connect } from "react-redux";
import Loading from "../common/Loading";
import { getPages } from "../../actions/planetsActions";
import PropTypes from "prop-types";

export default ChildComponent => {
  class ComposedComponent extends Component {
    componentDidMount() {
      this.props.getPages();
    }
    render() {
      const { planets } = this.props;
      if (planets.loading || planets.count === 0) {
        return <Loading />;
      }
      return <ChildComponent {...this.props} />;
    }
  }

  ComposedComponent.propTypes = {
    planets: PropTypes.object.isRequired,
    getPlanets: PropTypes.func.isRequired
  };

  const mapStateToProps = state => ({
    planets: state.planets
  });

  return connect(
    mapStateToProps,
    { getPages }
  )(ComposedComponent);
};
