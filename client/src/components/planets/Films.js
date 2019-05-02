import React from "react";
import fetchDataDetails from "../hoc/fetchDataDetails";
import PropTypes from "prop-types";

export const Films = ({ data }) => {
  return <p>{data.title}</p>;
};

Films.propTypes = {
  data: PropTypes.object.isRequired
};

export default fetchDataDetails(Films);
