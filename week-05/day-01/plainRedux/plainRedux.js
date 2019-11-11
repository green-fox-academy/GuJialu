/* eslint-disable no-unused-vars */
'use strict'

const redux = require('redux');

const initState = {
  counter: 0,
  tags: []
}

function reducer(state = initState, action) {
  switch (action.type) {
    case 'INCREASE':
      return {
        ...state,
        counter: action.amount == undefined ? state.counter + 1 : state.counter + action.amount
      };
    case 'DECREASE':
      return {
        ...state,
        counter: action.amount == undefined ? state.counter - 1 : state.counter - action.amount
      };
    case 'SET':
      return {
        ...state,
        counter: action.amount
      };
    case 'RESET':
      return {
        ...state,
        counter: 0
      };
    case 'ADD_TAG':
      return {
        ...state,
        tags: [...state.tags, action.tag]
      };
    case 'REMOVE_TAG':
      return {
        ...state,
        tags: state.tags.filter((tag) => tag !== action.tag)
      };
    case 'REMOVE_TAGS':
      return {
        ...state,
        tags: []
      };
    default:
      return state;
  }
}

const store = redux.createStore(reducer);
store.subscribe(() => console.log(store.getState()));

store.dispatch({ type: 'SET', amount: 6 });
store.dispatch({ type: 'INCREASE' });
store.dispatch({ type: 'INCREASE', amount: 2 });
store.dispatch({ type: 'RESET' });
store.dispatch({ type: 'INCREASE' });
store.dispatch({ type: 'DECREASE', amount: 4 });

store.dispatch({type: 'ADD_TAG', tag: 'blue'});
store.dispatch({type: 'ADD_TAG', tag: 'bold'});
store.dispatch({type: 'ADD_TAG', tag: 'hipster'});
store.dispatch({type: 'REMOVE_TAG', tag: 'blue'});
store.dispatch({type: 'ADD_TAG', tag: 'bold'});
store.dispatch({type: 'REMOVE_TAGS'});