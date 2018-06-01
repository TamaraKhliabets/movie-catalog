import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import cinema from '../../default/videos.png';

export default class MovieLink extends Component {

    render() {
        const {movie} = this.props;
        const {id, title, vote_average, poster_path, overview, release_date} = movie;
        const src = 'https://image.tmdb.org/t/p/w185'.concat(poster_path);
        const date = new Date(release_date).getFullYear();

        return (
            <div className='link_item'>
                <Link to={`/movie/${id}`}>
                    <img className='link_image' src={poster_path ? src : cinema} alt={title}/>
                    <div className='link_item_title'>{title}</div>
                    <div className='link_item_hover'>
                        <div className='link_item_vote'>IMDb: {vote_average}/10 <span
                            className='link_item_star'>&#10025;</span>
                        </div>
                        {
                            release_date ?
                                <div className='link_item_date'>{date} YEAR</div> : null
                        }
                        {
                            overview ? <div className='link_item_overiew'>{overview}</div> : null
                        }
                    </div>
                </Link>
            </div>
        )
    }
}
