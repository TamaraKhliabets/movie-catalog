import React, {Component} from 'react';
import {API_KEY, URL} from "../../constants";
import ListItem from '../movies/ListItem';
import ButtonPage from './../buttons/ButtonPage';
import ButtonFilter from "../buttons/ButtonFilter";


export default class Req extends Component {
    // componentDidUpdate(prevProps) {
    //     const {url, option, page, fetchMovies, onLoad} = this.props;
    //     if (prevProps !== this.props) {
    //         fetchMovies(`${URL}${url}?api_key=${API_KEY}&${option}&page=${page}`);
    //         onLoad();
    //     }
    // }

    componentDidMount() {
        const {url, option, page, fetchMovies, onLoad} = this.props;
        fetchMovies(`${URL}${url}?api_key=${API_KEY}&${option}&page=${page}`);
        onLoad();
        // console.log(url)
    }

    render() {
        const {movies, hasError, isLoading} = this.props;

        console.log(isLoading);

        if (hasError || isLoading || !movies) return <div className='loading'/>;

        return (
            <div>
                <ButtonFilter/>
                <ListItem/>
                <ButtonPage/>
            </div>
        )
    }
}