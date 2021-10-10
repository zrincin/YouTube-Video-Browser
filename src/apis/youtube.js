import axios from "axios";

const { API_KEY } = require("../secrets.json");

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 15,
    key: API_KEY,
  },
});
