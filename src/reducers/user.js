import initialState from './initialState';
import * as types from '../constants';

export const authHasError = (state = initialState.authHasErr, action) => {
  switch (action.type) {
    case types.AUTH_HAS_ERROR:
      return action.authHasErr;
    default:
      return state;
  }
};

export const userName = (state = initialState.userName, action) => {
  switch (action.type) {
    case types.USERS_LOGIN_SUCCESS:
      return action.userName;
    case types.USERS_LOGOUT:
      return action.userName;
    default:
      return state;
  }
};

export const messegeFromDb = (state = initialState.messegeFromDb, action) => {
  switch (action.type) {
    case types.MESSEGE_FROM_DB:
      return action.messegeFromDb;
    default:
      return state;
  }
};

export const messegeFromDbErr = (state = initialState.messegeFromDbErr, action) => {
  switch (action.type) {
    case types.MESSEGE_FROM_DB_ERR:
      return action.messegeFromDbErr;
    default:
      return state;
  }
};

export const movieIsFavorite = (state = initialState.isFavoriteMovie, action) => {
  switch (action.type) {
    case types.IS_FAVORITE_MOVIE:
      return action.isFavoriteMovie;
    default:
      return state;
  }
};

export const moviesFavorite = (state = initialState.movies, action) => {
  switch (action.type) {
    case types.MOVIE_FAVORITE_FETCH_DATA_SUCCESS:
      return action.movies;
    default:
      return state;
  }
};

export const tvIsFavorite = (state = initialState.isFavoriteTv, action) => {
  switch (action.type) {
    case types.IS_FAVORITE_TV:
      return action.isFavoriteTv;
    default:
      return state;
  }
};

export const tvsFavorite = (state = initialState.tvsFavorite, action) => {
  switch (action.type) {
    case types.TV_FAVORITE_FETCH_DATA_SUCCESS:
      return action.tvsFavorite;
    default:
      return state;
  }
};
