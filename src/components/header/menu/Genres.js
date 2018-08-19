import React, {Component} from 'react';
import {connect} from 'react-redux';
import {genresFetchData} from "../../../actions/genres";
// import {Link} from 'react-router-dom';
import {API_KEY, URL} from "../../../constants";

class Genres extends Component {
    setNewGenres = (e) => {
        // e.preventDefault();
        // this.props.setPage(e.target.value);
        // this.props.history.push(`/${this.props.direction}${this.props.location.search.slice(0,-1)}${e.target.value}`)
    };

    componentDidMount() {
        this.props.fetchGenres(`${URL}/genre/movie/list?api_key=${API_KEY}&language=en-US`);
    }

    render() {
        const {genres} = this.props;
        {console.log(genres)}
        if (!genres) return <div className='loading'/>;

        let genresLink = genres.map(genre => {
            let {id, name} = genre;
            return (
                <div key={id} className='sidebar_item'>
                    <button onClick={this.setNewGenres} value={name}>
                        {name}
                    </button>
                    {/*<Link to={`/genres/${name.toLowerCase()}/${id}?page=1`}>*/}
                        {/*{name}*/}
                    {/*</Link>*/}
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

const mapStateToProps = state => ({
    genres: state.genres
});

const mapDispatchToProps = dispatch => ({
    fetchGenres: url => dispatch(genresFetchData(url))
});

export default connect(mapStateToProps, mapDispatchToProps)(Genres);