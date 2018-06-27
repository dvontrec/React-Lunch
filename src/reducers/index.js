import { combineReducers } from 'redux';
import LunchReducer from './reducerLunch';

const rootReducer = combineReducers({
  locations: LunchReducer
});

export default rootReducer;