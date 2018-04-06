import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Components.css';

class Details extends Component {
  render() {
    if (!this.props.film) {
      return (<div className="Container"></div>);
    }
    else {
      return (
        <div className="Container">
          <div className="Details">

            <div><h2>{this.props.film.title}</h2></div>
            <div className="FlexWrapper">
              <div>
                <img src={this.props.film.posterUrl} width="auto" height="300px" />
              </div>
              <div>
                <div><p>{this.props.film.plot}</p></div>
                <div className="Flex-details">
                  <p className="flex-block-1">Режисер:</p>
                  <p className="flex-block-2">{this.props.film.director}</p>
                </div>
                <div className="Flex-details">
                  <p className="flex-block-1">В ролях:</p>
                  <p className="flex-block-2">{this.props.film.actors}</p>
                </div>
                <div className="Flex-details">
                  <p className="flex-block-1">Жанр:</p>
                  <p className="flex-block-2">{this.props.film.genres.join(', ')}</p>
                </div>
                <div className="Flex-details">
                  <p className="flex-block-1">Год:</p>
                  <p className="flex-block-2">{this.props.film.year}</p>
                </div>
                <div className="Flex-details">
                  <p className="flex-block-1">Время:</p>
                  <p className="flex-block-2">{this.props.film.runtime}c.</p>
                </div>
              </div>
            </div>
            <div class="videoWrapper">
              <iframe width="560" height="349" src={this.props.film.video} frameborder="0" allowfullscreen>any video</iframe>
            </div>
          </div>
        </div>
      );
    }
  }
}

function mapStateToProps (state) {
  return {
    film: state.active
  }
}

export default connect(mapStateToProps)(Details);
