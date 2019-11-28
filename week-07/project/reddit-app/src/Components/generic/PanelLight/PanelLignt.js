import React from 'react';
import './PanelLight.css';

function PanelLight({ children }) {

  return (
    <div className="PanelLight">
      {children}
    </div>
  );

}

export default PanelLight;