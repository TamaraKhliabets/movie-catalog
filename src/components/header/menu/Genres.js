import React, {Component} from 'react';
import {connect} from 'react-redux';
import {genresFetchData} from "../../../actions/genres";
import {changePage, setGenre, setOption} from "../../../actions/options";
import {API_KEY, URL} from "../../../constants";

class Genres extends Component {
    setNewGenres = (e) => {
        let {setGenre, changePage, setOption} = this.props;
        let genre = e.target.value;
        setGenre(genre);
        setOption(`language=en-US&include_adult=false&include_video=false&sort_by=popularity.desc&with_genres=${genre.split('_')[1]}`);
        changePage(`/genres?genre=${genre.split('_')[0]}&page=1`)
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
                    <button onClick={this.setNewGenres} value={`${name}_${id}`.toLowerCase()}>
                        {name}
                    </button>
                </div>
            )
        });

        return (
            <div className='menu_item'>
                <div className='menu_item_sidebar'>
                    <span role="img" aria-label="icon" className='menu_item_icon'>&#127908;</span>
                    <div className='menu_item_name'>Genres</div>
                    <div className='sidebar'>
                        {genresLink}
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = ({genres}) => ({
    genres
});

const mapDispatchToProps = {
    genresFetchData,
    changePage,
    setGenre,
    setOption
};

export default connect(mapStateToProps, mapDispatchToProps)(Genres);