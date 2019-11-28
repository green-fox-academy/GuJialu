import React from 'react';
import './PInfo.css';

function PInfo({ children }) {

  return (
    <p className="PInfo">
      {children}
    </p>
  );

}

export default PInfo;