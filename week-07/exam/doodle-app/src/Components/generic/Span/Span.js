import React from 'react';
import './Span.css';

function Span({ children }) {

  return (
    <span className="PLight">
      {children}
    </span>
  );

}

export default Span;