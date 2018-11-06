import initialState from './initialState';
import * as types from '../constants';

export const persons = (state = initialState.persons, action) => {
  switch (action.type) {
    case types.PERSONS_FETCH_DATA_SUCCESS:
      return action.persons;
    default:
      return state;
  }
};

export const personsHasErr = (state = initialState.personsHasErr, action) => {
  switch (action.type) {
    case types.PERSONS_HAS_ERROR:
      return action.personsHasErr;
    default:
      return state;
  }
};

export const personsIsLoad = (state = initialState.personsIsLoad, action) => {
  switch (action.type) {
    case types.PERSONS_IS_LOADING:
      return action.personsIsLoad;
    default:
      return state;
  }
};
