import { connect } from 'react-redux';

import { collectionFetchData } from '../../actions/collection';
import CollectionReq from '../../components/requests/CollectionReq';

const mapStateToProps = ({ collection }, ownProps) => ({
	url: `/collection/${ownProps.id}`,
	collection,
});

const mapDispatchToProps = {
	collectionFetchData,
};

export default connect(mapStateToProps, mapDispatchToProps)(CollectionReq);
