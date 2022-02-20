import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import youtube from "../apis/youtube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
import { Button, Icon } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import "./styles.css";

const App = () => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    handleTermSubmit("crypto");
    setDarkMode(false);
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
    <div className="ui container" style={{ marginTop: 10 }}>
      <div className={!darkMode ? "ui grid" : "ui grid dark"}>
        <div className="ui row">
          <div className="eleven wide column">
            <SearchBar onFormSubmit={handleTermSubmit} darkMode={darkMode} />
          </div>
          <div className="five wide column">
            <Button
              style={{ backgroundColor: "transparent" }}
              onClick={() => setDarkMode(!darkMode)}
            >
              <Icon
                className={!darkMode ? "icon" : "icon dark"}
                name={`${!darkMode ? "moon large" : "snowflake large"}`}
              />
            </Button>
          </div>
        </div>
      </div>
      <div className={!darkMode ? "ui grid" : "ui grid dark"}>
        <div className="ui row">
          <div
            className={
              !darkMode ? "eleven wide column" : "eleven wide column dark"
            }
          >
            <VideoDetail video={selectedVideo} darkMode={darkMode} />
          </div>
          <div
            className={!darkMode ? "five wide column" : "five wide column dark"}
          >
            <VideoList
              onVideoSelect={handleVideoSelect}
              videos={videos}
              darkMode={darkMode}
            />
          </div>
        </div>
      </div>
      <footer
        className={!darkMode ? "" : "footer-dark"}
        style={{
          backgroundColor: "#DDDEDE",
          position: "fixed",
          width: "100%",
          left: 0,
          bottom: 0,
          textAlign: "center",
        }}
      >
        &copy; ZrinCin, {new Date().getFullYear()}.
      </footer>
    </div>
  );
};

export default App;
