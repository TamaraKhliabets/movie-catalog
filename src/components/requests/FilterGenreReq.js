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
        let sort = searchParams.get('sort');
        let year = searchParams.get('year');
        let today = new Date().getFullYear();
        let genre = this.props.match.params.id;
        let options = searchParams.has('year') ?
            `language=en-US&sort_by=${sort}&include_adult=false&include_video=false&primary_release_year=${year}&with_genres=${genre}` :
            `language=en-US&sort_by=${sort}&include_adult=false&include_video=false&year=${today}&with_genres=${genre}`;
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