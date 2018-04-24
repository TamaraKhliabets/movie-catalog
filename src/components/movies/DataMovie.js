import React, {Component} from 'react';
import { Link } from 'react-router-dom';

export default class DataMovie extends Component {
    render() {
        const {movie} = this.props;
        const {
            title,
            original_title,
            name,
            original_name,
            runtime,
            episode_run_time,
            poster_path,
            belongs_to_collection,
            overview
        } = movie;
        const originalTitle = original_title || original_name;
        const src = 'https://image.tmdb.org/t/p/w500'.concat(poster_path);
        const year = new Date(movie.release_date).getFullYear() || new Date(movie.first_air_date).getFullYear();
        const endYear = new Date(movie.last_air_date).getFullYear();
        const country = movie.production_countries ? movie.production_countries.map(e => e.name).join(', ') : movie.origin_country.join(', ');
        const language = movie.spoken_languages ? movie.spoken_languages.map(e => e.name).join(', ') : movie.original_language;
        const time = runtime || episode_run_time.join(' min/ ');
        const production = movie.production_companies.map(e => e.name).join(', ');
        const genres = movie.genres.map(e => e.name).join(', ');

        return (
            <div>
                <div className='item_description'>
                    <img src={src} alt={title}/>
                    <div>
                        <div className='item_title'>Title: {title || name}</div>
                        {
                            (title || name) !== originalTitle ?
                                <div className='item_original_title'>Original title: {originalTitle}</div> : null
                        }
                        <div className='item_full_data'>
                            <div> Year: {year}</div>
                            {
                                endYear ? <div> - {endYear}</div> : null
                            }
                            <div>Country: {country}</div>
                            <div>Original language: {language}</div>
                            {
                                belongs_to_collection ?
                                    <Link to={`/collection/${belongs_to_collection.id}`}>
                                        <div>Collection: {belongs_to_collection.name}</div>
                                    </Link> : null
                            }
                            <div>Last: {time} min</div>
                            <div>Production: {production}</div>
                            <div>Genres: {genres}</div>
                            <div>Overview: {overview}</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
