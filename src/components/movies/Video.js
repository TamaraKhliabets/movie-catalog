import React, {Component} from 'react';

export default class Video extends Component {
    state = {
        key: this.props.video[0].key,
        site: this.props.video[0].site
    };

    setKey = (e) => {
        let {video} = this.props;
        this.setState({
            key: video[e.target.id].key,
            site: video[e.target.id].site
        })
    };

    render() {
        const {video} = this.props;
        const {key, site} = this.state;

        let videos = video.map((e, i) => {
            return (
                <button key={e.id}
                        id={i}
                        className={(key === video[i].key) ? 'button_video_active' : 'button_video'}
                        onClick={this.setKey}>
                    {e.name}
                </button>
            )
        }).slice(0, 3);

        return (
            <div className='video'>
                <div className='video_buttons'>
                    {videos}
                </div>
                <div className='video_youtube'>
                    {
                        site.toLowerCase() === 'youtube' ?
                            <iframe width="560" height="315" frameBorder="0" allowFullScreen="1"
                                    src={`https://www.youtube.com/embed/${key}`}>
                            </iframe>: null
                    }
                </div>
            </div>
        )
    }
}
