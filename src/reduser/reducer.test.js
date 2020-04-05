import MockAdapter from "axios-mock-adapter";
import {createAPI} from "../api";

import {ActionCreator, reducer, initialState, Operation} from "./reducer";

describe(`ActionCreator works correctly`, () => {
  it(`ActionCreator cange genre`, () => {
    expect(ActionCreator.changeGenre(`Sitcom`))
            .toEqual({
              type: `CHANGE_GENRE`,
              payload: `Sitcom`,
            });
  });

  it(`ActionCreator filter films`, () => {
    expect(ActionCreator.filteredFilms(`Sitcom`))
            .toEqual({
              type: `FILTERED_FILMS`,
              payload: [],
            });
  });
});

describe(`Reducers works correctly`, () => {
  it(`Reducer without additional parameters return initial state`, () => {
    expect(reducer(undefined, {}))
        .toEqual(initialState);
  });
});

describe(`Reducer works correctly`, () => {
  it(`Should make a correct API call to /films`, function () {
    const dispatch = jest.fn();
    const api = createAPI(dispatch);
    const apiMock = new MockAdapter(api);
    const filmsLoader = Operation.loadFilms();

    apiMock
      .onGet(`/films`)
      .reply(200, [{fake: true}]);

    return filmsLoader(dispatch, jest.fn(), api)
      .then(() => {
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: `LOAD_FILMS`,
          payload: [{fake: true}],
        });
      });
  });
});
