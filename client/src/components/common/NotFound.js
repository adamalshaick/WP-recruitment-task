import React from "react";
import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <div>
      Sorry, this page doesn't exist
      <Link to="/">Back to the main page</Link>
    </div>
  );
};

export default NotFound;
