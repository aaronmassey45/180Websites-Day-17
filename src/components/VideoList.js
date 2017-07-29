import React, { Component } from 'react';
import Video from './Video';

export default class VideoList extends Component {
  render() {
    var videoItems = this.props.videos.map(video => {
      return <Video
        onVideoSelect={this.props.onVideoSelect}
        video={video}
        key={video.etag} />
    });
    return (
      <div className="VideoList">
        <ul className="col-md-4 list-group">
          {videoItems}
        </ul>
      </div>
    );
  }
}
