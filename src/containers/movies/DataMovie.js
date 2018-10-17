import {connect} from 'react-redux';
import DataMovie from '../../components/movies/DataMovie';

const mapStateToProps = ({movie}) => ({
    movie
});

export default connect(mapStateToProps)(DataMovie);