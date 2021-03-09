import React from 'react';
import './formLogin.css'
import {NavLink} from "react-router-dom";
import * as Yup from 'yup';
import {isUserLoggedIn, loginUser} from "../../App";
import {Formik, Form, Field} from 'formik';


const SignupSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
});


const FormLogin = () => {
    let initialValues = {
        password: '',
        email: '',
    };
    let onSubmit = values => {
        console.log(values);
        loginUser(values.email, values.password)
        if (isUserLoggedIn(values.email)) {
            window.location.href = '/privat'
        }
    };
    return <div className="container my-5">
        <div className="d-flex justify-content-center h-100">
            <div className="card">
                <div className="card-header">
                    <h3>Sign In</h3>
                    <div className="d-flex justify-content-end social_icon">
                        <span><i className="fab fa-facebook-square"/></span>
                        <span><i className="fab fa-google-plus-square"/></span>
                        <span><i className="fab fa-twitter-square"/></span>
                    </div>
                </div>
                <div className="card-body">

                    <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={SignupSchema}>
                        {(params) => {
                            const {errors, touched} = params;

                            return (
                                <Form>
                                    <div className="input-group form-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text"><i className="fas fa-user"/></span>
                                        </div>
                                        {/*<input type="text" className="form-control p-3" placeholder="username" required/>*/}
                                        <Field name="email" className="form-control p-3" placeholder="username"/>
                                        {errors.email && touched.email && <div>{errors.email}</div>}
                                    </div>

                                    <div className="input-group form-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text"><i className="fas fa-key"/></span>
                                        </div>
                                        {/*<input type="password" className="form-control p-3" placeholder="password" pattern=".{8,}" required/>*/}
                                        <Field name="password" className="form-control p-3" placeholder="password"/>
                                        {errors.password && touched.password && <div>{errors.password}</div>}
                                    </div>

                                    <div className="row align-items-center remember">
                                        <input type="checkbox"/>Remember Me
                                    </div>
                                    <div className="form-group">
                                        <input type="submit" value="Login" className="btn float-right login_btn"/>
                                    </div>
                                </Form>
                            )
                        }}
                    </Formik>
                </div>
                <div className="card-footer">
                    <div className="d-flex justify-content-center links">
                        Don't have an account?<NavLink to="regis">Sign Up</NavLink>
                    </div>
                    <div className="d-flex justify-content-center">
                        <NavLink to='forgot_pass'>Forgot your password?</NavLink>
                    </div>
                </div>
            </div>
        </div>
    </div>
}
export default FormLogin;
