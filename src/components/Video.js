import React, {Component} from 'react';

export default class Video extends Component {
    render() {
        const {video} = this.props;

        let videos = video.map((e, i) => {
            let url = `https://www.${video[i].site.toLowerCase()}.com/watch?v=${video[i].key}`;
            return (
                <div key={e.id}>
                    <div>{e.name}</div>
                    <a href={url}>{e.name}</a>
                </div>
            )
        });

        return (
            <div>
                <div>
                    {videos}
                </div>
            </div>
        )
    }
}
