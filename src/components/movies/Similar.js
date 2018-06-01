import React, {Component} from 'react';
import ListItem from "./ListItem";

export default class Similar extends Component {
    render() {
        const {movies, direction} = this.props;
        const shortMovies = movies.slice(0, 4);

        return (
            <div>
                <div className='subtitle'>Similar movies &#8250;</div>
                <ListItem movies={shortMovies} direction={direction}/>
            </div>
        )
    }
}