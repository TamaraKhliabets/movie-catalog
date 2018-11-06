import axios from 'axios/index';
import * as types from '../constants';

export const personsHasError = bool => ({
  type: types.PERSONS_HAS_ERROR,
  personsHasErr: bool,
});

export const personsIsLoading = bool => ({
  type: types.PERSONS_IS_LOADING,
  personsIsLoad: bool,
});

export const personsFetchDataSuccess = persons => ({
  type: types.PERSONS_FETCH_DATA_SUCCESS,
  persons,
});

export const totalPages = pages => ({
  type: types.SET_TOTAL_PAGES,
  pages,
});

export const personsFetchData = url => (dispatch) => {
  dispatch(personsIsLoading(true));

  axios.get(url)
    .then((res) => {
      if (res.status !== 200) throw Error(res.statusText);
      dispatch(personsIsLoading(false));
      return res;
    })
    .then((persons) => {
      dispatch(personsFetchDataSuccess(persons.data.results));
      return persons;
    })
    .then(persons => dispatch(totalPages(persons.data.total_pages)))
    .catch(() => dispatch(personsHasError(true)));
};
