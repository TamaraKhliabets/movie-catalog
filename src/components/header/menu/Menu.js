import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import Genres from "./Genres";
import {MENU_ITEMS} from "../../../constants";

export default class Menu extends Component{
  render() {
    let menu =  MENU_ITEMS.map((e, i) => {
       return (
           <div key={i}  className='menu_item'>
               <Link to={e.direction}>
               <span role="img" aria-label="icon" className='menu_item_icon'>{e.icon}</span>
               <div className='menu_item_name'>{e.name}</div>
               </Link>
           </div>
       )
    });

    return (
      <div className='menu'>
          {menu}
        <Genres/>
      </div>
    )
  }
}