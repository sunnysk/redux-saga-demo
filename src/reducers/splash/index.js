import { combineReducers } from 'redux';

import loadingReducer from './imagesLoadingReducer';
import imagesReducer from './imagesSuccReducer';
import errorReducer from "./imagesErrorReducer";

const splashReducer = combineReducers({
  isLoading: loadingReducer,
  images: imagesReducer,
  error: errorReducer
});

export default splashReducer;
