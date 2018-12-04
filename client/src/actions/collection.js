import axios from 'axios/index';
import * as types from '../constants';

export const collectionHasError = bool => ({
  type: types.COLLECTION_HAS_ERROR,
  collectionHasError: bool,
});

export const collectionIsLoading = bool => ({
  type: types.COLLECTION_IS_LOADING,
  collectionIsLoading: bool,
});

export const collectionFetchDataSuccess = collection => ({
  type: types.COLLECTION_FETCH_DATA_SUCCESS,
  collection,
});

export const collectionFetchData = url => (dispatch) => {
  dispatch(collectionIsLoading(true));

  axios.get(url)
    .then((res) => {
      if (res.status !== 200) throw Error(res.statusText);
      dispatch(collectionIsLoading(false));
      return res;
    })
    .then(collection => dispatch(collectionFetchDataSuccess(collection.data)))
    .catch(() => dispatch(collectionHasError(true)));
};
