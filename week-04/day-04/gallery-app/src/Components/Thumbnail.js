import React, { useState, useEffect } from 'react';
import highlightImg from './caret-up-solid.svg';

function Thumbnail({imageSrc, highlighting, thumbnailClick}) {

  return (
    <>
      <img src={imageSrc} alt='image' onClick={thumbnailClick} height="42" width="42"/>
      {highlighting && <img src={highlightImg} alt='highlight' height="42" width="42"/>}
    </>
  );

}

export default Thumbnail;