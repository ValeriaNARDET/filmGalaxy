
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {createStore} from 'redux';
import {combineReducers} from 'redux';
import filmReducers from './Films.js';

const allReducers = combineReducers ({
  films: filmReducers,
})

const store = createStore (allReducers);

class FilmSet extends Component {
  render() {
    return (
      <div className="Films">
        <header className="Films-header">
          <h2 className="Films-title">hello</h2>
        </header>
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">это оно точно</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

          <FilmSet></FilmSet>

      </div>
    );
  }
}

export default App;
