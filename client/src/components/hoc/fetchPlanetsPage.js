import React, { Component } from "react";
import { connect } from "react-redux";
import Loading from "../common/Loading";
import { getPlanetsPage } from "../../actions/planetsActions";
import PropTypes from "prop-types";

export default ChildComponent => {
  class ComposedComponent extends Component {
    componentDidMount() {
      this.props.getPlanetsPage(this.props.pageNumber);
    }
    render() {
      const { planets } = this.props.planets;
      if (!planets) {
        return <Loading />;
      }
      return <ChildComponent {...this.props} />;
    }
  }

  ComposedComponent.propTypes = {
    planets: PropTypes.object.isRequired,
    getPlanetsPage: PropTypes.func.isRequired
  };

  const mapStateToProps = state => ({
    planets: state.planets
  });

  return connect(
    mapStateToProps,
    { getPlanetsPage }
  )(ComposedComponent);
};
