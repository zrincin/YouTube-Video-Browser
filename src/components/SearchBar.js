import React, { useState } from "react";
import "./styles.css";

const SearchBar = ({ onFormSubmit, darkMode }) => {
  const [term, setTerm] = useState("");

  const handleInputChange = (e) => {
    setTerm(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    onFormSubmit(term);
  };

  return (
    <div
      className={
        !darkMode
          ? "search-bar ui segment secondary"
          : "search-bar ui segment secondary dark"
      }
    >
      <form onSubmit={handleFormSubmit} className="ui form">
        <div className="field">
          <label>
            <h2 className={!darkMode ? "" : "dark"}>YouTube Video Browser</h2>
          </label>
          <div className="ui icon input">
            <input
              type="text"
              placeholder="Enter your search here..."
              value={term}
              onChange={handleInputChange}
            />
            <i
              className={
                !darkMode ? "circular search icon" : "circular search icon dark"
              }
            ></i>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
