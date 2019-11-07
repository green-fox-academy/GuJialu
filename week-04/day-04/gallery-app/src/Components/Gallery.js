import React, { useState, useEffect } from 'react';
import imagesData from '../Data/images';
import Thumbnail from './Thumbnail';
import arrow from './arrow.svg';
import './Gallery.css';

function Gallery() {

  const [images, setImages] = useState(imagesData);
  const [currImageIndex, setCurrImageIndex] = useState(0);

  function nextImg() {
    currImageIndex < images.length - 1 ? setCurrImageIndex(currImageIndex + 1) : setCurrImageIndex(0);
  }

  function prevImg() {
    currImageIndex > 0 ? setCurrImageIndex(currImageIndex - 1) : setCurrImageIndex(images.length - 1);
  }

  return (
    <>
      <main>
        <img className="arrow left-arrow" src={arrow} alt='arrow' onClick={prevImg} />
        {<img className="main-img" src={images[currImageIndex]} alt='gallery image' />}
        <img className="arrow right-arrow" src={arrow} alt='arrow' onClick={nextImg} />
      </main>
      <div className="thumbnails">
        {images.map((image, index) => <Thumbnail key={index} imageSrc={image} highlighting={index === currImageIndex} thumbnailClick={() => setCurrImageIndex(index)} />)}
      </div>
    </>
  );

}

export default Gallery;
