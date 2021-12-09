import React from "react";
import "./styles.css";

const VideoDetail = ({ video, darkMode }) => {
  if (!video) {
    return <div>Loading...</div>;
  }

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

  return (
    <>
      <div className="ui embed">
        <iframe title="video player" src={videoSrc} allow="fullscreen" />
      </div>
      <div className={!darkMode ? "ui segment" : "ui segment dark"}>
        <h4 className={!darkMode ? "ui header" : "ui header dark"}>
          {video.snippet.channelTitle}:&nbsp;&nbsp;{video.snippet.title}
        </h4>
        <p>{video.snippet.description}</p>
      </div>
    </>
  );
};

export default VideoDetail;
