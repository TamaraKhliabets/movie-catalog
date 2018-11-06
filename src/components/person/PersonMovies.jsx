import React, { Component } from 'react';
import MovieLink from '../links/MovieLink';
import TvLink from '../links/TvLink';

export default class PersonMovies extends Component {
    state = {
    	start: 0, end: 20, visibleButtons: false,
    };

    prevMovies = () => {
    	const { start, end } = this.state;
    	if (start > 0) {
    		this.setState({
    			start: start - 20,
    			end: end - 20,
    		});
    	}
    };

    nextMovies = () => {
    	const { start, end } = this.state;
    	const { showMovies, personMovie, personTv } = this.props;
    	const lastMovie = showMovies ? personMovie.length - 1 : personTv - 1;
    	if (end < lastMovie) {
    		this.setState({
    			start: start + 20,
    			end: end + 20,
    		});
    	}
    };

    componentWillReceiveProps(nextProps) {
    	if (nextProps.showMovies !== this.props.showMovies) {
    		this.setState({
    			start: 0,
    			end: 20,
    		});
    	}
    }

    componentDidMount() {
    	if (this.props.personMovie.length >= 20) {
    		this.setState({
    		visibleButtons: true,
    	});
    	}
    }

    render() {
    	const { personMovie, personTv, showMovies } = this.props;
    	const { start, end, visibleButtons } = this.state;

    	if (!personMovie || !personTv) return <div className="loading" />;

    	let actualMovies;

    	if (showMovies) {
    		actualMovies = personMovie.map(e => (
					<div key={e.id} className="list_item">
						<MovieLink movie={e} />
					</div>
    		)).slice(start, end);
    	} else {
    		actualMovies = personTv.map(e => (
					<div key={e.id} className="list_item">
						<TvLink movie={e} />
					</div>
    		)).slice(start, end);
    	}

    	return (
					<div>
						<div className="list">
							{ actualMovies }
						</div>
						{
										visibleButtons ? (
											<div className="btns_arrow">
												<button onClick={this.prevMovies} className="btn_arrow">prev</button>
												<button onClick={this.nextMovies} className="btn_arrow">next</button>
											</div>
											)
											: null
						}
					</div>
    	);
    }
}
