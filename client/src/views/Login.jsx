import React, { useState, useEffect  } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate } from "react-router-dom";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { login } from "../slices/auth";
import { clearMessage } from "../slices/message";
import {TbBuildingWarehouse} from 'react-icons/tb'

const Login = (props) => {
    const [loading, setLoading] = useState(false);
    const { isLoggedIn } = useSelector((state) => state.auth);
    const { message } = useSelector((state) => state.message);
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(clearMessage());
    }, [dispatch]);
    const initialValues = {
      username: "",
      password: "",
    };
    const validationSchema = Yup.object().shape({
      username: Yup.string().required("This field is required!"),
      password: Yup.string().required("This field is required!"),
    });
    const handleLogin = (formValue) => {
      const { username, password } = formValue;
      setLoading(true);
      dispatch(login({ username, password }))
        .unwrap()
        .then(() => {
          props.history.push("/");
          window.location.reload();
        })
        .catch(() => {
          setLoading(false);
        });
    };
    if (isLoggedIn) {
      return <Navigate to="/" />;
    }
    return (
        <section className="bg-white">
          <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <a className="flex items-center mb-6 text-2xl font-semibold text-gray-900  ">
              <TbBuildingWarehouse className="w-8 h-8 mr-2 text-[30px] text-blue-600"/>
                StoreLytic
            </a>
            <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0  ">
              <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl  ">
                    Sign in to your account
                </h1>
                <Formik
                  initialValues={initialValues}
                  validationSchema={validationSchema}
                  onSubmit={handleLogin}
                >
                  <Form>
                    <div>
                      <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-900  ">
                        Username
                      </label>
                      <Field name="username" type="text" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5   dark:border-gray-600 dark:placeholder-gray-400   dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Username" required=""/>
                       <div className='m-2 p-2'>
                        <ErrorMessage
                          name="username"
                          component="div"
                          className="p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg     "
                        />
                       </div>
                    </div>
                    <div>
                      <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900  ">
                        Password
                      </label>
                      <Field name="password" type="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5   dark:border-gray-600 dark:placeholder-gray-400   dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                      <div className='m-2 p-2'>
                        <ErrorMessage
                          name="password"
                          component="div"
                          className="p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg"
                        />
                      </div>
                    </div>
                    <div>
                      <button type="submit" disabled={loading} className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                        {loading && (
                          <div>
                            <svg aria-hidden="true" role="status" className="inline mr-2 w-4 h-4 text-gray-200 animate-spin dark:text-gray-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                              <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="#1C64F2"/>
                            </svg>
                          </div>
                        )}
                        Sign In
                      </button>
                      <p className="text-sm font-light text-gray-500  ">
                        Don’t have an account yet? 
                        <Link to={'/register'} className="font-medium text-blue-600  hover:underline">
                          Sign up
                        </Link>
                      </p>
                    </div>
                  </Form>
                </Formik>
              </div>
              {message && (
                <div>
                  <div className="p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg " role="alert">
                    {message}
                  </div>
                </div>
              )}     
            </div>
        </div>
        </section>
    );
  };
  export default Login;