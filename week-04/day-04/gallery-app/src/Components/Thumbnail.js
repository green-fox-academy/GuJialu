import React, { useState, useEffect } from 'react';
import highlightImg from './caret-up-solid.svg';
import './Thumbnail.css';

function Thumbnail({ imageSrc, highlighting, thumbnailClick }) {

  return (
    <div className="thumb-nail">
      <img className="thumb-nail-img" src={imageSrc} alt='image' onClick={thumbnailClick} />
      {highlighting && <img className="highlight" src={highlightImg} alt='highlight' />}
    </div>
  );

}

export default Thumbnail;
