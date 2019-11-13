import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getJson } from '../redux/actionCreators';

function JsonPlaceHolder(props) {
  const elements = useSelector((state) => state.elements);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(elements);
    dispatch(getJson());
  }, [])

  return (
    <>
      <h1>Json Place Holder</h1>
      <ul>
        {elements.map((e, index) =>
          <li key={index} >
            <h2>{e.name}</h2><p>{e.body}</p>
          </li>
        )}
      </ul>
    </>
  );
}

export default JsonPlaceHolder;