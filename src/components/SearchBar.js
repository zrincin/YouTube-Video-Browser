import React, { useState } from "react";
import "./SearchBar.css";

const SearchBar = ({ onFormSubmit }) => {
  const [term, setTerm] = useState("");

  const handleInputChange = (e) => {
    setTerm(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    onFormSubmit(term);
  };

  return (
    <div className="search-bar ui segment secondary">
      <form onSubmit={handleFormSubmit} className="ui form">
        <div className="field">
          <label>
            <h2>YouTube Video Browser</h2>
          </label>
          <div className="ui icon input">
            <input
              type="text"
              placeholder="Enter your search here..."
              value={term}
              onChange={handleInputChange}
            />
            <i class="circular search icon"></i>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
