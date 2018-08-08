import axios from 'axios';
import {API_KEY, URL} from "../constants";
const API = `${URL}${url}?api_key=${API_KEY}&language=en-US&page=1`;

class api {
    static loadProductsFromServer() {
        return axios.get(API)
        // return fetch(API)
            .then(res => {
                return res.data
            })
            .catch(err => {
                return err
            })
    }
}

export default api;