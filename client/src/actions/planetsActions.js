import { GET_PLANETS } from "./types";
import axios from "axios";

// Get planets
export const getPlanets = () => {
  return async dispatch => {
    try {
      const planets = await axios.get("https://swapi.co/api/planets/");
      dispatch({
        type: GET_PLANETS,
        payload: planets.data
      });
    } catch {
      dispatch({
        type: GET_PLANETS,
        payload: null
      });
    }
  };
};

// Get planets page
export const getPlanetsPage = pageNumber => {
  return async dispatch => {
    try {
      const planets = await axios.get(
        `https://swapi.co/api/planets/?page=${pageNumber}`
      );
      dispatch({
        type: GET_PLANETS,
        payload: planets.data
      });
    } catch {
      dispatch({
        type: GET_PLANETS,
        payload: null
      });
    }
  };
};
