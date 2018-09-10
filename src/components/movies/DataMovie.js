import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import cinema from '../../default/films.png';

class DataMovie extends Component {
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
        const src = 'https://image.tmdb.org/t/p/w342'.concat(poster_path);
        const year = (release_date || first_air_date) ? new Date(release_date).getFullYear() || new Date(first_air_date).getFullYear() : null;
        const endYear = last_air_date ? new Date(last_air_date).getFullYear() : null;
        const country = movie.production_countries ? movie.production_countries.map(e => e.name).join(', ') : movie.origin_country.join(', ');
        const language = movie.spoken_languages ? movie.spoken_languages.map(e => e.name).join(', ') : movie.original_language;

        if (episode_run_time) episode_run_time.sort((a, b) => a - b).splice(1, episode_run_time.length - 2);
        const time = (runtime || episode_run_time) ? runtime || episode_run_time.join(' - ') : null;
        const production = movie.production_companies.map(e => e.name).join(', ');
        const genres = movie.genres.map(e => e.name).join(', ');

        return (
            <div className='item_description'>
                <img src={poster_path ? src : cinema} alt={title}/>
                <table className='item_info'>
                    <caption className='item_title'>Title: {title || name}</caption>
                    <tbody>
                    {
                        (title || name) !== originalTitle ?
                            <tr>
                                <td>Original title:</td>
                                <td>{originalTitle}</td>
                            </tr> : null
                    }
                    {
                        year ?
                            <tr>
                                <td>Year:</td>
                                <td>{year} {endYear ? ` - ${endYear}` : null}</td>
                            </tr> : null
                    }
                    {
                        country ?
                            <tr>
                                <td>Country:</td>
                                <td>{country}</td>
                            </tr> : null
                    }
                    {
                        language ?
                            <tr>
                                <td>Original language:</td>
                                <td>{language}</td>
                            </tr> : null
                    }
                    {
                        belongs_to_collection ?
                            <tr>
                                <td>Collection:</td>
                                <td>
                                    <Link to={`/collection/${belongs_to_collection.id}`}>
                                        {belongs_to_collection.name}
                                    </Link>
                                </td>
                            </tr> : null
                    }
                    {
                        time ?
                            <tr>
                                <td>Last:</td>
                                <td>{time} min</td>
                            </tr> : null
                    }
                    {
                        production ?
                            <tr>
                                <td>Production:</td>
                                <td>{production}</td>
                            </tr> : null
                    }
                    {
                        genres ?
                            <tr>
                                <td>Genres:</td>
                                <td>{genres}</td>
                            </tr> : null
                    }
                    {
                        overview ?
                            <tr>
                                <td>Overview:</td>
                                <td>{overview}</td>
                            </tr> : null
                    }
                    </tbody>
                </table>
            </div>
        )
    }
}

const mapStateToProps = ({movie}) => ({
    movie
});

export default connect(mapStateToProps)(DataMovie);