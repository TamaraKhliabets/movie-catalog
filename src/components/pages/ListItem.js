import React, {Component} from 'react';

import MovieLink from "../links/MovieLink";
import TvLink from "../links/TvLink";
import PersonLink from "../links/PersonLink";

export default class ListItem extends Component {
    render() {
        const {movies, persons, direction} = this.props;

        let nodeItem;

        switch (direction) {
            case 'person?':
                nodeItem = persons.map(e => {
                    return (
                        <div key={e.id} className='list_item'>
                            <PersonLink actor={e}/>
                        </div>
                    )
                });
                break;
            case 'movie?':
                nodeItem = movies.map(e => {
                    return (
                        <div key={e.id} className='list_item'>
                            <MovieLink movie={e}/>
                        </div>
                    );
                });
                break;
            case 'tv?':
                nodeItem = movies.map(e => {
                    return (
                        <div key={e.id} className='list_item'>
                            <TvLink movie={e}/>
                        </div>
                    );
                });
                break;
            case 'search':
                nodeItem = movies.map(e => {
                    let type = e.media_type;
                    if (type === 'movie') {
                        return (
                            <div key={e.id} className='list_item'>
                                <MovieLink key={e.id} movie={e}/>
                            </div>
                        );
                    } else if (type === 'tv') {
                        return (
                            <div key={e.id} className='list_item'>
                                <TvLink movie={e}/>
                            </div>
                        );
                    } else {
                        return (
                            <div key={e.id} className='list_item'>
                                <PersonLink actor={e}/>
                            </div>
                        );
                    }
                });
                break;
            default:
                nodeItem = movies.map(e => {
                    return (
                        <div key={e.id} className='list_item'>
                            <MovieLink movie={e}/>
                        </div>
                    );
                });
                break
        }

        return (
            <div className='list'>
                {nodeItem}
            </div>
        );
    }
}