import * as types from '../constants';


export const setOption = option => ({
    type: types.SET_OPTION,
    option
});

export const setDirection = direction => ({
    type: types.SET_DIRECTION,
    direction
});

export const setCurrentPage = page => ({
    type: types.SET_CURRENT_PAGE,
    page
});

export const setCurrentPath= path => ({
    type: types.SET_PATH,
    path
});