import { connect } from 'react-redux';
import User from '../../components/auth/User';

const mapStateToProps = ({ userName }) => ({
  userName,
});


export default connect(mapStateToProps, null)(User);
