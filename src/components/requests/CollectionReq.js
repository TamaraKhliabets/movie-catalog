import React, {Component} from 'react';
import axios from 'axios';
import {API_KEY, URL} from "../../constants";
import Collection from "../options/Collection";

export default class CollectionReq extends Component {
    state = {
        collection: null
    };

    loadCollection = () => {
        axios.get(`${URL}/collection/${this.props.match.params.id}?api_key=${API_KEY}&language=en-US`)
            .then(res => this.setState({collection: res.data}))
    };

    componentDidMount() {
        this.loadCollection()
    };

    render() {
        const {collection} = this.state;

        if (!collection) return <div className='loading'/>;

        return (
            <div>
                <Collection collection={collection}/>
            </div>
        )
    }
}