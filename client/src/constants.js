export const MONTH = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
export const API_KEY = '3ac6cd2a0ae9933683f5ccc84181b596';
export const URL = 'https://api.themoviedb.org/3';
export const MENU_ITEMS = [
  {
    id: 'menu_item_1',
    direction: '',
    name: 'Home',
  },
  {
    id: 'menu_item_2',
    direction: 'movie',
    name: 'Movies',
  },
  {
    id: 'menu_item_3',
    direction: 'tv',
    name: 'TV Show',
  },
  {
    id: 'menu_item_4',
    direction: 'person',
    name: 'Actors',
  },
];
export const PATH = [
  {
    id: 1,
    direction: '',
    url: '',
  },
  {
    id: 2,
    direction: 'movie',
    url: '/movie/popular',
  },
  {
    id: 3,
    direction: 'tv',
    url: '/tv/popular',
  },
  {
    id: 4,
    direction: 'person',
    url: '/person/popular',
  },
  {
    id: 5,
    direction: 'filter_movie',
    url: '/discover/movie',
  },
  {
    id: 6,
    direction: 'filter_tv',
    url: '/discover/tv',
  },
  {
    id: 7,
    direction: 'genres',
    url: '/discover/movie',
  },
  {
    id: 8,
    direction: 'search',
    url: '/search/multi',
  },
  {
    id: 9,
    direction: 'collection',
    url: '/collection',
  },
];
export const SET_OPTION = 'SET_OPTION';
export const SET_DIRECTION = 'SET_DIRECTION';
export const SET_TOTAL_PAGES = 'SET_TOTAL_PAGES';
export const SET_PAGE = 'SET_PAGE';
export const SET_SORTING = 'SET_SORTING';
export const SET_YEAR = 'SET_YEAR';
export const SET_GENRE = 'SET_GENRE';

export const MOVIES_HAS_ERROR = 'MOVIES_HAS_ERROR';
export const MOVIES_IS_LOADING = 'MOVIES_IS_LOADING';
export const MOVIES_FETCH_DATA_SUCCESS = 'MOVIES_FETCH_DATA_SUCCESS';

export const GENRES_HAS_ERROR = 'GENRES_HAS_ERROR';
export const GENRES_IS_LOADING = 'GENRES_IS_LOADING';
export const GENRES_FETCH_DATA_SUCCESS = 'GENRES_FETCH_DATA_SUCCESS';

export const MOVIE_HAS_ERROR = 'MOVIE_HAS_ERROR';
export const MOVIE_IS_LOADING = 'MOVIE_IS_LOADING';
export const MOVIE_FETCH_DATA_SUCCESS = 'MOVIE_FETCH_DATA_SUCCESS';
export const SET_CAST = 'SET_CAST';
export const SET_VIDEO = 'SET_VIDEO';
export const SET_SIMILAR = 'SET_SIMILAR';
export const SET_REVIEWS = 'SET_REVIEWS';

export const PERSONS_HAS_ERROR = 'PERSONS_HAS_ERROR';
export const PERSONS_IS_LOADING = 'PERSONS_IS_LOADING';
export const PERSONS_FETCH_DATA_SUCCESS = 'PERSONS_FETCH_DATA_SUCCESS';

export const PERSON_HAS_ERROR = 'PERSON_HAS_ERROR';
export const PERSON_IS_LOADING = 'PERSON_IS_LOADING';
export const PERSON_FETCH_DATA_SUCCESS = 'PERSON_FETCH_DATA_SUCCESS';
export const PERSON_MOVIE = 'PERSON_MOVIE';
export const PERSON_TV = 'PERSON_TV';
export const SHOW_MOVIES = 'SHOW_MOVIES';

export const COLLECTION_HAS_ERROR = 'COLLECTION_HAS_ERROR';
export const COLLECTION_IS_LOADING = 'COLLECTION_IS_LOADING';
export const COLLECTION_FETCH_DATA_SUCCESS = 'COLLECTION_FETCH_DATA_SUCCESS';

export const USERS_LOGIN_SUCCESS = 'USERS_LOGIN_SUCCESS';

export const USERS_LOGOUT = 'USERS_LOGOUT';
export const AUTH_HAS_ERROR = 'AUTH_HAS_ERROR';
export const IS_FAVORITE_MOVIE = 'IS_FAVORITE_MOVIE';
export const IS_FAVORITE_TV = 'IS_FAVORITE_TV';
export const MESSEGE_FROM_DB = 'MESSEGE_FROM_DB';
export const MESSEGE_FROM_DB_ERR = 'MESSEGE_FROM_DB_ERR';
export const MOVIE_FAVORITE_FETCH_DATA_SUCCESS = 'MOVIE_FAVORITE_FETCH_DATA_SUCCESS';
export const TV_FAVORITE_FETCH_DATA_SUCCESS = 'TV_FAVORITE_FETCH_DATA_SUCCESS';
