import React from "react";
import fetchDataDetails from "../hoc/fetchDataDetails";

export const Films = ({ data }) => {
  return <p>{data.title}</p>;
};

export default fetchDataDetails(Films);
