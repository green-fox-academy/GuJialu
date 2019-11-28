import React from 'react';

function InfoPanel(props) {

  return (
    <>
      <div>{props.header}</div>
      <div>{props.content}</div>
    </>
  );

}

export default InfoPanel;