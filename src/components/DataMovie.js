import React, {Component} from 'react';

export default class DataMovie extends Component {
  render() {
    const {movie} = this.props;
    const {title, original_title, runtime, poster_path, overview} = movie;
    const src = 'https://image.tmdb.org/t/p/w500'.concat(poster_path);
    const year = new Date(movie.release_date).getFullYear();
    const country = movie.production_countries.map(e => e.name).join(', ');
    const originalLanguage = movie.spoken_languages.map(e => e.name).join(', ');
    const production = movie.production_companies.map(e => e.name).join(', ');
    const genres = movie.genres.map(e => e.name).join(', ');

    return (
      <div>
        <div className='item_description'>
          <img src={src} alt={title}/>
          <div>
            <div className='item_title'>Title: {title}</div>
            {
              title !== original_title ?
              <div className='item_original_title'>Original title: {original_title}</div> : null
            }
            <div className='item_full_data'>
              <div> Year: {year}</div>
              <div>Country: {country}</div>
              <div>Original language: {originalLanguage}</div>
              <div>Last: {runtime} min</div>
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
