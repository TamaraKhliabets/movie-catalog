import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ButtonFilter extends Component {
  state = { showFilter: false };

  changeFilter = () => {
    const { showFilter } = this.state;
    this.setState({ showFilter: !showFilter });
  };

  handleSubmit = () => {
    const {
      direction, sorting, year, genre, changePage, setOption, setDirection, setPage,
    } = this.props;
    const { showFilter } = this.state;
    const today = new Date().getFullYear();
    const optionForApi = ['language=en-US&include_adult=false&include_video=false', (sorting) ? `&sort_by=${sorting}` : '', (+year) ? `&primary_release_year=${year}` : `&year=${today}`, (genre) ? `with_genres=${genre.split('_')[1]}` : ''].join('');
    const optionForRoute = [(sorting) ? `sort=${sorting}&` : '', (+year) ? `year=${year}&` : '', (genre) ? `genre=${genre.split('_')[0]}&` : ''].join('');
    changePage(`/filter_${direction}${optionForRoute}page=1`);
    setDirection(`filter_${direction}`);
    setOption(optionForApi);
    setPage(1);
    this.setState({ showFilter: !showFilter });
  };

  render() {
    const { showFilter } = this.state;
    const { sorting, year, setSorting } = this.props;
    let { setYear } = this.props;
    const yearOption = Array.from({ length: 30 }, (e, i) => {
      setYear = new Date().getFullYear() - i;
      return (<option key={i}>{setYear}</option>);
    });
    return (
      <div className="options">
        <button
          className={showFilter ? 'filter_button filter_button_active' : 'filter_button'}
          type="button"
          onClick={this.changeFilter}
        >
          <span className={showFilter ? 'filter_arrow_up' : 'filter_arrow_down'} />
          {'Filter'}
        </button>
        {showFilter ? (
          <div className="filter_form">
            <div className="filter_name">Order:</div>
            <select
              value={sorting || 'popularity.desc'}
              onChange={e => setSorting(e.target.value)}
              className="filter_select"
            >
              <option value="popularity.desc">Most popular</option>
              <option value="release_date.desc">Release date</option>
              <option value="vote_count.desc">Most vote count</option>
            </select>
            <div className="filter_name">Year:</div>
            <select
              value={year || 0}
              onChange={e => setYear(e.target.value)}
              className="filter_select"
            >
              <option value="0">All</option>
              {yearOption}
            </select>
            <button
              className="filter_form_submit"
              type="button"
              onClick={this.handleSubmit}
            >
              {'Show'}
            </button>
          </div>) : null}
      </div>);
  }
}

ButtonFilter.propTypes = {
  sorting: PropTypes.string,
  year: PropTypes.number,
  genre: PropTypes.string,
  direction: PropTypes.string,
  changePage: PropTypes.func.isRequired,
  setOption: PropTypes.func.isRequired,
  setDirection: PropTypes.func.isRequired,
  setPage: PropTypes.func.isRequired,
  setSorting: PropTypes.func.isRequired,
  setYear: PropTypes.func.isRequired,
};

ButtonFilter.defaultProps = {
  year: 0,
  sorting: '',
  direction: '',
  genre: '',
};
