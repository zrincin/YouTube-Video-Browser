import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import youtube from "../apis/youtube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

const App = () => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  useEffect(() => {
    handleTermSubmit("crypto");
  }, []);

  const handleTermSubmit = async (term) => {
    const response = await youtube.get("/search", {
      params: {
        q: term,
      },
    });

    setVideos(response.data.items);
    let random = Math.floor(Math.random() * 10);
    setSelectedVideo(response.data.items[random]);
  };

  const handleVideoSelect = (video) => {
    setSelectedVideo(video);
  };

  return (
    <div className="ui container">
      <SearchBar onFormSubmit={handleTermSubmit} />
      <div className="ui grid">
        <div className="ui row">
          <div className="eleven wide column">
            <VideoDetail video={selectedVideo} />
          </div>
          <div className="five wide column">
            <VideoList onVideoSelect={handleVideoSelect} videos={videos} />
          </div>
        </div>
      </div>
      <footer
        style={{
          backgroundColor: "#DDDEDE",
          position: "fixed",
          width: "100%",
          left: 0,
          bottom: 0,
          textAlign: "center",
        }}
      >
        &copy; ZrinCin, 2021.
      </footer>
    </div>
  );
};

export default App;
