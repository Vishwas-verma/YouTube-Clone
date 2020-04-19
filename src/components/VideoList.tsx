import React from "react";
import VideoListItem from "./VideoListItem"

class VideoList extends React.Component<any, any> {
  render() {
    const videoItems = this.props.videos.map((video: any) => {
      return <VideoListItem
        onVideoSelect={this.props.onVideoSelect}
        key = {video.etag}
        video = {video}/>
    });
    return (
      <ul className = {"col-md-4 list-group"}>
        {videoItems}
      </ul>
    );
  }
}

export default VideoList;