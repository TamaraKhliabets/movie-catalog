import React, {Component} from 'react';
import axios from "axios/index";
import {API_KEY, URL} from "../../constants";
import ListItem from '../movies/ListItem';
import ButtonPage from './../buttons/ButtonPage';
import ButtonFilter from "../buttons/ButtonFilter";

export default class Req extends Component{
    state = {
        movies: null
    };

    loadMovies = () => {
        let {url, options, page} = this.props;
        axios.get(`${URL}${url}?api_key=${API_KEY}&${options}&page=${page}`)
            .then(res => this.setState({movies: res.data}))
    };

    componentDidMount() {
        this.loadMovies()
    }

    render() {
        const {movies} = this.state;

        if (!movies) return <div className='loading'/>;

        return (
            <div>
                <ButtonFilter {...this.props}/>
                <ListItem movies={movies.results}/>
                <ButtonPage {...this.props}
                            total={movies.total_pages}/>
            </div>
        )
    }
}