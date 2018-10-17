import {connect} from 'react-redux';
import Cast from '../../components/movies/Cast';


const mapStateToProps = ({cast}) => ({
    cast
});

export default connect(mapStateToProps)(Cast);