import axios from 'axios/index';
import * as types from '../constants';

export const movieHasError = bool => ({
	type: types.MOVIE_HAS_ERROR,
	movieHasError: bool,
});

export const movieIsLoading = bool => ({
	type: types.MOVIE_IS_LOADING,
	movieIsLoading: bool,
});

export const movieFetchDataSuccess = movie => ({
	type: types.MOVIE_FETCH_DATA_SUCCESS,
	movie,
});

export const setCast = cast => ({
	type: types.SET_CAST,
	cast,
});

export const setVideo = video => ({
	type: types.SET_VIDEO,
	video,
});

export const setSimilar = similar => ({
	type: types.SET_SIMILAR,
	similar,
});

export const setReviews = reviews => ({
	type: types.SET_REVIEWS,
	reviews,
});

export const movieFetchData = url => (dispatch) => {
	dispatch(movieIsLoading(true));

	axios.get(url)
		.then((res) => {
			if (res.status !== 200) throw Error(res.statusText);
			dispatch(movieIsLoading(false));
			return res;
		})
		.then((movie) => {
			dispatch(movieFetchDataSuccess(movie.data));
			return movie;
		})
		.then((movie) => {
			dispatch(setCast(movie.data.credits.cast));
			return movie;
		})
		.then((movie) => {
			dispatch(setVideo(movie.data.videos.results));
			return movie;
		})
		.then((movie) => {
			dispatch(setSimilar(movie.data.similar.results));
			return movie;
		})
		.then(movie => dispatch(setReviews(movie.data.reviews.results)))
		.catch(() => dispatch(movieHasError(true)));
};
