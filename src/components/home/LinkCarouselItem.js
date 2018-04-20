import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class LinkCarouselItem extends Component{
  render() {
    const {unit} = this.props;

    return (
      <Link to={'/movies/:id'}>
        hi
      </Link>
    )
  }
}