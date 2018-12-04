import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { API_KEY, URL } from '../../constants';
import ListItem from '../../containers/pages/ListItem';
import Page from '../../containers/buttons/Page';
import Filter from '../../containers/buttons/Filter';


export default class MovieReq extends Component {
  componentDidMount() {
    const {
      url, option, page, moviesFetchData,
    } = this.props;
    moviesFetchData(`${URL}${url}?api_key=${API_KEY}&${option}&page=${page}`);
  }

  componentDidUpdate(prevProps) {
    if (this.props !== prevProps) {
      const {
        url, option, page, moviesFetchData,
      } = this.props;
      moviesFetchData(`${URL}${url}?api_key=${API_KEY}&${option}&page=${page}`);
    }
  }


  render() {
    const { movies, hasError, isLoading } = this.props;

    if (hasError) return <div>Error</div>;

    if (isLoading || !movies) return <div className="loading" />;

    return (
      <div>
        <Filter />
        <ListItem />
        <Page />
      </div>
    );
  }
}

MovieReq.propTypes = {
  url: PropTypes.string,
  option: PropTypes.string,
  page: PropTypes.number,
  moviesFetchData: PropTypes.func.isRequired,
  movies: PropTypes.instanceOf(Array),
  hasError: PropTypes.bool,
  isLoading: PropTypes.bool,
};

MovieReq.defaultProps = {
  url: '',
  option: '',
  page: 0,
  movies: null,
  hasError: null,
  isLoading: null,
};
