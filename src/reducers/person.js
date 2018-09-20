import initialState from './initialState';
import * as types from '../constants';

export const person = (state = initialState.person, action) => {
    switch(action.type) {
        case types.PERSON_FETCH_DATA_SUCCESS:
            return action.person;
        default:
            return state;
    }
};

export const personHasErr = (state = initialState.personHasErr, action) => {
    switch (action.type) {
        case types.PERSON_HAS_ERROR:
            return action.personHasError;
        default:
            return state;
    }
};

export const personIsLoad = (state = initialState.personIsLoad, action) => {
    switch (action.type) {
        case types.PERSON_IS_LOADING:
            return action.personIsLoading;
        default:
            return state;
    }
};

export const personMovie = (state = initialState.personMovie, action) => {
    switch (action.type) {
        case types.PERSON_MOVIE:
            return action.personMovie;
        default:
            return state;
    }
};

export const showMovies = (state = initialState.showMovies, action) => {
    switch (action.type) {
        case types.SHOW_MOVIES:
            return action.showMovies;
        default:
            return state;
    }
};

export const personTv = (state = initialState.personTv, action) => {
    switch (action.type) {
        case types.PERSON_TV:
            return action.personTv;
        default:
            return state;
    }
}