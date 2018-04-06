import {combineReducers} from 'redux';
import filmReducers from './Films.js';
import ActiveFilm from './FilmActive.js';
import ActiveGanre from './GanreActive.js';

const allReducers = combineReducers ({
  films: filmReducers,
  active: ActiveFilm,
  ganre: ActiveGanre
})

export default allReducers;

