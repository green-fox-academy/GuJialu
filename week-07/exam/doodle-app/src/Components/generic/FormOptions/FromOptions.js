import React, { useState } from 'react';
import H1 from '../H1/H1';
import P from '../P/P';
import Span from '../Span/Span';

function FormOption({ heading, options, onSubmit }) {

  const [selected, setSelected] = useState({ id: null, value: null });

  function handleSelectedChange(evt) {
    console.log(evt.target);
    setSelected({ id: evt.target.value, value: evt.target.value });
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    const id = parseInt(selected.id, 10);
    console.log(selected.id);
    if (isNaN(id)) {
      return;
    }
    onSubmit(id);
  }


  const optionList = options.map((option, index) =>
    <div key={index}>
      <input
        type="radio"
        name="option"
        value={option.id}
        data-name={option.name}
        onChange={handleSelectedChange}
      >
      </input>
      <Span>{option.name}</Span>
    </div>
  )

  const message = selected.id ? selected.value : 'no option selected';

  return (
    <>
      {heading && <H1>{heading}</H1>}
      <form onSubmit={handleSubmit}>
        {optionList}
        <br />
        {selected.id && <input type="submit" />}
      </form>
      <P>{message}</P>
    </>
  );
}

export default FormOption;