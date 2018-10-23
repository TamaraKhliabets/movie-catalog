import initialState from './initialState';
import * as types from '../constants';

export const genres = (state = initialState.genres, action) => {
	switch (action.type) {
	case types.GENRES_FETCH_DATA_SUCCESS:
		return action.genres;
	default:
		return state;
	}
};

export const genresHasErr = (state = initialState.genresHasErr, action) => {
	switch (action.type) {
	case types.GENRES_HAS_ERROR:
		return action.genresHasError;
	default:
		return state;
	}
};

export const genresIsLoad = (state = initialState.genresIsLoad, action) => {
	switch (action.type) {
	case types.GENRES_IS_LOADING:
		return action.genresIsLoading;
	default:
		return state;
	}
};
