import axios from "axios";

const KEY = "AIzaSyAslOiEBhJSa1SHOzuYXFt-SFv0zgjFkHU";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 15,
    key: KEY,
  },
});
