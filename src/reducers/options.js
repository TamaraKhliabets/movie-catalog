import initialState from './initialState';
import * as types from '../constants';

export const option = (state = initialState.option, action) => {
    switch(action.type) {
        case types.SET_OPTION:
            return action.option;
        default:
            return state;
    }
};

export const direction = (state = initialState.direction, action) => {
    switch(action.type) {
        case types.SET_DIRECTION:
            return action.direction;
        default:
            return state;
    }
};