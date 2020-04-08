import MockAdapter from "axios-mock-adapter";

import {
  ActionType,
  initialState, Operation,
  reducer
} from "./reducer";
import {createAPI} from "../api";

import {films} from "../mocks/mocks";

describe(`Reducers works correctly`, () => {
  const dispatch = jest.fn();
  const api = createAPI(dispatch);
  const apiMock = new MockAdapter(api);
  const moviesLoader = Operation.loadMovies();
  const promoLoader = Operation.loadPromo();
  const commentsLoader = Operation.loadComments(1);
  const checkLoginLoader = Operation.checkAuthorization();

  it(`Reducer without additional parameters return initial state`, () => {
    expect(reducer(
        undefined,
        {}))
        .toEqual(initialState);
  });

  it(`Reducer should make correct API call to /films`, () => {
    apiMock
      .onGet(`/films`)
      .reply(200, [{fake: true}]);

    return moviesLoader(dispatch, jest.fn(), api)
      .then(() => {
        expect(dispatch).toHaveBeenCalled();
        expect(dispatch).toHaveBeenCalledWith({
          type: ActionType.LOAD_MOVIES,
          payload: [{fake: true}]
        });
      });
  });

  it(`Reducer should make correct API call to /films/promo`, () => {
    apiMock
      .onGet(`/films/promo`)
      .reply(200, [{fake: true}]);

    return promoLoader(dispatch, jest.fn(), api)
      .then(() => {
        expect(dispatch).toHaveBeenCalled();
        expect(dispatch).toHaveBeenCalledWith({
          type: ActionType.LOAD_PROMO,
          payload: [{fake: true}]
        });
      });
  });

  it(`Reducer should make correct API call to /comments/:movieId`, () => {
    apiMock
      .onGet(`/comments/1`)
      .reply(200, [{fake: `true`}]);

    return commentsLoader(dispatch, {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalled();
        expect(dispatch).toHaveBeenCalledWith({
          type: ActionType.LOAD_COMMENTS,
          payload: [{fake: `true`}]
        });
      });
  });

  it(`Reducer should make correct API call to /favorite`, () => {
    apiMock
      .onGet(`//favorite`)
      .reply(200, [{fake: `true`}]);

    return commentsLoader(dispatch, {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalled();
      });
  });

  it(`Reducer should make correct API call to /login`, () => {
    apiMock
      .onGet(`/login`)
      .reply(200);

    return checkLoginLoader(dispatch, jest.fn(), api)
      .then(() => {
        expect(dispatch).toHaveBeenCalled();
        expect(dispatch).toHaveBeenCalledWith({
          type: ActionType.CHECK_AUTHORIZATION,
          payload: true
        });
      });
  });

  it(`Reducer should return avatar url`, () => {
    expect(reducer(initialState, {
      type: ActionType.GET_AVATAR,
      payload: `avatar`
    })).toEqual(Object.assign({}, initialState, {
      avatar: `avatar`
    }));
  });

  it(`Reducer should return currentMovie`, () => {
    expect(reducer(initialState, {
      type: ActionType.UPDATE_CURRENT_MOVIE,
      payload: 1
    })).toEqual(Object.assign({}, initialState, {
      currentMovie: films[1]
    }));
  });

  it(`Reducer should return increaseQuantityFilms`, () => {
    expect(reducer(initialState, {
      type: ActionType.INCREASE_QUANTITY_FILMS,
      payload: 8
    })).toEqual(Object.assign({}, initialState, {
      cardsOnPage: 16
    }));
  });

  it(`Reducer should return resetToMinFilms`, () => {
    expect(reducer(initialState, {
      type: ActionType.RESET_TO_MIN_FILMS,
      payload: 8
    })).toEqual(Object.assign({}, initialState, {
      cardsOnPage: 8
    }));
  });
});

