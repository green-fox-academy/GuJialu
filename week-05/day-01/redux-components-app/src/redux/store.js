import { createStore, combineReducers, applyMiddleware } from 'redux';
import { counterReducer } from './reducers/CounterReducers';
import { tagReducer } from './reducers/TagReducer';
import thunk from 'redux-thunk';

export default createStore(
  combineReducers({
    counterReducer: counterReducer,
    tagReducer: tagReducer
  }),
  applyMiddleware(thunk)
);