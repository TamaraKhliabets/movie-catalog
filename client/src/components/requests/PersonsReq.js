import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { API_KEY, URL } from '../../constants';
import Page from '../../containers/buttons/Page';
import ListItem from '../../containers/pages/ListItem';

export default class PersonsReq extends Component {
  componentDidMount() {
    const { url, page, personsFetchData } = this.props;
    personsFetchData(`${URL}${url}?api_key=${API_KEY}&language=en-US&page=${page}`);
  }

  componentDidUpdate(prevProps) {
    const { page } = this.props;
    if (prevProps.page !== page) {
      const { url, personsFetchData } = this.props;
      personsFetchData(`${URL}${url}?api_key=${API_KEY}&language=en-US&page=${page}`);
    }
  }

  render() {
    const { persons, personsHasErr, personsIsLoad } = this.props;

    if (personsHasErr) return <div>Error</div>;

    if (personsIsLoad || !persons) return <div className="loading" />;

    return (
      <div>
        <ListItem />
        <Page />
      </div>
    );
  }
}

PersonsReq.propTypes = {
  url: PropTypes.string,
  persons: PropTypes.string,
  page: PropTypes.string,
  personsFetchData: PropTypes.func.isRequired,
  personsHasErr: PropTypes.bool,
  personsIsLoad: PropTypes.bool,
};

PersonsReq.defaultProps = {
  url: '',
  persons: '',
  page: '',
  personsHasErr: null,
  personsIsLoad: null,
};
