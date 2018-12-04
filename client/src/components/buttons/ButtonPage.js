import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ButtonPage extends Component {
    setNewPage = (e) => {
      const {
        direction, sorting, year, genre, setPage, changePage,
      } = this.props;
      const optionForRoute = [(sorting) ? `sort=${sorting}&` : '', (+year) ? `year=${year}&` : '', (genre) ? `genre=${genre.split('_')[1]}&` : ''].join('');
      const page = +e.target.value;
      setPage(page);
      changePage(`/${direction}${optionForRoute}page=${page}`);
    };


    render() {
      const { page, totalPages } = this.props;
      const total = totalPages > 1000 ? 1000 : totalPages;
      const buttonsList = Array.from({ length: 5 }, (e, i) => page - 2 + i)
        .filter(e => e > 0 && e <= total).map(e => (
          <button
            key={e}
            type="button"
            onClick={this.setNewPage}
            className={page === e ? 'page_button_item_active' : 'page_button_item'}
            value={e}
          >
            {e}
          </button>
        ));
      return (
        <div className="page_button_group">
          {(page < 3) ? null : <button onClick={this.setNewPage} type="button" className="page_button_item" value={1}>&#171;</button>}
          {(page < 2) ? null : (
            <button onClick={this.setNewPage} className="page_button_item" type="button" value={+page - 1}>&#8249;</button>)}
          {buttonsList}
          {(page > total - 1) ? null : (
            <button onClick={this.setNewPage} type="button" className="page_button_item" value={+page + 1}>&#8250;</button>)}
          {(page > total - 2) ? null : <button onClick={this.setNewPage} type="button" className="page_button_item" value={total}>&#187;</button>}
        </div>);
    }
}

ButtonPage.propTypes = {
  sorting: PropTypes.string,
  year: PropTypes.number,
  genre: PropTypes.string,
  direction: PropTypes.string,
  changePage: PropTypes.func.isRequired,
  setPage: PropTypes.func.isRequired,
  page: PropTypes.number,
  totalPages: PropTypes.number,
};

ButtonPage.defaultProps = {
  year: 0,
  sorting: '',
  direction: '',
  genre: '',
  page: 0,
  totalPages: 0,
};
