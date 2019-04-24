import React from "react";
import fetchPlanetsPage from "../hoc/fetchPlanetsPage";
import PropTypes from "prop-types";

export const Page = () => {
  return <div>dd</div>;
};

Page.propTypes = {
  pageNumber: PropTypes.number.isRequired
};

export default fetchPlanetsPage(Page);
