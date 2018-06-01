import React, {Component} from 'react';
import axios from 'axios';
import {API_KEY, URL} from "../../constants";
import PersonData from "../person/PersonData";
import PersonMovies from '../person/PersonMovies';

export default class PersonReq extends Component {
    state = {
        person: null
    };

    loadPerson = () => {
        axios.get(`${URL}/person/${this.props.match.params.id}?api_key=${API_KEY}&append_to_response=movie_credits,tv_credits`)
            .then(res => this.setState({person: res.data}))
    };

    componentDidMount() {
        this.loadPerson()
    };

    render() {
        const {person} = this.state;

        if (!person) return <div className='loading'/>;

        return (
            <div>
                <PersonData person={person}/>
                {
                    person.movie_credits.cast.length ?
                        <div>
                            <div className='subtitle'>Movies {person.name} &#8250;</div>
                            <PersonMovies movie={person.movie_credits.cast} direction='movies'/>
                        </div>
                        : null
                }
                {
                    person.tv_credits.cast.length ?
                        <div>
                            <div className='subtitle'>TV shows {person.name} &#8250;</div>
                            <PersonMovies movie={person.tv_credits.cast} direction='tv'/>
                        </div>
                        : null
                }
            </div>
        )
    }
}