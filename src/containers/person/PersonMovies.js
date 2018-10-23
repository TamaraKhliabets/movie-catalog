import { connect } from 'react-redux';
import PersonMovies from '../../components/person/PersonMovies';

const mapStateToProps = ({ personMovie, personTv, showMovies }) => ({
	personMovie,
	personTv,
	showMovies,
});

export default connect(mapStateToProps)(PersonMovies);
