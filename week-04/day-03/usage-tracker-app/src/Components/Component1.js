import React, { useState, useEffect } from 'react';

function Component1(props){
  let startTime;

  useEffect(()=>{
    startTime = performance.now();
    console.log('useEffect in c1');
    return(()=>{
      const time = performance.now()-startTime;
      props.fun('1', time);
      console.log('useEffect return in c1');
    });
  }, []);

  return(
    <p>Component1</p>
  );
}

export default Component1;