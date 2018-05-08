import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class PersonLink extends Component{

  render() {
    const { actor } = this.props;
    const {id, profile_path, character, name} = actor;

    const src = 'https://image.tmdb.org/t/p/w200'.concat(profile_path);

    return (
      <div className='person_link'>
        <Link to={`/persons/${id}`}>
                <img src={src} alt={character} className='person_link_image'/>
            <div className='person_link_name'>
                <div>{name}</div>
                <div className='character'>{character}</div>
            </div>
            <div className='link_full_info'>{name}({character})</div>
        </Link>
      </div>
    )
  }
}
