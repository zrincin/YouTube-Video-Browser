import React from "react";
import "./styles.css";

const VideoItem = ({ video, onVideoSelect, darkMode }) => {
  return (
    <div
      onClick={() => onVideoSelect(video)}
      className={!darkMode ? "video-item item" : "video-item item dark"}
    >
      <img
        alt={video.snippet.title}
        className="ui image"
        src={video.snippet.thumbnails.medium.url}
      />
      <div className="content">
        <div className={!darkMode ? "header" : "header dark"}>
          {video.snippet.channelTitle}:&nbsp;&nbsp;{video.snippet.title}
        </div>
      </div>
    </div>
  );
};

export default VideoItem;
