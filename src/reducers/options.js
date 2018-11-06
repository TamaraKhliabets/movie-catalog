import initialState from './initialState';
import * as types from '../constants';

export const option = (state = initialState.option, action) => {
  switch (action.type) {
    case types.SET_OPTION:
      return action.option;
    default:
      return state;
  }
};

export const direction = (state = initialState.direction, action) => {
  switch (action.type) {
    case types.SET_DIRECTION:
      return action.direction;
    default:
      return state;
  }
};

export const page = (state = initialState.page, action) => {
  switch (action.type) {
    case types.SET_PAGE:
      return action.page;
    default:
      return state;
  }
};

export const year = (state = initialState.year, action) => {
  if (action.type === types.SET_YEAR) {
    return action.year;
  }
  return state;
};

export const sorting = (state = initialState.sorting, action) => {
  if (action.type === types.SET_SORTING) {
    return action.sorting;
  }
  return state;
};

export const genre = (state = initialState.genre, action) => {
  if (action.type === types.SET_GENRE) {
    return action.genre;
  }
  return state;
};
