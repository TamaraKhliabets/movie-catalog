import {connect} from 'react-redux';
import {changePage, setDirection, setOption, setPage, setGenre} from "../../actions/options";
import {genresFetchData} from "../../actions/genres";
import Genres from "../../components/header/menu/Genres";

const mapStateToProps = ({genres}) => ({
    genres
});

const mapDispatchToProps = {
    setDirection,
    setPage,
    setOption,
    changePage,
    setGenre,
    genresFetchData
};

export default connect(mapStateToProps, mapDispatchToProps)(Genres);