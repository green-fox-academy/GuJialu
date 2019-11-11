import React from 'react';
import { connect } from 'react-redux';
import { removeTag } from '../redux/actionCreators';

function RemoveTag({ removeTag }) {
  return (
    <>
      <h1>Remove Tag</h1>
      <form onSubmit={(evt) => { evt.preventDefault(); removeTag(evt.target[0].value); }}>
        <input type="text" />
        <input type="submit" value="Remove" />
      </form>
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
    removeTag: (val) => { dispatch(removeTag(val)) },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(RemoveTag);