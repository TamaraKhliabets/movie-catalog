import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class LinkItem extends Component {

    render() {
        const {movie} = this.props;
        const {id, title, name, vote_average, poster_path, overview, release_date, first_air_date} = movie;
        const src = 'https://image.tmdb.org/t/p/w200'.concat(poster_path);
        const defSrc = 'https://vignette.wikia.nocookie.net/angrybirdsfanon/images/b/b2/Movie.jpg/revision/latest?cb=20130804215834';
        const date = new Date(release_date || first_air_date).getFullYear();
        let content =
            <div>
                <div className='link_item_image'>
                    {
                        (poster_path) ?
                            <img className='link_image' src={src} alt={title || name}/> :
                            <img className='link_image' src={defSrc} alt={title || name}/>
                    }
                </div>
                {
                    title ?
                        <div className='link_item_title'>{title}</div> :
                        <div className='link_item_title'>TV series: {name}</div>
                }
                {/*<div className='link_item_title'>{title || name}</div>*/}
                <div className='link_item_hover'>
                    <div className='link_item_vote'>IMDb: {vote_average}/10 <span
                        className='link_item_star'>&#10025;</span>
                    </div>
                    {
                        (release_date || first_air_date) ?
                            <div className='link_item_date'>{date} YEAR</div> : null
                    }
                    {
                        overview ? <div className='link_item_overiew'>{overview}</div> : null
                    }
                </div>
            </div>;

        return (
            <div className='link_item'>
                {title ?
                    (<Link to={`/movie/${id}`}>
                        {content}
                    </Link>) :
                    (<Link to={`/tv/${id}`}>
                        {content}
                    </Link>)}
            </div>
        )
    }
}
