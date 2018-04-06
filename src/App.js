import React, { Component } from 'react';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
// import {BrouserRouter, Route, Link} from 'react-router-dom';
// import createBrowserHistory from 'history/createBrowserHistory'
import allReducers from './reducers/main.js';
import FilmSet from './components/FilmComponent.js';
import Search from './components/SearchPanel.js';
import './App.css';
import logo from './logo.svg';
import star from './star.png';

// const history = createBrowserHistory();

const store = createStore (allReducers);

//const data = [] // получаем JSON

class App extends Component {
  
  render() {
    return (
        <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <div>
            <img className="App-logo" src={star} />
            <img className="App-logo" src={star} />
            <img className="App-logo" src={star} />
          </div>
          <h1 className="App-title">Films Galaxy</h1>
        </header>

          <Search />
          <FilmSet />        
          <footer>
          </footer>
      </div>
        </Provider>

    );
  }
}

export default App;

