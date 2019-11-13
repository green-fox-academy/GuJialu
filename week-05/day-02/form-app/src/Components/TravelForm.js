import React from 'react';
import useForm from 'react-hook-form';

function TravelForm() {

  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    const alertMessage = `
      First Name: ${data.firstName}\n
      Last Name: ${data.lastName}\n
      age: ${data.age}\n
      Gender: ${data.gender}\n
      Dietary restrictions: ${(Object.keys(data)).filter((x)=>data[x]===true)}
    `;
    alert(alertMessage);
  }
  //console.log(watch('Addition Comment'));   name="DietaryRestrictions" ref={register}

  return (
    <>
      <h1>Travel Form</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          Location Traveling to
          <select name="location" ref={register}>
            <option value="Earth">Earth</option>
            <option value="Moon">Moon</option>
            <option value="Mars">Mars</option>
          </select>
        </label>
        <br />
        <label>
          Dietary restrictions
          <input type="checkbox" name="vegetarian" ref={register}></input>vegetarian
          <input type="checkbox" name="kosher" ref={register}></input>kosher
          <input type="checkbox" name="lactoseFree" ref={register}></input>lactose free
        </label>
        <br />
        <label>
          Gender<br />
          <input type="radio" name="gender" value="female" defaultChecked ref={register}></input>female
          <input type="radio" name="gender" value="male" ref={register}></input>male
          <input type="radio" name="gender" value="other" ref={register}></input>other
        </label>
        <br />
        <label>
          First Name
          <input type="text" name="firstName" ref={register({ required: true })}></input>
          {errors.firstName && <span>First Name is required</span>}
        </label>
        <br />
        <label>
          Last Name
          <input type="text" name="lastName" ref={register({ required: true })}></input>
          {errors.lastName && <span>Last Name is required</span>}
        </label>
        <br />
        <label>
          Age
          <input type="number" name="age" ref={register({ required: true })}></input>
          {errors.age && <span>Age is required</span>}
        </label>
        <br />
        <input type="submit" />

      </form>

    </>
  );
}

export default TravelForm;