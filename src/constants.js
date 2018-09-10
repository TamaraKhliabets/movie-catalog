export const MONTH = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
export const API_KEY = '3ac6cd2a0ae9933683f5ccc84181b596';
export const URL = 'https://api.themoviedb.org/3';
export const MENU_ITEMS = [
    {
        id: 'menu_item_1',
        direction: '',
        url: '',
        icon: '🏠',
        name: 'Home',
    },
    {
        id: 'menu_item_2',
        direction: 'movie',
        url: '/movie/popular',
        icon: '🎬',
        name: 'Movies'
    },
    {
        id: 'menu_item_3',
        direction: 'tv',
        url: '/tv/popular',
        icon: '📺',
        name: 'TV Show'
    },
    {
        id: 'menu_item_4',
        direction: 'person',
        url: '',
        icon: '👲',
        name: 'Actors'
    }
];
export const PATH = [
    {
        id: 1,
        direction: '',
        url: ''
    },
    {
        id: 2,
        direction: 'movie',
        url: '/movie/popular'
    },
    {
        id: 3,
        direction: 'tv',
        url: '/tv/popular'
    },
    {
        id: 4,
        direction: 'person',
        url: '/person/popular'
    },
    {
        id: 5,
        direction: 'filter',
        url: '/discover/movie'
    },
    {
        id: 6,
        direction: 'genres',
        url: '/discover/movie'
    },
    {
        id: 7,
        direction: 'search',
        url: '/search/multi'
    },
    {
        id: 8,
        direction: '',
        url: ''
    }
];
export const SET_OPTION = 'SET_OPTION';
export const SET_DIRECTION = 'SET_DIRECTION';
export const SET_TOTAL_PAGES = 'SET_TOTAL_PAGES';
export const SET_PAGE = 'SET_PAGE';
export const SET_SORTING = 'SET_SORTING';
export const SET_YEAR = 'SET_YEAR';
export const SET_GENRE = 'SET_GENRE';
export const SHOW_FILTER = 'SHOW_FILTER';

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