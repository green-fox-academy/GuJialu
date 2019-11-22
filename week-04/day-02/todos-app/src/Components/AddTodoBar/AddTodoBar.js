import React, { useState } from 'react';


function AddTodoBar(props) {
  const [title, setTitle] = useState('');

  function handleChange(evt) {
    setTitle(evt.target.value);
  }

  return (
    <>
      <form onSubmit={(evt) => { evt.preventDefault(); props.onAdd(title); }}>
        <input type='text' onChange={handleChange} />
        <input type='submit' value='Add' />
      </form>
    </>
  );

}

export default AddTodoBar;
