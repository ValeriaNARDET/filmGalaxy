import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { selectFilm } from '../actions/main.js';
import Sidebar from './Sidebar.js'
import Details from './details.js'
import Advertising from './Advertising.js'
import './Components.css';

class MainContent extends Component {
  render () {
    return (
      <div className="MainContent">
        <Sidebar />
        <Details />
        <Advertising />
      </div>
      )
  }
}


export default MainContent;
