import { combineReducers } from 'redux';
import { example1, example2 } from './exampleReducers';

const rootReducer = combineReducers({
  example1,
  example2,
});

export default rootReducer;
