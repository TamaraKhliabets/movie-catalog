import React, { Component } from 'react';

export default class Video extends Component {
    state = {
    	key: null,
    	site: null,
    	name: null,
    };

    setKey = (e) => {
    	const { video } = this.props;
    	this.setState({
    		key: video[e.target.id].key,
    		site: video[e.target.id].site,
    		name: video[e.target.id].name,
    	});
    };

    componentWillReceiveProps(nextProps) {
    	if (nextProps.video !== this.props.video) {
    		this.setState({
    			key: nextProps.video[0].key,
    			site: nextProps.video[0].site,
    			name: nextProps.video[0].name,
    		});
    	}
    }

    render() {
    	const { video } = this.props;
    	const { key, site, name } = this.state;

    	if (!video || !video.length) return null;

    	const videos = video.map((e, i) => (
			<button
				key={e.id}
				id={i}
				className={(key === video[i].key) ? 'button_video_active' : 'button_video'}
				onClick={this.setKey}
			>
				{e.name}
			</button>
    	)).slice(0, 3);

    	return (
			<div className="video">
				<div className="video_buttons">
					{videos}
				</div>
				<div className="video_youtube">
					{
							site && site.toLowerCase() === 'youtube' ? (
									<iframe
										width="560"
										height="315"
										frameBorder="0"
										allowFullScreen="1"
										title={name}
										src={`https://www.youtube.com/embed/${key}`}
									/>
										) : null
					}
				</div>
			</div>
    	);
    }
}
