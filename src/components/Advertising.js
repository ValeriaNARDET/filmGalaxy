import React, { Component } from 'react';
// import { bindActionCreators } from 'redux';
// import { connect } from 'react-redux';
// import {BrouserRouter, Route, Link} from 'react-router-dom';
// import createBrowserHistory from 'history/createBrowserHistory'
// import { selectFilm } from '../actions/main.js';
import advantage from './advantage.png'
import './Components.css';

class Advertising extends Component {
	constructor (props) {
		super (props);
		this.state = {
			data: {
				header1: "Тут могла быть ваша реклама",
				header2: "... и тут тоже",
			}
		}
		this.go () 
	}
	go () {
		console.log(this.state.data.image)
	}
	render () {
		return ( 
			<div className="Advertising">
				<div className="advertising">
					<h3>{this.state.data.header1}</h3>
					<p>но что-то не срослось</p>
					<img src={advantage} width="95%" />
					<br />
					<span>не все потеряно</span>
				</div>
				<div className="advertising">
					<h3>{this.state.data.header2}</h3>
					<img src={advantage} width="95%" />
					<br />
					<span>только самые выгодные предложения</span>
				</div>
			</div>)
	}
}


export default Advertising;
