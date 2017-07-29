import React, { Component } from 'react';
import YTSearch from 'youtube-api-search';
import Navbar from './navbar';
import SearchBar from './components/SearchBar';
import VideoList from './components/VideoList';
import VideoDetail from './components/VideoDetail';
import _ from 'lodash';
import './App.css';
const API_KEY = "AIzaSyAHuQRS6vqFAyav-RYP7vgTR5V3gN82aNQ";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
     }
     this.videoSearch('Jake and Amir');
  }

  videoSearch(term) {
    YTSearch({key: API_KEY, term: term}, (videos) => {
      this.setState({
        videos:videos,
        selectedVideo: videos[0]
      })
    })
  }
  render() {
    let videoSearch = _.debounce((term) => {this.videoSearch(term)}, 300);
    return (
      <div className="App">
        <Navbar />
        <div className="container">
          <SearchBar onSearchBarChange={videoSearch}/>
          <VideoDetail video={this.state.selectedVideo}/>
          <VideoList onVideoSelect={selectedVideo => this.setState({selectedVideo}) }
          videos={this.state.videos} />
        </div>
      </div>
    );
  }
}
