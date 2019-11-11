import React from 'react';
import { connect } from 'react-redux';
import { setCounter } from '../redux/actionCreators'


function Setter({ count, set }) {
  return (
    <>
      <h1>The Setter</h1>
      <p>{count}</p>
      <form onSubmit={(evt) => { evt.preventDefault(); set(evt.target[0].value); }}>
        <input type="text" />
        <input type="submit" value="set" />
      </form>
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
    set: (val) => { dispatch(setCounter(val)) },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Setter);