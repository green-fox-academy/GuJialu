import React from 'react';
import highlightImg from './caret-up-solid.svg';
import './Thumbnail.css';

function Thumbnail({ imageSrc, highlighting, thumbnailClick }) {

  return (
    <div className="thumbnail">
      <img className="thumbnail-img" src={imageSrc} alt='thumbnail' onClick={thumbnailClick} />
      {highlighting && <img className="highlight" src={highlightImg} alt='highlight' />}
    </div>
  );

}

export default Thumbnail;
