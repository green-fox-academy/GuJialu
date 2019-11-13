import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { displayMessage } from '../redux/actionCreators';

function Messages(props) {
  const messages = useSelector((state) => state.messages)
  const dispatch = useDispatch();
  console.log(messages);
  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(displayMessage());
    }, 4000);
    return () => {
      clearInterval(interval);
    }
  }, []);

  return (
    <>
      <h1>Json Place Holder</h1>
      <ul>
        {messages.map((e, index) =>
          <li key={index} >
            <p>{e.text}</p><p>{e.user} {e.createdAt}</p>
          </li>
        )}
      </ul>
    </>
  );
}

export default Messages;