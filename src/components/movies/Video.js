import React, {Component} from 'react';

export default class Video extends Component {
    state = {
        url: this.props.video[0].key
    };

    setUrl = (e) => {
        this.setState({url: this.props.video[e.target.id].key})
    };

    render() {
        const {video} = this.props;
        const {url} = this.state;

        let videos = video.map((e, i) => {
            return (
                <button key={e.id}
                        id={i}
                        className={(url === video[i].key) ? 'button_video_active' : 'button_video'}
                        onClick={this.setUrl}>
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
                    <iframe width="560" height="315" frameBorder="0" allowFullScreen="1"
                            src={`https://www.youtube.com/embed/${url}`}>
                    </iframe>
                </div>
            </div>
        )
    }
}
