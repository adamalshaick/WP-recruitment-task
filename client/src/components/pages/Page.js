import React from "react";
import fetchPlanetsPage from "../hoc/fetchPlanetsPage";
import PropTypes from "prop-types";
import Planet from "../planets/Planet";
import {
  Table,
  TableElement,
  TableName,
  TableHeader
} from "../common/styles/Table";

export const Page = ({ planets }) => {
  return (
    <Table>
      <tbody>
        <TableHeader>
          <TableName>Name</TableName>
          <TableElement>Diameter</TableElement>
          <TableElement>Climate</TableElement>
          <TableElement>Gravity</TableElement>
          <TableElement>Population</TableElement>
        </TableHeader>
        {planets.planets.map(planet => {
          return <Planet key={planet.created} planet={planet} />;
        })}
      </tbody>
    </Table>
  );
};

Page.propTypes = {
  planets: PropTypes.object.isRequired
};

export default fetchPlanetsPage(Page);
