import React, {Component} from 'react';
import axios from 'axios';
import {API_KEY} from "../../constants";
import PersonLink from "../links/PersonLink";
import ButtonPage from "../buttons/ButtonPage";
import Search from "../options/Search";

export default class Persons extends Component{
  state = {
    url: 'https://api.themoviedb.org/3/person/popular',
    persons: null,
      options: 'language=en-US',
      page: 1
  };

  loadPersons = () => {
    let {url, options, page} = this.state;

    axios.get(`${url}?api_key=${API_KEY}&${options}&page=${page}`)
        .then(res => this.setState({persons: res.data}))
  };

    setPage = (page) => {
        this.setState({page: this.state.page + page});
        console.log(this.state.page)
    };

    searchMovie = (search) => {
        search ?
            this.setState({
                url: 'https://api.themoviedb.org/3/search/person',
                options: `language=en-US&query=${search}&include_adult=false`
            }) :
            this.setState({
                url: 'https://api.themoviedb.org/3/person/popular',
                options: 'language=en-US'
            });
    };

  componentDidMount() {
    this.loadPersons()
  }

    componentWillUpdate(nextState) {
        if (nextState.page !== this.state.page) {
            this.loadPersons()
        }
    }

  render() {
    const {persons, page} = this.state;

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
          <Search searchMovie={this.searchMovie}/>
          {listActors}
          <ButtonPage page={page}
                      total={persons.total_pages}
                      setNewPage={this.setPage}/>
      </div>
    )
  }
}