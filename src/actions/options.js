import * as types from '../constants';


export const setOption = option => ({
    type: types.SET_OPTION,
    option
});

export const setDirection = direction => ({
    type: types.SET_DIRECTION,
    direction
});