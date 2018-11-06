import React from 'react';

const Title = props => (
	<button
		type="button"
		className="title"
		onClick={() => {
		  props.setDirection('/');
		  props.setPage(1);
		  props.setOption('language=en-US');
		  props.changePage('/');
		}}
	>
		{'What to watch???'}
	</button>

);

export default Title;
