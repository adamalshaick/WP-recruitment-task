import { GET_PLANETS } from "../actions/types";

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
        count: action.payload.count,
        loading: false
      };
    default:
      return state;
  }
};
