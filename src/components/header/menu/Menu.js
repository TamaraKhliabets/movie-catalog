import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import Genres from "./Genres";

export default class Menu extends Component{
  render() {
    return (
      <div className='menu'>
        <div  className='menu_item'>
          <Link to={`/`}>
            <span role="img" aria-label="icon" className='menu_item_icon'>&#127968;</span>
            <div className='menu_item_name'>Home</div>
          </Link>
        </div>
        <div  className='menu_item'>
          <Link to={`/movie`}>
            <span role="img" aria-label="icon" className='menu_item_icon'>&#127916;</span>
            <div className='menu_item_name'>Movies</div>
          </Link>
        </div>
        <div className='menu_item'>
          <Link to={'/tv'}>
            <span role="img" aria-label="icon" className='menu_item_icon'>&#128250;</span>
            <div className='menu_item_name'>TV Show</div>
          </Link>
        </div>
        <Genres/>
        <div  className='menu_item'>
          <Link to={`/persons`}>
            <span role="img" aria-label="icon" className='menu_item_icon'>&#128114;</span>
            <div className='menu_item_name'>Actors</div>
          </Link>
        </div>
      </div>
    )
  }
}