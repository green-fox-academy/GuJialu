import React from 'react';
import { connect } from 'react-redux';
import { addTag } from '../redux/actionCreators';

function AddTag({ addTag }) {
  return (
    <>
      <h1>Add Tag</h1>
      <form onSubmit={(evt) => { evt.preventDefault(); addTag(evt.target[0].value); }}>
        <input type="text" />
        <input type="submit" value="add" />
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
    addTag: (val) => { dispatch(addTag(val)) },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AddTag);