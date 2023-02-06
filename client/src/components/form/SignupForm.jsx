import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

import { register } from '../../store/slices/auth.slices'
import { clearMessage } from '../../store/slices/message.slices'

const SignupForm = () => {

    const [successful, setSuccessful] = useState(false);

    const { message } = useSelector((state) => state.message);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(clearMessage());
    }, [dispatch]);

    const initialValues = {
        username: "",
        email: "",
        password: "",
    };

    const validationSchema = Yup.object().shape({
        username: Yup.string()
            .test(
                "len",
                "The username must be between 3 and 20 characters.",
                (val) =>
                    val && val.toString().length >= 3 && val.toString().length <= 20
            )
            .required("This field is required!"),
        email: Yup.string()
            .email("This is not a valid email.")
            .required("This field is required!"),
        password: Yup.string()
            .test(
                "len",
                "The password must be between 6 and 40 characters.",
                (val) =>
                    val && val.toString().length >= 6 && val.toString().length <= 40
            )
            .required("This field is required!"),
    });

    const handleRegister = (formValue) => {
        const { username, email, password } = formValue;

        setSuccessful(false);

        dispatch(register({ username, email, password }))
            .unwrap()
            .then(() => {
                setSuccessful(true);
            })
            .catch(() => {
                setSuccessful(false);
            });
    };

    return (
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">

            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Sign up to your account
            </h1>

            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleRegister}
            >
                <Form>
                    {!successful && (
                        <>
                            <div>
                                <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                    Username
                                </label>
                                <Field
                                    name="username"
                                    type="text"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="name@company.com"
                                    required="" />
                                <div className='m-2 p-2'>
                                    <ErrorMessage
                                        name="username"
                                        component="div"
                                        className="p-4 mb-4 text-sm text-red-100 bg-red-700 rounded-lg     " />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                    E-Mail
                                </label>
                                <Field name="email" type="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="storelytic@storelytic.org" required="" />
                                <div className='m-2 p-2'>
                                    <ErrorMessage
                                        name="email"
                                        component="div"
                                        className="p-4 mb-4 text-sm text-red-100 bg-red-700 rounded-lg     " />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                    Password
                                </label>
                                <Field name="password" type="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                                <div className='m-2 p-2'>
                                    <ErrorMessage
                                        name="password"
                                        component="div"
                                        className="p-4 mb-4 text-sm text-red-100 bg-red-700 rounded-lg     " />
                                </div>
                            </div>
                            <div>
                                <button type="submit" className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center      ">
                                    Sign Up
                                </button>
                                <p className="text-sm font-light text-gray-500  ">
                                    Have an account ?
                                    <Link to={'/'} className="font-medium text-blue-600  hover:underline">
                                        Sign in
                                    </Link>
                                </p>
                            </div>
                        </>
                    )}
                </Form>
            </Formik>

            {message && (
                <div>
                    <div className={successful ? "m-2 p-4 mb-4 text-sm text-green-700 bg-green-100 rounded-lg " : "p-4 mb-4 text-sm text-red-100 bg-red-700 rounded-lg"} role="alert">
                        {message}
                    </div>

                    <div className="m-2 p-2 w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">
                        <Link to={'/'}>
                            Sign In
                        </Link>
                    </div>

                </div>
            )}

        </div>
    )
}

export default SignupForm