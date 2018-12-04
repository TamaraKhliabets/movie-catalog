import axios from 'axios';
import * as types from '../constants';

export const genresHasError = bool => ({
  type: types.GENRES_HAS_ERROR,
  genresHasError: bool,
});

export const genresIsLoading = bool => ({
  type: types.GENRES_IS_LOADING,
  genresIsLoading: bool,
});

export const genresFetchDataSuccess = genres => ({
  type: types.GENRES_FETCH_DATA_SUCCESS,
  genres,
});

export const genresFetchData = url => (dispatch) => {
  dispatch(genresIsLoading(true));

  axios.get(url)
    .then((res) => {
      if (res.status !== 200) throw Error(res.statusText);
      dispatch(genresIsLoading(false));
      return res;
    })
    .then(genres => dispatch(genresFetchDataSuccess(genres.data.genres)))
    .catch(() => dispatch(genresHasError(true)));
};
