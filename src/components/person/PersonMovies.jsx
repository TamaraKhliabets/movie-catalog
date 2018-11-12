import React, { Component } from 'react';
import MovieLink from '../links/MovieLink';
import TvLink from '../links/TvLink';

export default class PersonMovies extends Component {
    state = {
    	start: 0, end: 20, visibleButtons: false,
    };

    setPages = (e) => {
    		this.setState({
    			start: +e.target.value * 20,
    			end: (+e.target.value + 1) * 20,
    		});
    };

    componentDidMount() {
    	if (this.props.personMovie.length >= 20) {
    		this.setState({
    		visibleButtons: true,
    	});
    	}
    }

		componentDidUpdate(prevProps) {
				if (this.props.showMovies !== prevProps.showMovies) {
						this.setState({
								start: 0,
								end: 20,
						});
				}
		}

    render() {
    	const { personMovie, personTv, showMovies } = this.props;
    	const { start, end, visibleButtons } = this.state;

    	if (!personMovie || !personTv) return <div className="loading" />;

    	let actualMovies, buttons;

    	if (showMovies) {
    		actualMovies = personMovie.map(e => (
					<div key={e.id} className="list_item">
						<MovieLink movie={e} />
					</div>
    		)).slice(start, end);
    		buttons = Array.from({length: Math.ceil(personMovie.length/20)}, (e, i) => (
						<button
								key={i}
								onClick={this.setPages}
								className={start/20 === i ? 'page_button_item_active' : 'page_button_item'}
								value={i}
						>
								{i + 1}
						</button>
				));
    	} else {
    		actualMovies = personTv.map(e => (
					<div key={e.id} className="list_item">
						<TvLink movie={e} />
					</div>
    		)).slice(start, end);
					buttons = Array.from({length: Math.ceil(personTv.length/20)}, (e, i) => (
							<button
									key={i}
									onClick={this.setPages}
									className={start/20 === i ? 'page_button_item_active' : 'page_button_item'}
									value={i}
							>
									{i + 1}
							</button>
					));
    	}

    	return (
					<div>
						<div className="list">
							{ actualMovies }
						</div>
						{
										visibleButtons ? (
											<div className="btns_arrow">
													{buttons}
											</div>
											)
											: null
						}
					</div>
    	);
    }
}
