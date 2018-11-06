import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import cinema from '../../default/ninja.png';

export default class PersonLink extends Component {
  render() {
    const { actor } = this.props;
    const { id, profile_path, name } = actor;

    const src = 'https://image.tmdb.org/t/p/w185'.concat(profile_path);

    return (
			<div className="link_item">
				<Link to={`/person/${id}`}>
					<img className="link_image" src={profile_path ? src : cinema} alt={name} />
					<div className="link_item_title">{name}</div>
				</Link>
			</div>
    );
  }
}
