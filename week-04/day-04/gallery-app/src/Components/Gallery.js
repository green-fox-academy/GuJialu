import React, { useState, useEffect } from 'react';
import imagesData from '../Data/images';
import Thumbnail from './Thumbnail';
import arrow from './arrow.svg';

function Gallery() {

  const [images, setImages] = useState(imagesData);
  const [currImageIndex, setCurrImageIndex] = useState(0);

  function nextImg() {
    currImageIndex < images.length-1 ? setCurrImageIndex(currImageIndex+1)  : setCurrImageIndex(0);
  }

  function prevImg() {
    currImageIndex > 0 ? setCurrImageIndex(currImageIndex-1) : setCurrImageIndex(images.length-1);
  }

  return (
    <>
      <img src={arrow} alt='arrow' height='800' width = '40' onClick={prevImg}/>
      {<img src={images[currImageIndex]} alt='gallery image' height="600" width="800"/>}
      <img src={arrow} alt='arrow' height='800' width = '40' onClick={nextImg}/>
      {images.map((image, index) => <Thumbnail key={index} imageSrc={image} highlighting={index === currImageIndex} thumbnailClick={()=>setCurrImageIndex(index)}/>)}
    </>
  );

}

export default Gallery;