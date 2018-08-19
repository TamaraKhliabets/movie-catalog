import {combineReducers} from 'redux';
import {movies, totalPages, moviesHasError, moviesIsLoading} from './movies';
import {option, direction, page, year, genre, sorting, showFilter} from "./options";
import {genres, genresHasErr, genresIsLoad} from "./genres";

export default combineReducers({
    movies,
    totalPages,
    moviesHasError,
    moviesIsLoading,
    option,
    direction,
    page,
    year,
    genre,
    sorting,
    genres,
    genresHasErr,
    genresIsLoad,
    showFilter,

})