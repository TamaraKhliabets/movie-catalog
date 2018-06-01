import React, {Component} from 'react';
import ListItem from "../movies/ListItem";
import cinema from '../../default/oscar.png';

export default class Collection extends Component {
    render() {
        const {collection} = this.props;
        const {name, overview, poster_path, parts} = collection;
        const src = 'https://image.tmdb.org/t/p/w342'.concat(poster_path);

        return (
            <div>
                <div className='item_description'>
                    <img src={poster_path ? src : cinema} alt={name}/>
                    <table className='item_info'>
                        <caption className='item_title'>{name}</caption>
                        <tbody>
                        {
                            overview ?
                                <tr>
                                    <td>Overview:</td>
                                    <td>{overview}</td>
                                </tr>
                                : null
                        }
                        </tbody>
                    </table>
                </div>
                <ListItem movies={parts} direction='movies'/>
            </div>
        )
    }
}