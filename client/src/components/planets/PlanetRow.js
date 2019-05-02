import React from "react";
import { PlanetCard, CardHeader } from "../common/styles/Planet";
import Films from "./Films";
import Residents from "./Residents";
import PropTypes from "prop-types";

export const PlanetRow = ({ active, planet }) => {
  return (
    <div>dd</div>
    // <PlanetCard active={active}>
    //   <CardHeader>
    //     {planet.name} planet details
    //     <hr />
    //   </CardHeader>
    //   <div style={{ display: "flex" }}>
    //     <div style={{ margin: "1rem" }}>
    //       <p>rotation period: {planet.rotation_period}</p>
    //       <p>orbital period: {planet.orbital_period}</p>
    //       <p>diameter: {planet.diameter}</p>
    //       <p>climate: {planet.climate}</p>

    //       <p>
    //         films:
    //         {active
    //           ? planet.films.map(film => {
    //               return <Films function={film} />;
    //             })
    //           : null}
    //       </p>
    //     </div>
    //     <div style={{ margin: "1rem" }}>
    //       <p>surface water: {planet.surface_water}</p>
    //       <p>population: {planet.population}</p>
    //       <p>terrain: {planet.terrain}</p>
    //       <p>gravity: {planet.gravity}</p>
    //       <p>
    //         residents:
    //         {active
    //           ? planet.residents.map(resident => {
    //               return <Residents function={resident} />;
    //             })
    //           : null}
    //       </p>
    //     </div>
    //   </div>
    // </PlanetCard>
  );
};

// PlanetRow.propTypes = {
//   planet: PropTypes.object.isRequired,
//   active: PropTypes.bool.isRequired
// };

export default PlanetRow;
