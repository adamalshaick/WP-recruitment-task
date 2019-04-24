import React from "react";
import Page from "./Page";
import PropTypes from "prop-types";

export const Pages = ({ planets }) => {
  const pages = [];
  for (let i = 1; i <= Math.ceil((planets.count + 1) / 10); i++) {
    pages.push(<Page key={i} pageNumber={i} />);
  }

  return <div>{pages}</div>;
};

Pages.propTypes = {
  planets: PropTypes.object.isRequired
};

export default Pages;
