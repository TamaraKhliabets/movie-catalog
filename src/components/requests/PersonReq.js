import React, {Component} from 'react';
import axios from 'axios';
import {API_KEY, URL} from "../../constants";
import PersonData from "../person/PersonData";
import PersonMovies from "../person/PersonMovies";

export default class PersonReq extends Component {
    state = {
        person: null
    };

    loadPerson = () => {
        axios.get(`${URL}/person/${this.props.match.params.id}?api_key=${API_KEY}&append_to_response=movie_credits`)
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
                <PersonMovies movies={person.movie_credits.cast}/>
            </div>
        )
    }
}