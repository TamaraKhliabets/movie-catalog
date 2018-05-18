import React, {Component} from 'react';
import Req from './Req';

export default class FilterGenreReq extends Component {
    state = {
        url: `/discover/movie`,
        options: `language=en-US&include_adult=false&include_video=false&sort_by=popularity.desc&with_genres=${this.props.match.params.id}`,
        page: 0,
        direction: `genres/${this.props.match.params.name}/${this.props.match.params.id}?`
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