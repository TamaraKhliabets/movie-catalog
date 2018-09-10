import React, {Component} from 'react';
import {connect} from 'react-redux';
import MovieLink from "../links/MovieLink";
import TvLink from "../links/TvLink";

class Similar extends Component {
    render() {
        const {similar, direction} = this.props;
        const shortMovies = similar.slice(0, 4);
        let nodeItem = shortMovies.map(e => {
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
            }
        });

        return (
            <div>
                <div className='subtitle'>Similar movies &#8250;</div>
                <div className='list'>
                    {nodeItem}
                </div>
            </div>
        )
    }
}

const mapStateToProps = ({similar, direction}) => ({
    similar,
    direction
});

export default connect(mapStateToProps)(Similar);