import {connect} from 'react-redux';

import {personFetchData} from "../../actions/person";
import PersonReq from "../../components/requests/PersonReq";


const mapStateToProps = ({person, personMovie, personTv}, ownProps) => ({
    url: `/${ownProps.direction}/${ownProps.id}`,
    person,
    personMovie,
    personTv
});

const mapDispatchToProps = {
    personFetchData
};

export default connect(mapStateToProps, mapDispatchToProps)(PersonReq);