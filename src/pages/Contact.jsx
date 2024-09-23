import React, { useState } from 'react'
import Images from '../assets/Images'
import { useNavigate } from 'react-router'
import { Formik, Form, Field, ErrorMessage } from "formik"
import * as Yup from "yup";

const Contact = () => {

    const nameValidation = Yup.string()
        .min(3, "Name must be at least 3 characters")
        .required("Enter Your Full Name");


    const emailValidation = Yup.string()
        .email("Invalid email")
        .matches(
            /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
            "Email must end with a valid domain extension"
        )
        .required("Email is required");

    const messageValidation = Yup.string()
        .required("This field is required");

    const ValidationSchema = Yup.object({
        email: emailValidation,
        fullName: nameValidation,
        message: messageValidation,
    });

    const handleSubmit = (values) => {
        console.log(values);
        navigate("/");
    };
    return (

        <section>
        
            <div className="flex items-center justify-center min-h-screen bg-gray-100">
  <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
    <Formik
      initialValues={{ email: "", fullName: "", message: "" }}
      validationSchema={ValidationSchema}
      onSubmit={handleSubmit}
    >
      <Form className="space-y-6">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            Get in touch
          </h1>
          <p className="text-gray-600 mb-6">
            Let's talk about your new project
          </p>
        </div>

        <div className="space-y-4">
          <div>
            <label
              htmlFor="fullName"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Full Name
            </label>
            <Field
              type="text"
              id="fullName"
              name="fullName"
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
            <ErrorMessage
              name="fullName"
              component="div"
              className="mt-1 text-sm text-red-600"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Email
            </label>
            <Field
              type="email"
              id="email"
              name="email"
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
            <ErrorMessage
              name="email"
              component="div"
              className="mt-1 text-sm text-red-600"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Message
            </label>
            <Field
              as="textarea"
              id="message"
              name="message"
              rows="4"
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
            <ErrorMessage
              name="message"
              component="div"
              className="mt-1 text-sm text-red-600"
            />
          </div>
        </div>

        <div>
          <button
          
            type="submit"
            className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Send Message
          </button>
        </div>
      </Form>
    </Formik>
  </div>
</div>
        </section>
    )
}

export default Contact


