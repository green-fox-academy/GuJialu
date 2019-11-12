import React, { useState } from 'react';

function EventRegistration(props) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  function handleFirstNameChange(evt) {
    setFirstName(evt.target.value);
    setIsSubmitted(false);
  }

  function handleLastNameChange(evt) {
    setLastName(evt.target.value);
    setIsSubmitted(false);
  }

  function handleEmailChange(evt) {
    setEmail(evt.target.value);
    setIsSubmitted(false);
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    setIsSubmitted(true);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          first name
          <input name='firstName' type='text' onChange={handleFirstNameChange}></input>
        </label>
        <br />
        <label>
          last name
          <input name='lastName' type='text' onChange={handleLastNameChange}></input>
        </label>
        <br />
        <label>
          email
          <input name='email' type='text' onChange={handleEmailChange}></input>
        </label>
        <br />
        <input type='submit'></input>
      </form>
      {isSubmitted &&
        <ul>
          <li>first name: {firstName}</li>
          <li>last name: {lastName}</li>
          <li>email: {email}</li>
        </ul>
      }
    </>
  );
}

export default EventRegistration;