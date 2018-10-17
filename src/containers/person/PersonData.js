import {connect} from 'react-redux';
import PersonData from '../../components/person/PersonData';

const mapStateToProps = ({person}) => ({
    person
});

export default connect(mapStateToProps)(PersonData);