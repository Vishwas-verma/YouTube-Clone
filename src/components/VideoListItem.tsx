import React from "react";

class VideoListItem extends React.Component<any, any> {
  render() {
    return (
      <li onClick={()=>this.props.onVideoSelect(this.props.video)} className = {"list-group-item"}>
        <div className = {"video-list media"}>
          <div className = {"media-left"}>
            <img className = {"media-object"} src = {this.props.video.snippet.thumbnails.default.url} alt={""}/>
          </div>
          <div className = {"media-body"}>
            <div className = {"media-heading"}><b>{this.props.video.snippet.title}</b></div>
          </div>
        </div>
      </li>
    );
  }
}

export default VideoListItem;