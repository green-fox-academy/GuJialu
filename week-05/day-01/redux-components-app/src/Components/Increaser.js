import React from 'react';
import { connect } from 'react-redux';
import { increaseCounter, decreaseCounter, setCounter, resetCounter } from '../redux/actionCreators'


function Increaser({ count, increase }) {
  console.log(count);
  return (
    <>
      <h1>The Increaser</h1>
      <p>{count}</p>
      <button onClick={increase}>Increase</button>
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
    increase: () => { dispatch(increaseCounter()) },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Increaser);