import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class LinkItem extends Component{

  render() {
    const {movie} = this.props;
    const {id, title, vote_average, poster_path, backdrop_path, overview, release_date} = movie;
    const src = 'https://image.tmdb.org/t/p/w200'.concat(poster_path || backdrop_path);
    const date = new Date(release_date).getFullYear();

    // let star = {
    //   width: `${vote_average*10}%`
    // };

    return (
      <div className='link_item'>
        <Link to={`/movies/${id}`}>
          <div>
            <div className='link_item_image'>
              <img className='link_image' src={src} alt={title} />
            </div>
            <div className='link_item_title'>{title}</div>
            <div className='link_item_hover'>
              <div className='link_item_vote'>IMDb: {vote_average}/10 <span className='link_item_star'>&#10025;</span></div>
              <div className='link_item_date'>{date} YEAR</div>
              <div className='link_item_overiew'>{overview}</div>
            </div>
          </div>
        </Link>
      </div>
    )
  }
}
