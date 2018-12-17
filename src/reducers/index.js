import { combineReducers } from 'redux';

import splashReducer from './splash';

const rootReducer = combineReducers({
  splash: splashReducer
});

export default rootReducer;
