import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class PersonLink extends Component{

  render() {
    const { actor } = this.props;
    const {id, profile_path, character, name} = actor;

    const src = 'https://image.tmdb.org/t/p/w200'.concat(profile_path);

    return (
      <div>
        <Link to={`/persons/${id}`}>
            <img src={src} alt={character} />
            <div>{name}</div>
            <div>{character}</div>
        </Link>
      </div>
    )
  }
}
