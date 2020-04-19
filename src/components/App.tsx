import React, { Component } from 'react';
import SearchBar from "./SearchBar";
import youtube from "../apis/youtube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

const API_KEY = "AIzaSyD6yHCS2CcbZvBsV4GeOc1F_gUmHY_JjNQ";

class App extends Component<any, any> {
  constructor(props: any) {
    super(props);

    this.state = {videos: [], selectedVideo: null};
  }

  onTermSubmit = async (term: any) => {
    console.log(term);

    const response = await youtube.get("/search", {
      params: {
        part      : "snippet",
        maxResults: 5,
        key       : API_KEY,
        q         : term
      }
    });
    console.log(response);
    this.setState({
      videos       : response.data.items,
      selectedVideo: response.data.items[0]
    });
  };

  render() {
    return (
      <div>
        <SearchBar onFormSubmit = {this.onTermSubmit}/>
        <div className={"container"} style={{display:"flex"}}>
        <div style = {{width: "70%",boxSizing:"border-box"}}>
          <VideoDetail video = {this.state.selectedVideo}/>
        </div>
        <div style = {{width: "30%",float:"right",boxSizing:"border-box"}}>
          <VideoList
            onVideoSelect = {(selectedVideo: any) => this.setState({selectedVideo})}
            videos = {this.state.videos}/>
        </div>
        </div>
      </div>
    );
  }

}

export default App;