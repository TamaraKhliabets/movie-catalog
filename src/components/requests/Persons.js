import React, {Component} from 'react';
import axios from 'axios';
import {API_KEY, URL} from "../../constants";
import PersonLink from "../links/PersonLink";
import ButtonPage from "../buttons/ButtonPage";
import Search from "../options/Search";

export default class Persons extends Component{
  state = {
    persons: null
  };

  loadPersons = () => {
      let {url, options, page} = this.props;
      axios.get(`${URL}${url}?api_key=${API_KEY}&${options}&page=${page}`)
          .then(res => this.setState({persons: res.data}))
  };

  componentDidMount() {
    this.loadPersons()
  }

  render() {
    const {persons} = this.state;

      if (!persons) return <div className='loading'/>;

      let listActors = persons.results.map(e => {
          return (
              <div key={e.id}>
                  <PersonLink actor={e}/>
              </div>
          )
      });

    return(
      <div>
          {listActors}
          <ButtonPage {...this.props}
                      total={persons.total_pages}/>
      </div>
    )
  }
}