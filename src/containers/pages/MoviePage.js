import { connect } from 'react-redux';
import MovieReq from '../../components/requests/MovieReq';
import { PATH } from '../../constants';
import { moviesFetchData } from '../../actions/movies';

const getCurrentDirection = direction => PATH.find(e => e.direction === direction).url;

const mapStateToProps = ({ option, page, movies, hasError, isLoading }, ownProps) => ({
  url: getCurrentDirection(ownProps.direction),
  option,
  page,
  movies,
  hasError,
  isLoading,

});

const mapDispatchToProps = {
  moviesFetchData,
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieReq);
