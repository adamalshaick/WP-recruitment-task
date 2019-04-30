import React from "react";
import fetchNumberOfPages from "../hoc/fetchNumberOfPages";
import Pages from "../pages/Pages";
import PropTypes from "prop-types";

export const Landing = ({ planets }) => {
  return <Pages planets={planets}>dd</Pages>;
};

Landing.propTypes = {
  planets: PropTypes.object.isRequired
};

export default fetchNumberOfPages(Landing);
