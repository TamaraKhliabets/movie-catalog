import React, {Component} from 'react';
import ListItem from "./ListItem";

export default class Similar extends Component {
    render() {
        const {movies} = this.props;
        const shortMovies = movies.slice(0, 5);

        return (
            <div>
                <ListItem movies={shortMovies}/>
            </div>
        )
    }
}