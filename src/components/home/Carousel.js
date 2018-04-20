import React, {Component} from 'react';
import LinkCarousel from "./LinkCarousel";

export default class Carousel extends Component{
  render() {
    const {units} = this.props;
    // const {id, title} = requests;

    let listNode = units.slice(0,1).map((unit, i) => {
      return (
        <div className={`carousel_item carousel_item_${i}`} key={unit.id}>
          {/*<a className="arrow arrow-prev" href="#">prev</a>*/}
          <LinkCarousel unit={unit}/>
          {/*<a className="arrow arrow-next" href="#">next</a>*/}
        </div>
      )
    });

    return(
      <figure className='carousel_wrapper'>
        {listNode}
      </figure>
    )
  }
}