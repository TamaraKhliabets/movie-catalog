import React, {Component} from 'react';
import Req from './Req';

export default class MoviesReq extends Component {
    state = {
        url: `/movie/popular`,
        options: `language=en-US`,
        page: 0,
        direction: `movie?`
    };

    componentWillMount() {
        let searchParams = new URLSearchParams(this.props.location.search);
        let sort = searchParams.get('sort');
        let year = searchParams.get('year');
        let today = new Date().getFullYear();
        let options = searchParams.has('year') ?
            `language=en-US&sort_by=${sort}&include_adult=false&include_video=false&primary_release_year=${year}` :
            `language=en-US&sort_by=${sort}&include_adult=false&include_video=false&year=${today}`;
        searchParams.has('sort') ?
            this.setState({
                url: `/discover/movie`,
                options: options,
                page: +searchParams.get('page')
            }) :
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