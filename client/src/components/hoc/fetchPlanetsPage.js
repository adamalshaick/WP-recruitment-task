import React, { Component } from "react";
import { connect } from "react-redux";
import { getPlanetsPage } from "../../actions/planetsActions";
import PropTypes from "prop-types";

export default ChildComponent => {
  class ComposedComponent extends Component {
    componentDidUpdate(prevProps, prevState) {
      if (prevProps.pageNumber !== this.props.pageNumber) {
        // this.props.pageNumber === "1"
        //   ? this.props.getPlanetsPage(1)
        //   :
        this.props.getPlanetsPage(this.props.pageNumber);
      }
    }

    render() {
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
