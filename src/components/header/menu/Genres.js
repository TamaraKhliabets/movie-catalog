import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import {API_KEY} from "../../../constants";

export default class Genres extends Component {
  state = {
    genres: null
  };

  loadGenres = () => {
    axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}&language=en-US`)
      .then(res => this.setState({genres: res.data}))
  };

  componentDidMount() {
    this.loadGenres();
  }

  render() {
    const {genres} = this.state;

    if (!genres) return <div className='loading'/>;

    let genresLink = genres.genres.map(genre => {
      let {id, name} = genre;
      return (
        <div key={id} className='sidebar_item'>
          <Link to={`/genres/${name.toLowerCase()}/${id}`}>
            {name}
          </Link>
        </div>
      )
    });

    return (
      <div className='menu_item'>
        <div className='menu_item_sidebar'>
          <div  className='menu_item_icon'>&#127908;</div>
          <div>Genres</div>
          <div className='sidebar'>
            {genresLink}
          </div>
        </div>
      </div>
    )
  }
}