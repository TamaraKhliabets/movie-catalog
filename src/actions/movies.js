import * as types from '../constants';
import axios from "axios/index";

export const moviesHasError = bool => ({
    type: types.MOVIES_HAS_ERROR,
    hasError: bool
});

export const moviesIsLoading = bool => ({
    type: types.MOVIES_IS_LOADING,
    isLoading: bool
});

export const moviesFetchDataSuccess = movies => ({
    type: types.MOVIES_FETCH_DATA_SUCCESS,
    movies
});

export const total_pages = pages => ({
    type: types.SET_TOTAL_PAGES,
    pages
});

export const moviesFetchData = url => dispatch => {
    dispatch(moviesIsLoading(true));

    axios.get(url)
        .then(res => {
            if(res.status !== 200) throw Error(res.statusText);
            dispatch(moviesIsLoading(false));
            return res
        })
        .then(movies => {
            dispatch(moviesFetchDataSuccess(movies.data.results));
            return movies;
        })
        .then(movies => dispatch(total_pages(movies.data.total_pages)))
        .catch(() => dispatch(moviesHasError(true)))
};
