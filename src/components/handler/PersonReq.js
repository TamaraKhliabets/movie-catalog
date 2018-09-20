import React, {Component} from 'react';
import {API_KEY, URL} from "../../constants";
import PersonData from "../person/PersonData";
import PersonFilmpgraphy from "../person/PersonFilmpgraphy";

export default class PersonReq extends Component {

    componentDidMount() {
        let {fetchPerson, url} = this.props;
        fetchPerson(`${URL}${url}?api_key=${API_KEY}${'&language=en-US&append_to_response=movie_credits,tv_credits'}`)
    };

    render() {
        const {person} = this.props;

        if (!person) return <div className='loading'/>;
        console.log(person);
        return (
            <div>
                <PersonData/>
                <PersonFilmpgraphy/>
            </div>
        )
    }
}