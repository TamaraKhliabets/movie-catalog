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
        direction: 'persons',
        url: '',
        icon: '👲',
        name: 'Actors'
    }
];
export const SET_OPTION = 'SET_OPTION';
export const SET_DIRECTION = 'SET_DIRECTION';
export const SET_TOTAL_PAGES = 'SET_TOTAL_PAGES';
export const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
export const MOVIES_HAS_ERROR = 'MOVIES_HAS_ERROR';
export const MOVIES_IS_LOADING = 'MOVIES_IS_LOADING';
export const MOVIES_FETCH_DATA_SUCCESS = 'MOVIES_FETCH_DATA_SUCCESS';