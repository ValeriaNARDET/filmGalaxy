import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { selectFilm } from '../actions/main.js';
import './Components.css';

class FilmsList extends Component {
  // constructor (props) {
  //   super (props);
  //   this.showList = this.showList.bind(this)
  // }
  showList () {
    return this.props.films.map ((film) => {
      return (
        <li className="FilmNavigation" onClick={() => this.props.selectFilm (film)} 
        key={film.id}>
          <img src={film.posterUrl} width="auto" height="150px" />
        </li>

        )
    })
  }
  render() {
    return (
        <ul className="FilmWrap">
          {this.showList()}
        </ul>
    );
  }
}

function mapStateToProps (state) {
  return {
    films: state.films
  }
}

function matchDispatchToProps (dispatch) {
  return bindActionCreators({selectFilm: selectFilm}, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(FilmsList);
