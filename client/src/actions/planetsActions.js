import { GET_PLANETS, GET_PAGES, PLANETS_LOADING } from "./types";
import axios from "axios";

// Get number of elements
export const getPages = () => {
  return async dispatch => {
    dispatch(setPlanetsLoading);
    try {
      const planets = await axios.get("https://swapi.co/api/planets/");
      dispatch({
        type: GET_PAGES,
        payload: planets.data
      });
    } catch {
      dispatch({
        type: GET_PAGES,
        payload: null
      });
    }
  };
};

// Get planets page
export const getPlanetsPage = pageNumber => {
  return async dispatch => {
    dispatch(setPlanetsLoading());
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

// Set planets loading
export const setPlanetsLoading = () => {
  return {
    type: PLANETS_LOADING
  };
};
