import React, {Component} from 'react';
import Req from './Req';

export default class MoviesReq extends Component {
    state = {
        url: `/tv/popular`,
        options: `language=en-US`,
        page: 0,
        direction: `tv?`
    };

    componentWillMount() {
        let searchParams = new URLSearchParams(this.props.location.search);
        this.setState({page: +searchParams.get('page')})
    };


    render() {
        return (
            <div>
                <Req {...this.state}/>
            </div>
        )
    }
}