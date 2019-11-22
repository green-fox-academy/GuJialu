import React from 'react';
import trash from './trash-solid.svg';

function TrashButton(props) {

  return (
    <>
      <input type="image" alt="trash" height="20px" width ="20px" src={trash} onClick={props.onClick} />
    </>
  );

}

export default TrashButton;
