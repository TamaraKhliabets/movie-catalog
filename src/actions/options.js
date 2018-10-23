import { push } from 'connected-react-router';
import * as types from '../constants';


export const setOption = option => ({
	type: types.SET_OPTION,
	option,
});

export const setDirection = direction => ({
	type: types.SET_DIRECTION,
	direction,
});

export const setPage = page => ({
	type: types.SET_PAGE,
	page,
});

export const setYear = year => ({
	type: types.SET_YEAR,
	year,
});

export const setGenre = genre => ({
	type: types.SET_GENRE,
	genre,
});

export const setSorting = sorting => ({
	type: types.SET_SORTING,
	sorting,
});

export const changePage = query => (dispatch) => {
	dispatch(push(query));
};
