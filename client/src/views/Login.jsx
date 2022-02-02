import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

import { login } from "../slices/auth";
import { clearMessage } from "../slices/message";

export default Login = (props) => {

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
                props.history.push("/profile");
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
        <>
            <div className="flex flex-col items-center justify-center w-screen h-screen bg-gray-200 text-gray-700">

                <h1 className="font-bold text-2xl">StoreLytic</h1>
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={handleLogin}
                >
                    <Form className="flex flex-col bg-white rounded shadow-lg p-12 mt-12" action="">
                        <label className="font-semibold text-xs" for="usernameField">Email</label>
                        <Field className="flex items-center h-12 px-4 w-64 bg-gray-200 mt-2 rounded focus:outline-none focus:ring-2" type="text" />
                        <ErrorMessage
                            name="username"
                            component="div"
                            className="alert alert-danger"
                        />
                        <label className="font-semibold text-xs mt-3" for="passwordField">Password</label>
                        <Field className="flex items-center h-12 px-4 w-64 bg-gray-200 mt-2 rounded focus:outline-none focus:ring-2" type="password" />
                        <ErrorMessage
                            name="password"
                            component="div"
                            className="alert alert-danger"
                        />
                        <button className="flex items-center justify-center h-12 px-6 w-64 bg-blue-600 mt-8 rounded font-semibold text-sm text-blue-100 hover:bg-blue-700" type="submit" disabled={loading} >                {loading && (
                            <span className="spinner-border spinner-border-sm"></span>
                        )}
                            <span>Login</span></button>
                        <div className="flex mt-6 justify-center text-xs">
                            <a className="text-blue-400 hover:text-blue-500" href="#">Forgot Password</a>
                            <span className="mx-2 text-gray-300">/</span>
                            <a className="text-blue-400 hover:text-blue-500" href="#">Sign Up</a>
                        </div>
                    </Form>
                </Formik>
                {message && (
                    <div className="form-group">
                        <div className="alert alert-danger" role="alert">
                            {message}
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};