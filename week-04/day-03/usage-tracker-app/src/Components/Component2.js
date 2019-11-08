import React, { useState, useEffect } from 'react';

function Component2(props) {

  let startTime;

  useEffect(() => {
    startTime = performance.now();
    console.log('useEffect in c2');
    return (() => {
      const time = performance.now() - startTime;
      props.fun('2', time);
      console.log('useEffect return in c2');
    });
  }, []);

  return (
    <p>Component2</p>
  );
}

export default Component2;