export const getGenreList = (films) => {

  let genresList = new Set(films.map((it) => it[`genre`]));
  initialState.genres = initialState.genres.concat(Array.from(genresList)).slice(0, 10);

  return initialState.genres;
};

export const filteredFilms = (genre) => {
  if (genre === `All genres`) {
    return initialState.films.slice();
  }

  return initialState.films.slice().filter((it) => it.genre === genre);
};

export const getFilmById = (id) => {
  initialState.currentFilmCard = initialState.films.slice().find((item) => item.id == id);

  return initialState.currentFilmCard;
};

const MIN_CARDS_ON_PAGE = 8;

export const initialState = {
  genre: `All genres`,
  genres: [`All genres`],
  films: [],
  cardsOnPage: MIN_CARDS_ON_PAGE,
  requireAuthorization: false,
  avatar: null,
  currentFilmCard: null,
  promo: null,
};

const ActionType = {
  CHANGE_GENRE: `CHANGE_GENRE`,
  LOAD_FILMS: `LOAD_FILMS`,
  LOAD_PROMO: `LOAD_PROMO`,
  FILTERED_FILMS: `FILTERED_FILMS`,
  GET_GENRE_LIST: `GET_GENRE_LIST`,
  INCREASE_QUANTITY_FILMS: `INCREASE_QUANTITY_FILMS`,
  RESET_TO_MIN_FILMS: `RESET_TO_MIN_FILMS`,
  REQUIRE_AUTHORIZATION: `REQUIRE_AUTHORIZATION`,
  LOGIN_USER: `LOGIN_USER`,
  GET_FILM_BY_ID: `GET_FILM_BY_ID`,
};

export const ActionCreator = {
  changeGenre: (genre) => ({
    type: ActionType.CHANGE_GENRE,
    payload: genre,
  }),

  loadFilms: (films) => ({
    type: ActionType.LOAD_FILMS,
    payload: films,
  }),

  loadPromo: (promo) => ({
    type: ActionType.LOAD_PROMO,
    payload: promo,
  }),

  filteredFilms: (genre) => ({
    type: ActionType.FILTERED_FILMS,
    payload: filteredFilms(genre),
  }),

  getGenreList: (genres) => ({
    type: ActionType.GET_GENRE_LIST,
    payload: getGenreList(genres),
  }),

  increaseQuantityFilms: () => ({
    type: ActionType.INCREASE_QUANTITY_FILMS,
    payload: 20,
  }),

  resetToMinFilms: () => ({
    type: ActionType.RESET_TO_MIN_FILMS,
    payload: MIN_CARDS_ON_PAGE,
  }),

  requireAuthorization: (status) => ({
    type: ActionType.REQUIRE_AUTHORIZATION,
    payload: status,
  }),

  loginUser: (data) => ({
    type: ActionType.LOGIN_USER,
    payload: data,
  }),
  getFilmById: (id) => ({
    type: ActionType.GET_FILM_BY_ID,
    payload: getFilmById(id),
  }),
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_GENRE:
      return Object.assign({}, state, {
        genre: action.payload,
      });
    case ActionType.LOAD_FILMS:
      return Object.assign({}, state, {
        films: action.payload,
      });
    case ActionType.LOAD_PROMO:
      return Object.assign({}, state, {
        promo: action.payload,
      });
    case ActionType.GET_GENRE_LIST:
      return Object.assign({}, state, {
        genres: action.payload,
      });
    case ActionType.FILTERED_FILMS:
      return Object.assign({}, state, {
        films: action.payload,
      });
    case ActionType.INCREASE_QUANTITY_FILMS:
      return Object.assign({}, state, {
        cardsOnPage: state.cardsOnPage + action.payload,
      });
    case ActionType.RESET_TO_MIN_FILMS:
      return Object.assign({}, state, {
        cardsOnPage: action.payload,
      });
    case ActionType.REQUIRE_AUTHORIZATION:
      return Object.assign({}, state, {
        requireAuthorization: action.payload,
      });
    case ActionType.LOGIN_USER:
      return Object.assign({}, state, {
        id: action.payload.id,
        email: action.payload.email,
        name: action.payload.name,
        avatar: action.payload.avatar_url,
      });
    case ActionType.GET_FILM_BY_ID:
      return Object.assign({}, state, {
        currentFilmCard: action.payload,
      });
  }

  return state;
};

export const Operation = {
  loadFilms: () => (dispatch, _getState, api) => {
    return api.get(`/films`)
      .then((response) => {
        dispatch(ActionCreator.loadFilms(response.data));
        dispatch(ActionCreator.getGenreList(response.data));
        initialState.films = response.data;
      })
      .catch((error) => {
        throw new Error(error);
      });
  },
  loadPromo: () => (dispatch, _getState, api) => {
    return api.get(`/films/promo`)
      .then((response) => {
        dispatch(ActionCreator.loadPromo(response.data));
        initialState.promo = response.data;
      });
  },
  checkAuth: (login, password) => {
    return (dispatch, _getState, api) => {
      return api
        .post(`/login`, {
          email: login,
          password,
        })
        .then((res) => {
          if (res.status >= 200) {
            dispatch(ActionCreator.requireAuthorization(true));
            dispatch(ActionCreator.loginUser(res.data));
          }
        })
        .catch((error) => {
          throw new Error(error);
        });
    };
  }
};
