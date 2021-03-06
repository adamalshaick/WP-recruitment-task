import React from "react";
import { PlanetCard, CardHeader, CloseButton } from "../common/styles/Planet";
import Films from "./Films";
import Residents from "./Residents";
import PropTypes from "prop-types";

export const PlanetInfo = ({ active, planet, onToggle }) => {
  return (
    <PlanetCard active={active}>
      <CloseButton onClick={onToggle} className="far fa-window-close" />
      <CardHeader>
        {planet.name} planet details
        <hr />
      </CardHeader>
      <div style={{ display: "flex" }}>
        <div style={{ margin: "1rem" }}>
          <p>rotation period: {planet.rotation_period}</p>
          <p>orbital period: {planet.orbital_period}</p>
          <p>diameter: {planet.diameter}</p>
          <p>climate: {planet.climate}</p>
        </div>
        <div style={{ margin: "1rem" }}>
          <p>
            films:
            {active
              ? planet.films.map(film => {
                  return <Films function={film} />;
                })
              : null}
          </p>
        </div>
        <div style={{ margin: "1rem" }}>
          <p>
            residents:
            {active
              ? planet.residents.map(resident => {
                  return <Residents function={resident} />;
                })
              : null}
          </p>
        </div>
        <div style={{ margin: "1rem" }}>
          <p>surface water: {planet.surface_water}</p>
          <p>population: {planet.population}</p>
          <p>terrain: {planet.terrain}</p>
          <p>gravity: {planet.gravity}</p>
        </div>
      </div>
    </PlanetCard>
  );
};

PlanetInfo.propTypes = {
  planet: PropTypes.object.isRequired,
  active: PropTypes.bool.isRequired,
  onToggle: PropTypes.func.isRequired
};

export default PlanetInfo;
