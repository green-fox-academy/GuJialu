import React from 'react';
import './Bar.css';

function Bar({ length }) {

  console.log(length);

  const style = {
    width: `${length}%`
  };

  return (

    <div
      className="Bar"
      style={style}
    >
    </div>
  );
}

export default Bar;
