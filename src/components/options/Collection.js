import React, {Component} from 'react';
import ListItem from "../movies/ListItem";

export default class Collection extends Component {
    render() {
        const {collection} = this.props;
        const {name, overview, poster_path, parts} = collection;
        const src = 'https://image.tmdb.org/t/p/w500'.concat(poster_path);

        return (
            <div>
                <img src={src} alt={name}/>
                {name}
                {overview}
                <ListItem movies={parts}/>
            </div>
        )
    }
}