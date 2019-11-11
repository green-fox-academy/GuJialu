import React from 'react';
import { connect } from 'react-redux';
import { removeAllTags } from '../redux/actionCreators';

function RemoveAllTags({ removeAllTags }) {
  return (
    <>
      <h1>Remove All Tags</h1>
      <button onClick={removeAllTags}>remove all tags</button>
    </>
  );
}

function mapStateToProps(state) {
  return {
    tags: state.tagReducer.tags
  }
}

function mapDispatchToProps(dispatch) {
  return {
    removeAllTags: (val) => { dispatch(removeAllTags(val)) },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(RemoveAllTags);