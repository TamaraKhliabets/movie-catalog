import initialState from './initialState';
import * as types from '../constants';

export const movies = (state = initialState.movies, action) => {
	switch (action.type) {
	case types.MOVIES_FETCH_DATA_SUCCESS:
		return action.movies;
	default:
		return state;
	}
};

export const moviesHasError = (state = initialState.hasError, action) => {
	switch (action.type) {
	case types.MOVIES_HAS_ERROR:
		return action.hasError;
	default:
		return state;
	}
};

export const moviesIsLoading = (state = initialState.isLoading, action) => {
	switch (action.type) {
	case types.MOVIES_IS_LOADING:
		return action.isLoading;
	default:
		return state;
	}
};

export const totalPages = (state = initialState.totalPages, action) => {
	switch (action.type) {
	case types.SET_TOTAL_PAGES:
		return action.pages;
	default:
		return state;
	}
};
