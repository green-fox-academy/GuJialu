import React from 'react';
import { connect } from 'react-redux';
import {increaseCounter, decreaseCounter, setCounter, resetCounter} from '../redux/actionCreators'


function Resetter({count, reset}) {
  console.log(count);
  return (
    <>
      <h1>The Resetter</h1>
      <p>{count}</p>
      <button onClick={reset}>Reset</button>
    </>
  );
}

function mapStateToProps(state) {
  return {
    count: state.counterReducer.count
  }
}

function mapDispatchToProps(dispatch) {
  return {
    reset: () => { dispatch(resetCounter()) },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Resetter);