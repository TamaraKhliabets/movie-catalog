import initialState from './initialState';
import * as types from '../constants';

export const movie = (state = initialState.movie, action) => {
  switch (action.type) {
    case types.MOVIE_FETCH_DATA_SUCCESS:
      return action.movie;
    default:
      return state;
  }
};

export const movieHasErr = (state = initialState.movieHasErr, action) => {
  switch (action.type) {
    case types.MOVIE_HAS_ERROR:
      return action.movieHasError;
    default:
      return state;
  }
};

export const movieIsLoad = (state = initialState.movieIsLoad, action) => {
  switch (action.type) {
    case types.MOVIE_IS_LOADING:
      return action.movieIsLoading;
    default:
      return state;
  }
};

export const cast = (state = initialState.cast, action) => {
  switch (action.type) {
    case types.SET_CAST:
      return action.cast;
    default:
      return state;
  }
};

export const video = (state = initialState.video, action) => {
  switch (action.type) {
    case types.SET_VIDEO:
      return action.video;
    default:
      return state;
  }
};

export const similar = (state = initialState.similar, action) => {
  switch (action.type) {
    case types.SET_SIMILAR:
      return action.similar;
    default:
      return state;
  }
};

export const reviews = (state = initialState.reviews, action) => {
  switch (action.type) {
    case types.SET_REVIEWS:
      return action.reviews;
    default:
      return state;
  }
};
