import React, {Component} from 'react';
import DataMovie from '../movies/DataMovie';
import Cast from '../person/Cast';
import axios from 'axios';
import {API_KEY, URL} from "../../constants";
import Similar from "../movies/Similar";
import Video from "../movies/Video";
import Reviews from "../movies/Reviews";

export default class ItemReq extends Component {
    state = {
        movie: null
    };

    loadMovie = () => {
        axios.get(`${URL}${this.props.match.url}?api_key=${API_KEY}&append_to_response=videos,similar,credits,reviews`)
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
                {movie.credits.cast.length ? <Cast cast={movie.credits.cast}/> : null}
                {movie.videos.results.length ? <Video video={movie.videos.results}/> : null}
                {movie.similar.results.length ? <Similar movies={movie.similar.results} direction={this.props.match.url}/> : null}
                {movie.reviews.results.length ? <Reviews reviews={movie.reviews.results}/> : null}
            </div>
        )
    }
}
