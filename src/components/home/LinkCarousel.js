import React, {Component} from 'react';

export default class LinkCarusel extends Component {
  render() {
    const {unit} = this.props;
    const {backdrop_path, profile_path, title, name, overview} = unit;
    const src = backdrop_path ?
      'https://image.tmdb.org/t/p/original'.concat(backdrop_path) :
      'https://image.tmdb.org/t/p/original'.concat(profile_path);

    return (
      <div className='carousel_item_image'>
        <img className='carousel_link_image' src={src} alt='hi'/>
        <div className='carousel_item_link'>
          <div className='carousel_item_link_title'>{title || name}</div>
          <div className='carousel_item_link_overview'>{overview}</div>
        </div>
      </div>
    )
  }
}