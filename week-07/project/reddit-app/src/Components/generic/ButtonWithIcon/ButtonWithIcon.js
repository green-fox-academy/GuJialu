import React from 'react';
import './ButtonWithIcon.css';

function ButtonWithIcon({ text, icon, onClick }) {

  return (
    <button className="ButtonWithIcon" onClick={onClick}>
      {icon && <img src={icon} alt="icon" />}
      {text}
    </button>
  );

}

export default ButtonWithIcon;