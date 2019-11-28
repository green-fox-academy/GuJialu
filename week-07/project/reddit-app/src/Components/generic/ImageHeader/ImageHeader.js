import React from 'react';

function ImageHeader({name, background}) {

  return (
    <>
      <img src={background} alt="header" />
      <h1>{name}</h1>
    </>
  );

}

export default ImageHeader;