import React, { Component } from 'react';

export default class Reviews extends Component {
	render() {
		const { reviews } = this.props;

		if (!reviews || !reviews.length) return null;

		const nodeReviews = reviews.map(e => (
			<div className="review" key={e.id}>
				<div className="review_author">
					{e.author}
:


				
</div>
				<div className="review_content">{e.content}</div>
			</div>
		));

		return (
			<div>
				<div className="subtitle">Reviews &#8250;</div>
				{nodeReviews}
			</div>
		);
	}
}
