import React from 'react';
import useForm from 'react-hook-form';

function FormLogin({OnLogin}) {

  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  }

  return (
    <>
      <h1>Login</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          Username
          <input type="text" name="firstName" ref={register({ required: true })}></input>
          {errors.firstName && <span>First Name is required</span>}
        </label>
        <br />
        <input type="submit" />
      </form>

    </>
  );
}

export default FormLogin;