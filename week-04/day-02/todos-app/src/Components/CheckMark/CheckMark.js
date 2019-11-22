import React from 'react';
import uncheckedCircle from './check-circle-regular.svg'
import checkedCircle from './check-circle-solid.svg'

function CheckMark(props) {

  return (
    <>
      <input type="image" alt="check mark" height="20px" width="20px" src={props.checked ? checkedCircle : uncheckedCircle} onClick={props.onClick} />
    </>
  );

}

export default CheckMark;
