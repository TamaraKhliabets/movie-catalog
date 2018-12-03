import { connect } from 'react-redux';

import { movieFetchData } from '../../actions/movie';
import ItemReq from '../../components/requests/ItemReq';

const mapStateToProps = ({
  movie, cast, video, similar, reviews, isAuth, direction,
}, ownProps) => ({
  url: `/${ownProps.direction}/${ownProps.id}`,
  movie,
  cast,
  video,
  similar,
  reviews,
  isAuth,
  direction,
});

const mapDispatchToProps = {
  movieFetchData,
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemReq);
