import { connect } from 'react-redux';
import { login } from '../../actions/user';
import Login from '../../components/auth/Login';

const mapStateToProps = ({ userName }) => ({
  userName,
});

const mapDispatchToProps = {
  login,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
