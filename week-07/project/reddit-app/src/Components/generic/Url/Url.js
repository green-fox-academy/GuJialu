import React from 'react';
import './Url.css';

function Url({ url, text }) {

  let a;
  if (text) {
    a = <a href={url}>{text}</a>
  } else {
    a = <a href={url}>({url})</a>
  }

  return (
    <>
      {a}
    </>
  );

}

export default Url;