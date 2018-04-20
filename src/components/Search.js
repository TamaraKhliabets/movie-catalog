import React, {Component} from 'react';

export default class Search extends Component{
  search = (e) => {
    let search =  e.target.value.toLowerCase().split(' ').join('+');
    this.props.searchMovie(search);
  };

  render() {
    return (
      <div className='search'>
        <input type='text'
               placeholder='Search'
               className='search_button'
               onChange={this.search}/>
        {/*<div>&#x1F50D;</div>*/}
      </div>
    )
  }
}