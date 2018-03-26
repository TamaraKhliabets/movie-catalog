import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class LinkItem extends Component{

  render() {
    const {movie, genres} = this.props;
    const {id, title, genre_ids, vote_average, poster_path, release_date} = movie;
    const src = 'https://image.tmdb.org/t/p/w200'.concat(poster_path);
    const date = new Date(release_date).getFullYear();

    // let genre = genre_ids.map((e, i) => {
    //   return genres.find(el => {
    //   if(el.id === genre_ids[i]) return el
    // }).name}).slice(0, 2).join(', ');

    let star = {
      width: `${vote_average*10}%`
    };

    return (
      <Link to={`/movies/${id}`}>
        <div className='link_item'>
          <div className='link_item_image'>
            <img src={src} alt={title} />
          </div>
          <div className='link_item_title'>{title}</div>
            <span className='link_item_vote'><span style={star}></span></span>
            {/*<div className='link_item_genre'>{genre}</div>*/}
          <div className='link_item_date'>{date}</div>
        </div>
      </Link>
    )
  }
}
