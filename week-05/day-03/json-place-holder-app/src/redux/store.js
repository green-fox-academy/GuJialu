import { createStore, applyMiddleware } from 'redux';
import { jsonReducer } from './reducers/josnReducer';
import thunk from 'redux-thunk';

export default createStore(
  jsonReducer,
  applyMiddleware(thunk)
);