import {connect} from 'react-redux';

import {personFetchData} from "../../actions/person";
import PersonReq from "../handler/PersonReq";


const mapStateToProps = ({person, personMovie, personTv}, ownProps) => ({
    url: `/${ownProps.direction}/${ownProps.id}`,
    person,
    personMovie,
    personTv
});

const mapDispatchToProps = dispatch => ({
    fetchPerson: url => dispatch(personFetchData(url))
});

export default connect(mapStateToProps, mapDispatchToProps)(PersonReq);