import React from "react";
import fetchDataDetails from "../hoc/fetchDataDetails";

export const Residents = ({ data }) => {
  return <p>{data.name}</p>;
};

export default fetchDataDetails(Residents);
