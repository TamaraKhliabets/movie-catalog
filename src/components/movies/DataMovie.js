import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import {DEF_PIC_MOVIE} from "../../constants";

export default class DataMovie extends Component {
    render() {
        const {movie} = this.props;
        const {
            title,
            name,
            runtime,
            episode_run_time,
            first_air_date,
            last_air_date,
            release_date,
            poster_path,
            belongs_to_collection,
            overview
        } = movie;
        const originalTitle = movie.original_title || movie.original_name;
        const src = poster_path ? 'https://image.tmdb.org/t/p/w300'.concat(poster_path) : DEF_PIC_MOVIE;
        const year = (release_date || first_air_date) ? new Date(release_date).getFullYear() || new Date(first_air_date).getFullYear() : null;
        const endYear = last_air_date ? new Date(last_air_date).getFullYear() : null;
        const country = movie.production_countries ? movie.production_countries.map(e => e.name).join(', ') : movie.origin_country.join(', ');
        const language = movie.spoken_languages ? movie.spoken_languages.map(e => e.name).join(', ') : movie.original_language;

        if(episode_run_time) episode_run_time.sort((a,b) => a-b).splice(1, episode_run_time.length - 2);
        const time = (runtime || episode_run_time) ? runtime || episode_run_time.join(' - ') : null;
        const production = movie.production_companies.map(e => e.name).join(', ');
        const genres = movie.genres.map(e => e.name).join(', ');

        return (
            <div className='item'>
                <div className='item_description'>
                    <img src={src} alt={title}/>
                    <div className='item_info'>
                        <div className='item_title'>Title: {title || name}</div>
                        {
                            (title || name) !== originalTitle ?
                                <div className='item_original_title'>Original title: {originalTitle}</div> : null
                        }
                        <div className='item_full_data'>
                            {
                                year ? <div> Year: {year}</div> : null
                            }
                            {
                                endYear ? <div> - {endYear}</div> : null
                            }
                            {
                                country ? <div>Country: {country}</div> : null
                            }
                            {
                                language ? <div>Original language: {language}</div> : null
                            }
                            {
                                belongs_to_collection ?
                                    <Link to={`/collection/${belongs_to_collection.id}`}>
                                        <div>Collection: {belongs_to_collection.name}</div>
                                    </Link> : null
                            }
                            {
                                time ? <div>Last: {time} min</div> : null
                            }
                            {
                                production ? <div>Production: {production}</div> : null
                            }
                            {
                                genres ? <div>Genres: {genres}</div> : null
                            }
                            {
                                overview ? <div>Overview: {overview}</div> : null
                            }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
