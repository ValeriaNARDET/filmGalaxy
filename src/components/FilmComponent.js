import React, { Component } from 'react';
import FilmsList from './FilmsList.js';
// import Details from './details.js';
import MainContent from './MyRouting.js';
import './Components.css';

class FilmSet extends Component {
  render() {
    return (
      <div className="Films">
        <FilmsList />
        <MainContent />
      </div>
    );
  }
}

export default FilmSet;
