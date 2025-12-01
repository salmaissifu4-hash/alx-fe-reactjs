// src/components/FormikForm.js
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const FormikForm = () => {
  const initialValues = {
    username: "",
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    username: Yup.string().required("Username is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  const onSubmit = (values) => {
    console.log("Form submitted:", values);
    // Simulate API call
    alert("Registration successful!");
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <Form className="registration-form">
        <div>
          <label>Username:</label>
          <Field type="text" name="username" />
          <ErrorMessage name="username" component="span" className="error" />
        </div>
        <div>
          <label>Email:</label>
          <Field type="email" name="email" />
          <ErrorMessage name="email" component="span" className="error" />
        </div>
        <div>
          <label>Password:</label>
          <Field type="password" name="password" />
          <ErrorMessage name="password" component="span" className="error" />
        </div>
        <button type="submit">Register</button>
      </Form>
    </Formik>
  );
};

export default FormikForm;
