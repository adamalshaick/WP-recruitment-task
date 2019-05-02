import React from "react";
import fetchDataDetails from "../hoc/fetchDataDetails";
import PropTypes from "prop-types";

export const Residents = ({ data }) => {
  return <p>{data.name}</p>;
};

Residents.propTypes = {
  data: PropTypes.object.isRequired
};

export default fetchDataDetails(Residents);
