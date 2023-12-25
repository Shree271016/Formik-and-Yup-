// import "./App.css";

import { useFormik, Formik, Form } from "formik";
import React from "react";
import { SignupValidation } from "./validation/SignupValidation";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import { Link } from "react-router-dom";

const initialValues = {
  name: "",
  email: "",
  password: "",
  cpassword: "",
};

function SignUp() {
  const { values, handleBlur, handleChange, handleSubmit, errors } = useFormik({
    initialValues: initialValues,
    validationSchema: SignupValidation,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <div className="App">
      <Formik>
        <Form onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <br />
          <input
            type="text"
            value={values.name}
            name="name"
            onBlur={handleBlur}
            onChange={handleChange}
          />
          <br />
          {errors.name && <small>{errors.name}</small>}
          <br />
          <label htmlFor="email">Email:</label>
          <br />
          <input
            type="email"
            name="email"
            value={values.email}
            onBlur={handleBlur}
            onChange={handleChange}
          />
          <br />
          {errors.email && <small>{errors.email}</small>}

          <br />
          <label htmlFor="password">Password:</label>
          <br />
          <input
            type="password"
            name="password"
            value={values.password}
            onBlur={handleBlur}
            onChange={handleChange}
          />
          <br />
          {errors.password && <small>{errors.password}</small>}

          <br />
          <label htmlFor="cpassword">Conform Password:</label>
          <br />
          <input
            type="password"
            name="cpassword"
            value={values.cpassword}
            onBlur={handleBlur}
            onChange={handleChange}
          />
          <br />
          {errors.cpassword && <small>{errors.cpassword}</small>}
          <br />
          <br />
            <button type="submit">Sign up</button>

          
        </Form>
      </Formik>
    </div>
  );
}

export default SignUp;
