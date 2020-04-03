import {films} from './mocks/films';

export const getFilms = (genre) => {

  if (genre === `All genres`) {
    return films.slice();
  }

  return films.slice().filter((it) => it.genre === genre);
};

export const initialState = {
  genre: `All genres`,
  films,
};

export const ActionCreator = {
  changeGenre: (genre) => ({
    type: `CHANGE_GENRE`,
    payload: genre,
  }),

  getFilms: (genre) => ({
    type: `GET_FILMS`,
    payload: getFilms(genre),
  })
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case `CHANGE_GENRE`:
      return Object.assign({}, state, {
        genre: action.payload,
      });
    case `GET_FILMS`:
      return Object.assign({}, state, {
        films: action.payload,
      });
  }

  return state;
};
