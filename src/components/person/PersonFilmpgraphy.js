import React, {Component} from 'react';
import PersonMovies from "../../containers/person/PersonMovies";

export default class PersonFilmpgraphy extends Component {
    render() {
        let {person, personMovie, personTv, setActualMovies, showMovies} = this.props;

        if (!personMovie || !personTv) return <div className='loading'/>;

        return (
            <div>
                {personMovie.length ?
                    <button onClick={() => setActualMovies(!showMovies)} className='subtitle'>
                        {person.name}'s movies</button> :
                    null}
                {personTv.length ?
                    <button onClick={() => setActualMovies(!showMovies)} className='subtitle'>
                        {person.name}'s TV shows</button> :
                    null}
                <PersonMovies/>
            </div>
        )
    }
}