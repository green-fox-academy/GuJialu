import { createStore, combineReducers } from 'redux';
import { counterReducer } from './reducers/CounterReducers';
import { tagReducer } from './reducers/TagReducer';

export default createStore(
  combineReducers({
    counterReducer: counterReducer,
    tagReducer: tagReducer
  })
);