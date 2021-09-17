import React, {Component} from 'react';
import './SearchBar.css';

class SearchBar extends Component {
  state = { term: '' };

  onInputChange = event => {
    this.setState({ term: event.target.value });
  };

  onFormSubmit = event => {
    event.preventDefault();

    this.props.onFormSubmit(this.state.term);
  };

  render() {
    return (
      <div className="search-bar ui segment secondary">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label><h2>YouTube Video Browser</h2></label>
            <div className="ui icon input">
            <input
              type="text"
              placeholder="Enter your search here..."
              value={this.state.term}
              onChange={this.onInputChange}
            />
            <i class="circular search icon"></i>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
