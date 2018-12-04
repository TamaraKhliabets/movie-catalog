import initialState from './initialState';
import * as types from '../constants';

export const collection = (state = initialState.collection, action) => {
  switch (action.type) {
    case types.COLLECTION_FETCH_DATA_SUCCESS:
      return action.collection;
    default:
      return state;
  }
};

export const collectionHasErr = (state = initialState.collectionHasErr, action) => {
  switch (action.type) {
    case types.COLLECTION_HAS_ERROR:
      return action.collectionHasError;
    default:
      return state;
  }
};

export const collectionIsLoad = (state = initialState.collectionIsLoad, action) => {
  switch (action.type) {
    case types.COLLECTION_IS_LOADING:
      return action.collectionIsLoading;
    default:
      return state;
  }
};
