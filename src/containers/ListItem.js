import React, { Component } from 'react';
import MovieList from "../components/MovieList";

export default class ListItem extends Component {
  render() {
    const {movies, page, total, setNewPage} = this.props;
    return (
        <div>
          <MovieList movies={movies}
                     page={page}
                     total={total}
                     setNewPage={setNewPage}/>
        </div>
    );
  }
}
