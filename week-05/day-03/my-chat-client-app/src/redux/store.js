import { createStore, applyMiddleware } from 'redux';
import { messageReducer } from './reducers/messageReducer';
import thunk from 'redux-thunk';

export default createStore(
  messageReducer,
  applyMiddleware(thunk)
);