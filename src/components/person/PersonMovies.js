import React, {Component} from 'react';
import ListItem from "../movies/ListItem";

export default class PersonMovies extends Component{
  render() {
    const {movies} = this.props;

    return (
      <div>
        <ListItem movies={movies}/>
      </div>
    )
  }
}