import React, { Component } from 'react';

export default class Video extends Component {
  render() {
    let video = this.props.video;
    let onVideoSelect = this.props.onVideoSelect;
    let imgUrl = video.snippet.thumbnails.default.url;
    return (
      <li onClick={() => onVideoSelect(video)} className="list-group-item">
        <div className="video-list media">
          <div className="media-left">
            <img className="media-object" alt="" src={imgUrl} />
          </div>
          <div className="media-body">
            <div className="media-heading">{video.snippet.title}</div>
          </div>
        </div>
      </li>
    );
  }
}
