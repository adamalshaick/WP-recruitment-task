import React from "react";
import fetchPlanets from "../hoc/fetchPlanets";
import Pages from "../pages/Pages";
import PropTypes from "prop-types";
import Loading from "../common/Loading";

export const Landing = ({ planets }) => {
  return <Pages planets={planets}>dd</Pages>;
};

Landing.propTypes = {
  planets: PropTypes.object.isRequired
};

export default fetchPlanets(Landing);
