import configureMockStore from "redux-mock-store";
import * as planetsActions from "../../actions/planetsActions";
import * as types from "../../actions/types";
import axios from "axios";
import mockAdapter from "axios-mock-adapter";

let store;
let httpMock;
const flushAllPromises = () => new Promise(resolve => setImmediate(resolve));

beforeEach(() => {
  httpMock = new mockAdapter(axios);
  const mockStore = configureMockStore();
  store = mockStore({});
});

describe("getting planets actions", () => {
  it("fetches planets", async () => {
    httpMock.onGet("/planets").reply(200, {
      planets: [{ name: "planet #1" }, { name: "planet #2" }]
    });
    planetsActions.getPlanets()(store.dispatch);
    await flushAllPromises();
    expect(store.getActions()).toEqual([
      {
        type: types.GET_PLANETS,
        payload: { planets: [{ name: "planet #1" }, { name: "planet #2" }] }
      }
    ]);
  });
});
