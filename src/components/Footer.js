import React, { Component } from 'react';

export default class Footer extends Component {
  render() {
    const url = 'https://developers.themoviedb.org/3';

    return (
			<div className="footer">
				<a href={url}>The Movie Database API</a>
			</div>
    );
  }
}
