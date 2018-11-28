import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieLink from '../links/MovieLink';

export default class UserMovies extends Component {
 static propTypes = { moviesFavorite: PropTypes.instanceOf(Array) };

 static defaultProps = { moviesFavorite: null };

 state = { start: 0, end: 20, visibleButtons: false };

 componentWillReceiveProps(nextProps) {
   const { moviesFavorite } = this.props;
   if (moviesFavorite !== nextProps.moviesFavorite) {
     this.setState({ visibleButtons: true });
   }
 }

 render() {
   const { moviesFavorite } = this.props;
   const { start, end, visibleButtons } = this.state;

   if (!moviesFavorite) return <div className="loading" />;

   const actualMovies = moviesFavorite.map(el => (
     <div key={el.id} className="list_item">
       <MovieLink movie={el} />
     </div>)).slice(start, end);
   const buttons = Array.from({ length: Math.ceil(moviesFavorite.length / 20) }, (el, i) => (
     <button
       key={i}
       type="button"
       onClick={(e) => {
         this.setState({ start: +e.target.value * 20, end: (+e.target.value + 1) * 20 });
       }}
       className={start / 20 === i ? 'page_button_item_active' : 'page_button_item'}
       value={i}
     >
       {i + 1}
     </button>));

   return (
     <div>
       <div className="list">
         { actualMovies }
       </div>
       {visibleButtons ? (
         <div className="btns_arrow">
           {buttons}
         </div>
       ) : null}
     </div>);
 }
}
