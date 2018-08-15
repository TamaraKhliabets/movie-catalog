import { combineReducers } from 'redux';
import { movies, totalPages, moviesHasError, moviesIsLoading } from './movies';
import { option, direction, page } from "./options";

export default combineReducers({
    movies,
    totalPages,
    moviesHasError,
    moviesIsLoading,
    option,
    direction,
    page
})