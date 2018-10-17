import {connect} from 'react-redux';
import {setActualMovies} from "../../actions/person";
import PersonFilmpgraphy from "../../components/person/PersonFilmpgraphy";

const mapStateToProps = ({showMovies, person, personMovie, personTv}) => ({
    showMovies,
    person,
    personMovie,
    personTv
});

const mapDispatchToProps = {
    setActualMovies
};

export default connect(mapStateToProps, mapDispatchToProps)(PersonFilmpgraphy);