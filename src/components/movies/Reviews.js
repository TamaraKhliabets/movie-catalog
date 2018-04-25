import React, {Component} from 'react';

export default class Reviews extends Component{
    render() {
        let nodeReviews = this.props.reviews.map(e => {
            return (
                <div key={e.id}>
                    {e.author}
                    {e.content}
                </div>
            )
        });

        return (
            <div>
                {nodeReviews}
            </div>
        )
    }
}