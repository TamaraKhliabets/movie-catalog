import React, {Component} from 'react';
import Req from "../requests/Req";

export default class PersonsReq extends Component {
    state = {
        url: `/person/popular`,
        options: `language=en-US`,
        page: 0,
        direction: `persons?`
    };

    componentWillMount() {
        let searchParams = new URLSearchParams(this.props.location.search);
        this.setState({
            page: +searchParams.get('page'),
        })
    };

    render() {
        return (
            <div>
                <Req {...this.state}/>
            </div>
        )
    }
}