import CommentModel from "../models/comment-model";
const MIN_CARDS_ON_PAGE = 8;

export const initialState = {
  movies: [],
  promo: {},
  comments: [],
  moviesFavorite: [],
  currentMovie: JSON.parse(window.localStorage.getItem(`currentMovie`)),
  isAuthorized: true,
  avatar: undefined,
  cardsOnPage: MIN_CARDS_ON_PAGE,
};

const cashCurrentMovie = (movie) => {
  window.localStorage.setItem(`currentMovie`, JSON.stringify(movie));

  return movie;
};

export const ActionType = {
  LOAD_MOVIES: `LOAD_MOVIES`,
  LOAD_PROMO: `LOAD_PROMO`,
  LOAD_COMMENTS: `LOAD_COMMENTS`,
  LOAD_FAVORITE_MOVIES: `LOAD_FAVORITE_MOVIES`,
  CHECK_AUTHORIZATION: `CHECK_AUTHORIZATION`,
  GET_AVATAR: `GET_AVATAR`,
  UPDATE_CURRENT_MOVIE: `UPDATE_CURRENT_MOVIE`,
  INCREASE_QUANTITY_FILMS: `INCREASE_QUANTITY_FILMS`,
  RESET_TO_MIN_FILMS: `RESET_TO_MIN_FILMS`,
};

export const ActionCreator = {
  loadMovies: (movies) => ({
    type: ActionType.LOAD_MOVIES,
    payload: movies
  }),
  loadPromo: (promo) => ({
    type: ActionType.LOAD_PROMO,
    payload: promo
  }),
  loadComments: (comments) => ({
    type: ActionType.LOAD_COMMENTS,
    payload: comments
  }),
  loadFavoriteMovies: (movies) => ({
    type: ActionType.LOAD_FAVORITE_MOVIES,
    payload: movies
  }),
  checkAuthorization: (isAuth) => ({
    type: ActionType.CHECK_AUTHORIZATION,
    payload: isAuth
  }),
  getAvatar: (avatarUrl) => ({
    type: ActionType.GET_AVATAR,
    payload: avatarUrl
  }),
  updateCurrentMovie: (movieId) => ({
    type: ActionType.UPDATE_CURRENT_MOVIE,
    payload: movieId
  }),
  increaseQuantityFilms: () => ({
    type: ActionType.INCREASE_QUANTITY_FILMS,
    payload: 8,
  }),
  resetToMinFilms: () => ({
    type: ActionType.RESET_TO_MIN_FILMS,
    payload: MIN_CARDS_ON_PAGE,
  }),
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_MOVIES:
      return Object.assign({}, state, {
        movies: action.payload
      });
    case ActionType.LOAD_PROMO:
      return Object.assign({}, state, {
        promo: action.payload
      });
    case ActionType.LOAD_COMMENTS:
      return Object.assign({}, state, {
        comments: CommentModel.parseComments(action.payload)
      });
    case ActionType.LOAD_FAVORITE_MOVIES:
      return Object.assign({}, state, {
        moviesFavorite: action.payload
      });
    case ActionType.CHECK_AUTHORIZATION:
      return Object.assign({}, state, {
        isAuthorized: action.payload
      });
    case ActionType.GET_AVATAR:
      return Object.assign({}, state, {
        avatar: action.payload
      });
    case ActionType.UPDATE_CURRENT_MOVIE:
      return Object.assign({}, state, {
        currentMovie: cashCurrentMovie(state.movies[action.payload])
      });
    case ActionType.INCREASE_QUANTITY_FILMS:
      return Object.assign({}, state, {
        cardsOnPage: state.cardsOnPage + action.payload,
      });
    case ActionType.RESET_TO_MIN_FILMS:
      return Object.assign({}, state, {
        cardsOnPage: action.payload,
      });
  }
  return state;
};

export const Operation = {
  loadMovies: () => (dispatch, _getState, api) => {
    return api.get(`/films`)
      .then(({data}) => {
        dispatch(ActionCreator.loadMovies(data));
      });
  },
  loadPromo: () => (dispatch, _getState, api) => {
    return api.get(`/films/promo`)
      .then(({data}) => {
        dispatch(ActionCreator.loadPromo(data));
      });
  },
  loadComments: (movieId) => (dispatch, _getState, api) => {
    return api.get(`/comments/${movieId}`)
      .then(({data}) => {
        dispatch(ActionCreator.loadComments(data));
      });
  },
  loadFavoriteMovies: () => (dispatch, _getState, api) => {
    return api.get(`/favorite`)
      .then(({data}) => {
        dispatch(ActionCreator.loadFavoriteMovies(data));
      });
  },
  addReview: (movieId, body, cb) => (dispatch, _getState, api) => {
    let error = false;
    return api.post(`/comments/${movieId}`, body)
      .then(({data}) => {
        error = false;
        cb(error);
        dispatch(ActionCreator.loadComments(data));
      })
      .catch(() => {
        error = true;
        cb(error);
      });
  },
  switchFavorite: (movieId, status, cb) => (dispatch, _getState, api) => {
    return api.post(`/favorite/${movieId}/${status}`)
      .then(() => {
        cb();
      });
  },
  logIn: (body) => (dispatch, _getState, api) => {
    return api.post(`/login`, body)
      .then(({data}) => {
        dispatch(ActionCreator.checkAuthorization(true));
        dispatch(ActionCreator.getAvatar(data.avatar_url));
      })
      .catch(() => {
        dispatch(ActionCreator.checkAuthorization(false));
      });
  },
  checkAuthorization: () => (dispatch, _getState, api) => {
    return api.get(`/login`)
      .then(({data}) => {
        dispatch(ActionCreator.checkAuthorization(true));
        dispatch(ActionCreator.getAvatar(data.avatar_url));
      })
      .catch(() => {
        dispatch(ActionCreator.checkAuthorization(false));
      });
  }
};
