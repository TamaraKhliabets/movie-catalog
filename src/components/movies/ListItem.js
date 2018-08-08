import React, {Component} from 'react';

import { connect } from 'react-redux';
import MovieLink from "../links/MovieLink";
import TvLink from "../links/TvLink";
import PersonLink from "../links/PersonLink";

class ListItem extends Component {
    render() {
        const {movies, direction} = this.props;

        let nodeItem = movies.map(e => {
            if (direction === 'movie') {
                return (
                    <div key={e.id} className='list_item'>
                        <MovieLink movie={e}/>
                    </div>
                );
            } else if (direction === 'tv') {
                return (
                    <div key={e.id} className='list_item'>
                        <TvLink movie={e}/>
                    </div>
                );
            } else if (direction === 'persons') {
                return (
                    <div key={e.id} className='list_item'>
                        <PersonLink actor={e}/>
                    </div>
                );
            } else if (direction.includes('search')) {
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
            } else {
                return (
                    <div key={e.id} className='list_item'>
                        <MovieLink movie={e}/>
                    </div>
                );
            }
        });

        return (
            <div className='list'>
                {nodeItem}
            </div>
        );
    }
}


const mapStateToProps = state => ({
   movies: state.movies,
   direction: state.direction
});

export default connect(mapStateToProps)(ListItem);