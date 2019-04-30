import { GET_PLANETS, GET_PAGES, PLANETS_LOADING } from "../actions/types";

const initialState = {
  planets: [],
  count: 0,
  loading: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_PLANETS:
      return {
        ...state,
        planets: action.payload.results,
        loading: false
      };
    case GET_PAGES:
      return {
        ...state,
        count: action.payload.count,
        planets: action.payload.results,
        loading: false
      };
    case PLANETS_LOADING:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
};
