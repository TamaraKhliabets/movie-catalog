import React, { Component } from 'react';
import MovieLink from '../links/MovieLink';
import TvLink from '../links/TvLink';

export default class Similar extends Component {
  render() {
    const { similar, direction } = this.props;

    if (!similar || !similar.length) return null;

    const shortMovies = similar.slice(0, 4);
    const nodeItem = shortMovies.map((e) => {
      if (direction === 'movie?') {
        return (
					<div key={e.id} className="list_item">
						<MovieLink movie={e} />
					</div>
								);
							} if (direction === 'tv?') {
								return (
					<div key={e.id} className="list_item">
						<TvLink movie={e} />
					</div>
        );
      }
    });

    return (
			<div>
				<div className="subtitle">Similar movies &#8250;</div>
				<div className="list">
					{nodeItem}
				</div>
			</div>
    );
  }
}
