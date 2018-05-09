import React, {Component} from 'react';

export default class Search extends Component {
    state = {
        search: null
    };

    search = (e) => {
        let search = e.target.value.toLowerCase().split(' ').join('+');
        this.setState({search})
    };

    searchSubmit = (e) => {
        e.preventDefault();
        this.props.searchMovie(this.state.search);
    };

    render() {
        return (
            <form className='search' onClick={this.searchSubmit}>
                <input type='text'
                       placeholder='Type to search...'
                       className='search_button search_button_input'
                       onChange={this.search}/>
                <button className='search_button_button'>
                    <span role="img" aria-label="search">&#x1F50D;</span>
                </button>
            </form>
        )
    }
}