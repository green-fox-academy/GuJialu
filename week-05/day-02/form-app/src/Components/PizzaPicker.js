import React from 'react';
import useForm from 'react-hook-form';

function PizzaPicker() {

  const { register, handleSubmit, errors } = useForm()
  const onSubmit = (data) => { console.log(data) }
  //console.log(watch('Addition Comment'));

  return (
    <>
    <h1>Pizza Picker</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          Base
          <select name="base" ref={register}>
            <option value="6Inch">6 inch</option>
            <option value="8Inch">8 inch</option>
            <option value="12Inch">12 inch</option>
          </select>
        </label>
        <br />
        <label>
          Topping
          <input type="checkbox" name="cheese" ref={register}></input>Cheese
          <input type="checkbox" name="onion" ref={register}></input>Onion
          <input type="checkbox" name="tomato" ref={register}></input>Tomato
        </label>
        <br />
        <label>
          Whether it should be cut or not<br />
          <input type="radio" name="cut" value="cut" ref={register}></input>Cut
          <input type="radio" name="cut" value="dontCut" ref={register}></input>Don't cut
        </label>
        <br />
        <label>
          Addition Comment
          <input type="text" name="AdditionComment" ref={register({ required: true, maxLength: 8 })}></input>
          {errors.AdditionComment && errors.AdditionComment.type==="required" && <span>Comment is required</span>}
          {errors.AdditionComment && errors.AdditionComment.type==="maxLength" && <span>Comment exceeds max length</span>}
        </label>
        <br />
        <input type="submit" />

      </form>

    </>
  );
}

export default PizzaPicker;