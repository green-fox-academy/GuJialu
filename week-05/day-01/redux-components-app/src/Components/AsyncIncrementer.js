import React from 'react';
import { connect } from 'react-redux';
import { asyncIncrease } from '../redux/actionCreators'


function AsyncIncrementer({ count, asyncIncrease }) {
  const amountInput = React.createRef();
  const delayInput = React.createRef();
  return (
    <>
      <h1>The Async Incrementer</h1>
      <p>{count}</p>
      <label>Amount</label>
      <input type="number" ref={amountInput}></input>
      <label>Delay</label>
      <input type="number" ref={delayInput}></input>
      <button onClick={()=>asyncIncrease(parseInt(amountInput.current.value, 10), delayInput.current.value)}>Increase</button>
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
    asyncIncrease: (amount, delay) => dispatch(asyncIncrease(amount, delay)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AsyncIncrementer);