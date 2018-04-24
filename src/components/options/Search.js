import React, {Component} from 'react';

export default class Search extends Component {
    state = {
        search: null
    };

    search = (e) => {
        let search = e.target.value.toLowerCase().split(' ').join('+');
        this.setState({search})
    };

    searchSubmit = () => {
        this.props.searchMovie(this.state.search);
    };

    render() {
        return (
            <div className='search'>
                <input type='text'
                       placeholder='Search'
                       className='search_button'
                       onChange={this.search}/>
                <button onClick={this.searchSubmit}>&#x1F50D;</button>
            </div>
        )
    }
}