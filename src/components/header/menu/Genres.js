import React, {Component} from 'react';
import {API_KEY, URL} from "../../../constants";

export default class Genres extends Component {
    setGenre = (e) => {
        let {setGenre, setDirection, changePage, setOption, setPage} = this.props;
        let genre = e.target.value;
        setDirection(`/genres?`);
        setGenre(genre);
        setOption(`language=en-US&include_adult=false&include_video=false&sort_by=popularity.desc&with_genres=${genre.split('_')[1]}`);
        setPage(1);
        changePage(`/genres?genre=${genre.split('_')[0]}`);
    };

    componentDidMount() {
        this.props.genresFetchData(`${URL}/genre/movie/list?api_key=${API_KEY}&language=en-US`);
    }

    render() {
        const {genres} = this.props;

        if (!genres) return <div className='loading'/>;

        let genresLink = genres.map(genre => {
            let {id, name} = genre;
            return (
                <div key={id} className='sidebar_item'>
                    <button onClick={this.setGenre} value={`${name}_${id}`.toLowerCase()}>
                        {name}
                    </button>
                </div>
            )
        });

        return (
            <div className='menu_item'>
                <div className='menu_item_sidebar'>
                    <div className='menu_item_name'>Genres</div>
                    <div className='sidebar'>
                        {genresLink}
                    </div>
                </div>
            </div>
        )
    }
}