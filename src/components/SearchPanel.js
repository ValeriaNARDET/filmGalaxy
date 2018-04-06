import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {BrouserRouter, Route, Link} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory'
import { selectFilm } from '../actions/main.js';
import './Components.css';


class Search extends Component {
  constructor (props) {
    super (props);
    this.research = this.research.bind(this)
    this.handlerSelect = this.handlerSelect.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
    this.state = {
      selectValue: "Comedy",
      genres: ["Comedy", "Fantasy", "Crime", "Drama", "Music", "Adventure", "History",
       "Thriller", "Animation", "Family", "Mystery", "Biography", "Action", "Film-Noir",
       "Romance", "Sci-Fi", "War", "Western", "Horror", "Musical", "Sport"]
    }
  }

  research(event) {
    this.setState({selectValue: (event.target.value).charAt(0).toUpperCase() + 
                                (event.target.value).substr(1).toLowerCase()})
  }

  handlerSelect(event) {
    this.setState({selectValue: event.target.value})
  }

  onSubmit(event) {
    // alert(`Вы выбрали: ${this.state.selectValue}`);
    event.preventDefault();
  }

  render() {
    return (
      <div className="Wrapper">
        <div className="Searching">
          <form onSubmit={this.onSubmit} className="Flex-form">
          <input type='text' placeholder='search' onChange={this.research} />

          <select id="movie" value={this.state.selectValue} onChange={this.handlerSelect}>
            {this.state.genres.map((item, index) =>
              <option value={item} key={index}>{item}</option>
              )
            }
          </select>
          <input type="submit" value="OK" onSubmit={this.onSubmit} />
          </form>
        </div>
      </div>
    );
  }
}

export default Search;