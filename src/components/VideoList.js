import React from "react";
import VideoItem from "./VideoItem";
import "./styles.css";

const VideoList = ({ videos, onVideoSelect, darkMode }) => {
  const renderedList = videos.map((video) => {
    return (
      <VideoItem
        key={video.id.videoId}
        onVideoSelect={onVideoSelect}
        video={video}
        darkMode={darkMode}
      />
    );
  });

  return <div className="ui relaxed divided list">{renderedList}</div>;
};

export default VideoList;
