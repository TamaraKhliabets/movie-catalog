import React, {Component} from 'react';
import Req from "../requests/Req";

export default class SearchReq extends Component{
    state = {
        url: `/search/multi`,
        options: '',
        page: 0,
        direction: ``
    };

    componentWillMount() {
        let searchParams = new URLSearchParams(this.props.location.search);
        this.setState({
            page: +searchParams.get('page'),
            options: `language=en-US&include_adult=false&query=${searchParams.get('search')}`,
            direction: `search?search=${searchParams.get('search')}&`
        })
    };


    render() {
        return(
            <div>
                <Req {...this.state}/>
            </div>
        )
    }
}