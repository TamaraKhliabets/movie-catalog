import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Search extends Component {
  state = { search: '' };

  searchSubmit = () => {
    const {
      changePage, setDirection, setOption, setPage,
    } = this.props;
    const { search } = this.state;
    const searchInner = search.replace(' ', '+');
    setDirection('search');
    setOption(`language=en-US&query=${searchInner}&include_adult=false`);
    setPage(1);
    changePage(`/search?search=${searchInner}&page=1`);
    this.setState({ search: '' });
  };

  render() {
    const { search } = this.state;
    return (
      <div className="search">
        <input
          placeholder="Type to search..."
          className="search_button"
          value={search}
          onChange={e => this.setState({ search: e.target.value })}
        />
        <button
          type="button"
          onClick={this.searchSubmit}
          className="search_button_button"
        >
          <span role="img" aria-label="search" className="search_button_button">&#x1F50D;</span>
        </button>
      </div>
    );
  }
}

Search.propTypes = {
  changePage: PropTypes.func.isRequired,
  setDirection: PropTypes.func.isRequired,
  setOption: PropTypes.func.isRequired,
  setPage: PropTypes.func.isRequired,
};
