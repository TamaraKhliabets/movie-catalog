import React, { Component } from 'react';

export default class Search extends Component {
    state = {
    		search: '',
    };

    searchSubmit = () => {
    	const { changePage, setDirection, setOption, setPage } = this.props;
    	const search = this.state.search.replace(' ', '+');
    	setDirection('search');
    	setOption(`language=en-US&query=${search}&include_adult=false`);
    	setPage(1);
    	changePage(`/search?search=${search}&page=1`);
    	this.setState({
    		search: '',
    	});
    };

    render() {
    		return (
					<div className="search">
						<input
							placeholder="Type to search..."
							className="search_button"
							value={this.state.search}
							onChange={e => this.setState({
												search: e.target.value,
							})}
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
