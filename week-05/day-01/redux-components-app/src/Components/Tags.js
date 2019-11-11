import React from 'react';
import { connect } from 'react-redux';


function Tags({ tags }) {
  return (
    <>
      <h1>Tags</h1>
      <ul>
        {tags.map((tag, index) => <li key={index}>{tag}</li>)}
      </ul>
    </>
  );
}

function mapStateToProps(state) {
  return {
    tags: state.tagReducer.tags
  }
}

export default connect(mapStateToProps)(Tags);