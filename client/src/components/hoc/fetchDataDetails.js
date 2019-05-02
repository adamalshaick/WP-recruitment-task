import React, { Component } from "react";
import PropTypes from "prop-types";
import axios from "axios";

export default ChildComponent => {
  class ComposedComponent extends Component {
    constructor(props) {
      super(props);
      this.state = {
        data: {}
      };
    }
    componentDidMount() {
      this.getData();
    }

    getData = async () => {
      const response = await axios.get(`${this.props.function}`);
      this.setState({ data: response.data });
    };

    render() {
      if (
        Object.entries(this.state.data).length === 0 &&
        this.state.data.constructor === Object
      ) {
        return <p>Loading...</p>;
      } else return <ChildComponent {...this.state} />;
    }
  }

  ComposedComponent.propTypes = {
    function: PropTypes.func.isRequired
  };

  return ComposedComponent;
};
