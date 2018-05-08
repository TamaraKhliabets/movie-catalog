import React, {Component} from 'react';
import axios from 'axios';
import Carousel from '../home/Carousel';
import {API_KEY, URL} from "../../constants";

export default class Home extends Component {
    state = {
        movies: null
    };

    loadTopMovies = () => {
        axios.get(`${URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=1`)
            .then(res => this.setState({movies: res.data}))
    };

    componentDidMount() {
        this.loadTopMovies()
    }

    render() {
        const {movies} = this.state;

        if (!movies) return <div className='loading'/>;

        return (
            <div>
                <Carousel units={movies.results}/>
            </div>
        )
    }
}