import React, { Component } from 'react';
import PersonLinkForMovie from '../links/PersonLinkForMovie';

export default class Cast extends Component {
    state = {
    	start: 0,
    	end: 9,
    };

    prevMargin = () => {
    	const { start, end } = this.state;
    	if (start > 0) {
    		this.setState({
    			start: start - 9,
    			end: end - 9,
    		});
    	}
    };

    nextMargin = () => {
    	const { start, end } = this.state;
    	if (end < this.props.cast.length - 1) {
    		this.setState({
    			start: start + 9,
    			end: end + 9,
    		});
    	}
    };

    render() {
    	const { cast } = this.props;
    	const { start, end } = this.state;

    	if (!cast || !cast.length) return null;

    	const listActors = cast.slice(start, end).map(e => (
					<div key={e.id}>
						<PersonLinkForMovie actor={e} />
					</div>
    	));

    	return (
					<div className="cast_wrapper">
						<div className="subtitle">Starring &#8250;</div>
						<div className="cast_main_content">
							<button onClick={this.prevMargin} className="cast_arrow">&#10094;</button>
							<div className="cast">
								{listActors}
							</div>
							<button onClick={this.nextMargin} className="cast_arrow">&#10095;</button>
						</div>
					</div>
    	);
    }
}
