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

export const page = (state = initialState.page, action) => {
    switch (action.type) {
        case types.SET_CURRENT_PAGE:
            return action.page;
        default:
            return state;
    }
};

export const path = (state = initialState.path, action) => {
    if(action.type === types.SET_PATH) {
        return action.path;
    } else {
        return state;
    }
};