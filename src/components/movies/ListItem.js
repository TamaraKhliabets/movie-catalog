import React, {Component} from 'react';
import MovieLink from "../links/MovieLink";
import TvLink from "../links/TvLink";
import PersonLink from "../links/PersonLink";

export default class ListItem extends Component {
    render() {
        const {movies, direction} = this.props;

        let nodeItem = movies.map(e => {
            switch (true) {
                case direction.includes('movie'):
                    return (
                        <div key={e.id} className='list_item'>
                            <MovieLink movie={e}/>
                        </div>
                    );
                    break;
                case direction.includes('tv'):
                    return (
                        <div key={e.id} className='list_item'>
                            <TvLink movie={e}/>
                        </div>
                    );
                    break;
                case direction.includes('persons'):
                    return (
                        <div key={e.id} className='list_item'>
                            <PersonLink actor={e}/>
                        </div>
                    );
                    break;
                case direction.includes('search'):
                    let types = e.media_type;
                    if (types === 'movie') {
                        return (
                            <div key={e.id} className='list_item'>
                                <MovieLink key={e.id} movie={e}/>
                            </div>
                        );
                    } else if (types === 'tv') {
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
                    break;
                default:
                    return <div className='loading'/>
            }
        });

        return (
            <div className='list'>
                {nodeItem}
            </div>
        );
    }
}
