import React from 'react';
import { connect } from 'react-redux';

function ComplexCounter({ tags, count }) {
  return (
    <>
      <h1>Complex Counter</h1>
      <p>{count + tags.length}</p>
    </>
  );
}

function mapStateToProps(state) {
  return {
    tags: state.tagReducer.tags,
    count: state.counterReducer.count
  }
}

export default connect(mapStateToProps)(ComplexCounter);