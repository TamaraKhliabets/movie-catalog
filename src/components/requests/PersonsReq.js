import React, { Component } from 'react';
import { API_KEY, URL } from '../../constants';
import Page from '../../containers/buttons/Page';
import ListItem from '../../containers/pages/ListItem';

export default class PersonsReq extends Component {
  componentWillReceiveProps(nextProps) {
    if (nextProps.page !== this.props.page) {
      const { url, page, personsFetchData } = this.props;
      personsFetchData(`${URL}${url}?api_key=${API_KEY}&language=en-US&page=${page}`);
    }
  }

  componentDidMount() {
    const { url, page, personsFetchData } = this.props;
    personsFetchData(`${URL}${url}?api_key=${API_KEY}&language=en-US&page=${page}`);
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
