import { combineReducers } from 'redux';
import { movies, totalPages, moviesHasError, moviesIsLoading } from './movies';
import { option, direction, page, year, genre, sorting } from './options';
import { genres, genresHasErr, genresIsLoad } from './genres';
import { movie, movieHasErr, movieIsLoad, cast, video, similar, reviews } from './movie';
import { person, personHasErr, personIsLoad, personMovie, personTv, showMovies } from './person';
import { persons, personsHasErr, personsIsLoad } from './persons';
import { collection, collectionHasErr, collectionIsLoad } from './collection';

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
  movie,
  movieHasErr,
  movieIsLoad,
  cast,
  video,
  similar,
  reviews,
  person,
  personHasErr,
  personIsLoad,
  personMovie,
  personTv,
  persons,
  personsHasErr,
  personsIsLoad,
  showMovies,
  collection,
  collectionHasErr,
  collectionIsLoad,
});
