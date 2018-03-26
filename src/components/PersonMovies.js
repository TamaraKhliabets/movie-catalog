import React, {Component} from 'react';
import LinkItem from "./LinkItem";

export default class PersonMovies extends Component{
  render() {
    const {movies} = this.props;

    let listMovies = movies.cast.map(movie => {
      return (
        <div key={movie.id}>
          <LinkItem movie={movie}/>
        </div>
      )
    });

    return (
      <div>
        {listMovies}
      </div>
    )
  }
}