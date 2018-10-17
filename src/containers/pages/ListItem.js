import {connect} from 'react-redux';
import ListItem from '../../components/pages/ListItem';

const mapStateToProps = ({movies, persons, direction}) => ({
    movies,
    direction,
    persons
});

export default connect(mapStateToProps)(ListItem);