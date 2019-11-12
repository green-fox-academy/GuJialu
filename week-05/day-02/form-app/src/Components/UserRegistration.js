import React from 'react';
import { Formik } from 'formik';

function UserRegistration() {
  return (
    <>
      <h1>User Registration</h1>
      <Formik
        initialValues={{ username: '', emailAdress: '', password: '' }}
        validate={(values) => {
          let errors = {};
          if (!values.username) {
            errors.username = 'Name is required';
          }
          if (!/[^ ]+@[^ ]+/.test(values.emailAdress)) {
            errors.emailAdress = 'emailAdress is invalid';
          }
          if (values.password.length < 8) {
            errors.password = 'Password must be at least 8 characters';
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          console.log(values);
          setTimeout(() => {
            setSubmitting(false);
            console.log('dasfds');
          }, 2000);
        }}
      >
        {({ handleSubmit, handleChange, values, errors, isSubmitting }) => (
          <form onSubmit={handleSubmit}>
            <label>
              username
              <input onChange={handleChange}
                value={values.username}
                name="username"
                type="text">
              </input>
              {errors.username && <span>{errors.username}</span>}
            </label>
            <br />
            <label>
              emailAdress
              <input onChange={handleChange}
                value={values.emailAdress}
                name="emailAdress"
                type="text">
              </input>
              {errors.emailAdress && <span>{errors.emailAdress}</span>}
            </label>
            <br />
            <label>
              password
              <input onChange={handleChange}
                value={values.password}
                name="password"
                type="password">
              </input>
              {errors.password && <span>{errors.password}</span>}
            </label>
            <br />
            <button type="submit" disabled={isSubmitting}>Submit</button>
          </form>
        )}
      </Formik>
    </>
  );
}

export default UserRegistration;