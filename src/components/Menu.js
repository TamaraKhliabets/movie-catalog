import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import Sidebar from "../containers/Sidebar";

export default class Menu extends Component{
  render() {
    return (
      <div className='menu'>
        <div  className='menu_item'>
          <Link to={`/`}>
            <div  className='menu_item_icon'>&#127968;</div>
            <div>Home</div>
          </Link>
        </div>
        <div  className='menu_item'>
          <Link to={`/movies`}>
            <div  className='menu_item_icon'>&#127916;</div>
            <div>Movies</div>
          </Link>
        </div>
        <div className='menu_item'>
          <Link to={'/tv-show'}>
            <div  className='menu_item_icon'>&#128250;</div>
            <div>TV Show</div>
          </Link>
        </div>
        <Sidebar/>
        {/*<div className='menu_item'>*/}
          {/*<div  className='menu_item_icon'>&#8788;</div>*/}
          {/*<div>A - Z</div>*/}
        {/*</div>*/}
        <div  className='menu_item'>
          <Link to={`/persons`}>
            <div  className='menu_item_icon'>&#128114;</div>
            <div>Filmography</div>
          </Link>
        </div>
      </div>
    )
  }
}