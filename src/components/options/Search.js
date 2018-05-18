import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class Search extends Component {
    state = {
        search: ''
    };

    search = (e) => {
        let search = e.target.value.toLowerCase().split(' ').join('+');
        this.setState({search})
    };

    searchSubmit = () => {
        this.setState({search: ''})
    };

    render() {
        return (
            <div className='search'>
                <input type='text'
                       placeholder='Type to search...'
                       className='search_button search_button_input'
                       value={this.state.search}
                       onChange={this.search}/>
                <Link to={`/search?search=${this.state.search}&page=1`} className='search_button_button' onClick={this.searchSubmit}>
                    <span role="img" aria-label="search">&#x1F50D;</span>
                </Link>
            </div>
        )
    }
}