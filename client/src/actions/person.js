import axios from 'axios/index';
import * as types from '../constants';

export const personHasError = bool => ({
  type: types.PERSON_HAS_ERROR,
  personHasError: bool,
});

export const personIsLoading = bool => ({
  type: types.PERSON_IS_LOADING,
  personIsLoading: bool,
});

export const personFetchDataSuccess = person => ({
  type: types.PERSON_FETCH_DATA_SUCCESS,
  person,
});

export const setPersonMovie = personMovie => ({
  type: types.PERSON_MOVIE,
  personMovie,
});

export const setPersonTv = personTv => ({
  type: types.PERSON_TV,
  personTv,
});

export const setActualMovies = bool => ({
  type: types.SHOW_MOVIES,
  showMovies: bool,
});

export const personFetchData = url => (dispatch) => {
  dispatch(personIsLoading(true));

  axios.get(url)
    .then((res) => {
      if (res.status !== 200) throw Error(res.statusText);
      dispatch(personIsLoading(false));
      return res;
    })
    .then((person) => {
      dispatch(personFetchDataSuccess(person.data));
      return person;
    })
    .then((person) => {
      dispatch(setPersonMovie(person.data.movie_credits.cast));
      return person;
    })
    .then(person => dispatch(setPersonTv(person.data.tv_credits.cast)))
    .catch(() => dispatch(personHasError(true)));
};
