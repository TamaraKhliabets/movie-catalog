import { connect } from 'react-redux';
import PersonsReq from '../../components/requests/PersonsReq';
import { PATH } from '../../constants';
import { personsFetchData } from '../../actions/persons';

const getCurrentDirection = direction => PATH.find(e => e.direction === direction).url;

const mapStateToProps = ({
  page, persons, personsHasErr, personsIsLoad,
}, ownProps) => ({
  url: getCurrentDirection(ownProps.direction),
  page,
  persons,
  personsHasErr,
  personsIsLoad,

});

const mapDispatchToProps = {
  personsFetchData,
};

export default connect(mapStateToProps, mapDispatchToProps)(PersonsReq);
