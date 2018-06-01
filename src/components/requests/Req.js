import React, {Component} from 'react';
import axios from "axios/index";
import {API_KEY, URL} from "../../constants";
import ListItem from '../movies/ListItem';
import ButtonPage from './../buttons/ButtonPage';
import ButtonFilter from "../buttons/ButtonFilter";

export default class Req extends Component{
    state = {
        records: null
    };

    loadMovies = () => {
        let {url, options, page} = this.props;
        axios.get(`${URL}${url}?api_key=${API_KEY}&${options}&page=${page}`)
            .then(res => this.setState({records: res.data}))
    };

    componentDidMount() {
        this.loadMovies()
    }

    render() {
        const {records} = this.state;

        if (!records) return <div className='loading'/>;
        // {console.log(this.props)}
        return (
            <div>
                <ButtonFilter {...this.props}/>
                <ListItem movies={records.results} {...this.props}/>
                <ButtonPage {...this.props}
                            total={records.total_pages}/>
            </div>
        )
    }
}