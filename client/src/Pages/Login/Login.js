import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import { login } from '../../slices/auth';
import { clearMessage } from '../../slices/message';

const Login = (props) => {
  const [loading, setLoading] = useState(false);

  const { isLoggedIn } = useSelector((state) => state.auth);
  const { message } = useSelector((state) => state.message);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(clearMessage());
  }, [dispatch]);

  const initialValues = {
    username: '',
    password: '',
  };

  const validationSchema = Yup.object().shape({
    username: Yup.string().required('This field is required!'),
    password: Yup.string().required('This field is required!'),
  });

  const handleLogin = (formValue) => {
    const { username, password } = formValue;
    setLoading(true);

    dispatch(login({ username, password }))
      .unwrap()
      .then(() => {
        props.history.push('/profile');
        window.location.reload();
      })
      .catch(() => {
        setLoading(false);
      });
  };

  if (isLoggedIn) {
    return <Redirect to="/profile" />;
  }

  return (
    <div>
      <header className="max-w-lg mx-auto">
        <a href="#">
          <h1 className="text-4xl font-bold text-white text-center">Startup</h1>
        </a>
      </header>

      <main className="bg-white max-w-lg mx-auto p-8 md:p-12 my-10 rounded-lg shadow-2xl">
        <section>
          <h3 className="font-bold text-2xl">Welcome to Storelytic</h3>
          <p className="text-gray-600 pt-2">Sign in to your account.</p>
        </section>

        <section className="mt-10">
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleLogin}
          >
            <Form className="flex flex-col">
              <div className="form-group mb-6 pt-3 rounded bg-gray-200">
                <label
                  htmlFor="username"
                  className="block text-gray-700 text-sm font-bold mb-2 ml-3"
                >
                  Username
                </label>
                <Field
                  name="username"
                  type="text"
                  className="form-control bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-blue-600 transition duration-500 px-3 pb-3"
                />
                <ErrorMessage
                  name="username"
                  component="div"
                  className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 m-2"
                  role="alert"
                />
              </div>

              <div className="form-group mb-6 pt-3 rounded bg-gray-200">
                <label
                  htmlFor="password"
                  className="block text-gray-700 text-sm font-bold mb-2 ml-3"
                >
                  Password
                </label>
                <Field
                  name="password"
                  type="password"
                  className="form-control bg-gray-200 rounded w-full text-gray-700 focus:outline-none border-b-4 border-gray-300 focus:border-blue-600 transition duration-500 px-3 pb-3"
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 m-2"
                  role="alert"
                />
              </div>

              <div className="form-group flex justify-end">
                <button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 rounded shadow-lg hover:shadow-xl transition duration-200"
                  type="submit"
                  disabled={loading}
                >
                  {loading && (
                    <span className="spinner-border spinner-border-sm"></span>
                  )}
                  <span>Login</span>
                </button>
              </div>
            </Form>
          </Formik>
        </section>
      </main>

      {message && (
        <div className="form-group mt-10  max-w-lg mx-auto p-8 md:p-12 my-10">
          <div
            className="flex items-center bg-blue-500 text-white text-sm font-bold px-4 py-3"
            role="alert"
          >
            {message}
          </div>
        </div>
      )}

      <footer className="max-w-lg mx-auto flex justify-center text-grey">
        <a href="#" className="hover:underline">
          Contact
        </a>
        <span className="mx-3">•</span>
        <a href="#" className="hover:underline">
          Privacy
        </a>
      </footer>
    </div>
  );
};

export default Login;
