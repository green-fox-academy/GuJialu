import React from 'react';
import { useDispatch } from 'react-redux';
import { displayMessage } from '../redux/actionCreators';
import useForm from 'react-hook-form';

function MessageSendPanel(props) {

  const dispatch = useDispatch();
  const { register, handleSubmit, errors } = useForm();

  function onSubmit(data) {
    const init = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ user: 'Jialu', text: data.message })
    };
    fetch('https://stream-vanadium.glitch.me/messages', init);
    dispatch(displayMessage());
  }

  return (
    <>
      <h1>New Message</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" name="message" ref={register({ required: true })}></input>
        {errors.message && <span>Message is required</span>}
        <input type="submit"></input>
      </form>
    </>
  );
}

export default MessageSendPanel;