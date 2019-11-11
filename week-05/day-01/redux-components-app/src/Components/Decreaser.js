import React from 'react';
import { connect } from 'react-redux';
import {increaseCounter, decreaseCounter, setCounter, resetCounter} from '../redux/actionCreators'


function Decreaser({count, decrease}) {
  console.log(count);
  return (
    <>
      <h1>The decreaser</h1>
      <p>{count}</p>
      <button onClick={decrease}>decrease</button>
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
    decrease: () => { dispatch(decreaseCounter()) },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Decreaser);