import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  username: Yup.string().required("Username is required"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

const formikForm = () => {
  const initialValues = {
    username: "",
    email: "",
    password: "",
  };

  const handleSubmit = (values, { resetForm }) => {
    console.log("Formik Submitted:", values);

    fetch("https://jsonplaceholder.typicode.com/users", {
      method: "POST",
      body: JSON.stringify(values),
      headers: { "Content-type": "application/json; charset=UTF-8" },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("API Response:", data);
        alert("User registered successfully with Formik!");
        resetForm();
      })
      .catch((err) => console.error("Error:", err));
  };

  return (
    <div className="p-4 rounded-xl w-80 mx-auto mt-10 shadow">
      <h2 className="text-xl font-bold mb-3">Formik Form</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {() => (
          <Form>
            <Field
              type="text"
              name="username"
              placeholder="Username"
              className="w-full mb-2 p-2 border rounded"
            />
            <ErrorMessage
              name="username"
              component="p"
              className="text-red-500 text-sm mb-2"
            />

            <Field
              type="email"
              name="email"
              placeholder="Email"
              className="w-full mb-2 p-2 border rounded"
            />
            <ErrorMessage
              name="email"
              component="p"
              className="text-red-500 text-sm mb-2"
            />

            <Field
              type="password"
              name="password"
              placeholder="Password"
              className="w-full mb-2 p-2 border rounded"
            />
            <ErrorMessage
              name="password"
              component="p"
              className="text-red-500 text-sm mb-2"
            />

            <button
              type="submit"
              className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600"
            >
              Register
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default formikForm;
