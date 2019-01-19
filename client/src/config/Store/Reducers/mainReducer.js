import {combineReducers} from 'redux';
import movies from './movieReducer';
import actors from './actorReducer';

export default combineReducers({
    movies,
    actors
  })