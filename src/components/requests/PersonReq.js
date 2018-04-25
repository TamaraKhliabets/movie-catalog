import React, {Component} from 'react';
import axios from 'axios';
import {API_KEY, URL} from "../../constants";
import PersonData from "../person/PersonData";
import ListItem from "../movies/ListItem";
import Choice from "../options/Choice";

export default class PersonReq extends Component {
    state = {
        person: null,
        chooseMovies: true
    };

    loadPerson = () => {
        axios.get(`${URL}/person/${this.props.match.params.id}?api_key=${API_KEY}&append_to_response=combined_credits`)
            .then(res => this.setState({person: res.data}))
    };

    setMovies = (e) => {
        (e === 'tv') ? this.setState({chooseMovies: false}) : this.setState({chooseMovies: true});
    };

    componentDidMount() {
        this.loadPerson()
    };

    render() {
        const {person, chooseMovies} = this.state;

        if (!person) return <div className='loading'/>;
        {console.log(person)}
        return (
            <div>
                <PersonData person={person}/>
                {
                    person.combined_credits.crew.length ?  <Choice setUrl={this.setMovies}/> : null
                }
                {
                    chooseMovies ?
                        <ListItem movies={person.combined_credits.cast}/> :
                        <ListItem movies={person.combined_credits.crew}/>
                }
                {/*<PersonMovies movies={person.movie_credits.cast}/>*/}
                              {/*tv={person.combined_credits.crew}/>*/}
            </div>
        )
    }
}