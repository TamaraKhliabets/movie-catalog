import React, {Component} from 'react';
import DataMovie from '../movies/DataMovie';
import Cast from '../person/Cast';
import {API_KEY, URL} from "../../constants";
import Similar from "../movies/Similar";
import Video from "../movies/Video";
import Reviews from "../movies/Reviews";
import PersonData from "../person/PersonData";
import PersonMovies from "../person/PersonMovies";

export default class ItemReq extends Component {
    // componentDidUpdate(prevProps) {
    //     const {url, fetchMovie} = this.props;
    //     if (prevProps !== this.props) {
    //         fetchMovie(`${URL}${url}?api_key=${API_KEY}&append_to_response=videos,similar,credits,reviews`);
    //     }
    // }

    componentDidMount() {
        const {url, fetchMovie} = this.props;
            // '&language=en-US&append_to_response=movie_credits,tv_credits'
        fetchMovie(`${URL}${url}?api_key=${API_KEY}${'&language=en-US&append_to_response=videos,similar,credits,reviews'}`);
    }

    render() {
        const {movie, cast, video, similar, reviews} = this.props;

        if (!movie) return <div className='loading'/>;

        return (
                <div>
                    <DataMovie/>
                    {cast ? <Cast/> : null}
                    {video ? <Video/> : null}
                    {similar ? <Similar/> : null}
                    {reviews ? <Reviews/> : null}
                </div>
        )
    }
}
