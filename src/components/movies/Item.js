import React, {Component} from 'react';
import DataMovie from './DataMovie';
import Cast from '../person/Cast';
import axios from 'axios';
import {API_KEY, URL} from "../../constants";
import Similar from "./Similar";
import Video from "./Video";
import Reviews from "./Reviews";

export default class Item extends Component {
    state = {
        movie: null
    };

    loadMovie = () => {
        axios.get(`${URL}${this.props.match.url}?api_key=${API_KEY}&append_to_response=videos,similar,credits`)
            .then(res => this.setState({movie: res.data}))
    };

    componentDidMount() {
        this.loadMovie()
    }

    render() {
        const {movie} = this.state;

        if (!movie) return <div className='loading'/>;

        return (
            <div>
                <DataMovie movie={movie}/>
                <Cast cast={movie.credits.cast}/>
                <Video video={movie.videos.results}/>
                <Similar movies={movie.similar.results}/>
                <Reviews/>
            </div>
        )
    }
}
