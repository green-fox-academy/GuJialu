import React from 'react';
import './P.css';

function P({ children }) {

  return (
    <p className="P">
      {children}
    </p>
  );

}

export default P;