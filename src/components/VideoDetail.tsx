import React from "react";

class VideoDetail extends React.Component<any, any> {
  render() {
    if (!this.props.video) {
      return <div>Loading..</div>
    }
    const videoId = this.props.video.id.videoId;
    const url     = `https://www.youtube.com/embed/${videoId}`;
    return (
      <div className = {"video-detail col-md-8"} style = {{marginLeft: "10px"}}>
        <div className = {"embed-responsive embed-responsive-16by9"}>
          <iframe style = {{width: "100%", height: "600px", marginBottom: "20px"}} className = {"embed-responsive-item"}
                  src = {url}/>
        </div>
        <div className = {"details header"}>
          <div style = {{marginBottom: "20px"}}><strong
            style = {{fontSize: "30px"}}>{this.props.video.snippet.title}</strong>
          </div>
          <div style = {{fontSize: "15px",color:"red"}}>{this.props.video.snippet.description}</div>
        </div>
      </div>
    );
  }
}

export default VideoDetail;