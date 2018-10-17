import {connect} from 'react-redux';
import Reviews from '../../components/movies/Reviews';

const mapStateToProps = ({reviews}) => ({
    reviews
});

export default connect(mapStateToProps)(Reviews);