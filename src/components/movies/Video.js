import React, {Component} from 'react';

export default class Video extends Component {
    render() {
        const {video} = this.props;

        let videos = video.map((e, i) => {
            let url = `https://www.${video[i].site.toLowerCase()}.com/watch?v=${video[i].key}`;

            return (
                <div key={e.id}>
                    <div>{e.name}</div>
                    {
                        video[i].site.toLowerCase() === 'youtube' ?
                            <iframe width="420" height="315"
                                    src={`https://www.youtube.com/embed/${video[i].key}`}>
                            </iframe> : null
                    }

                    <a href={url} target='_blank'>{e.name}</a>
                </div>
            )
        }).slice(0, 3);

        return (
            <div>
                {console.log(video)}
                <div>
                    {videos}
                </div>
            </div>
        )
    }
}
