import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { selectGanre } from '../actions/ganre.js';
import './Components.css';

class Sidebar extends Component {
	constructor (props) {
		super (props);
		this.state = {
			menuItems: ["Comedy", "Fantasy", "Crime", "Drama", "Music", "Adventure", "History",
       "Thriller", "Animation", "Family", "Mystery", "Biography", "Action", "Film-Noir",
       "Romance", "Sci-Fi", "War", "Western", "Horror", "Musical", "Sport"]
		}
	}
	showGanre () {
		return this.state.menuItems.map((ganre, index) => {
			return (
				<li key={index} onClick={() => this.props.selectGanre (ganre)} >{ganre}</li>
			)
		})
	}
	render () {
	    return (
	    	<div className="sidebar">
	    		<ul>
	    			{this.showGanre()}
	    		</ul>
	    	</div>
	    )
	}
}  

function mapStateToProps (state) {
  return {
    menuItems: state.menuItems
  }
}

function matchDispatchToProps (dispatch) {
  return bindActionCreators({selectGanre: selectGanre}, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(Sidebar);
//* 			
//*{this.state.menuItems.map((item, index) => 
//*	const pathTo = '/' + item.toLowerCase().trim();
//*	return
//*	<li key={index}><Link to={pathTo}>{item}</Link></li>)}