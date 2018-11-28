import { connect } from 'react-redux';
import { logout, findFavoriteMovies, findFavoriteTvs } from '../../actions/user';
import { setDirection, changePage } from '../../actions/options';
import UserInfo from '../../components/user/UserInfo';

const mapStateToProps = ({ userName }) => ({
  userName,
});

const mapDispatchToProps = {
  logout,
  findFavoriteMovies,
  findFavoriteTvs,
  setDirection,
  changePage,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserInfo);
