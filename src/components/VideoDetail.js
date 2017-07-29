import React, { Component } from 'react';

export default class VideoDetail extends Component {
  render() {
    let video = this.props.video;
    if (!video) {
      return <div>Loading...</div>;
    }

    let videoId = video.id.videoId;
    let url = `https://www.youtube.com/embed/${videoId}`;
    return (
      <div className="VideoDetail col-md-8">
        <div className="embed-responsive embed-responsive-16by9">
          <iframe className="embed-responsive-item" title={video.snippet.title} src={url}></iframe>
        </div>
        <div className="details">
          <div>{video.snippet.title}</div>
          <div>{video.snippet.description}</div>
        </div>
      </div>
    );
  }
}
