import React from 'react';
import './formRegistration.css'
import {NavLink} from "react-router-dom";
import {Formik, Form, Field} from 'formik';
import * as Yup from 'yup';
import {registerUser} from "../../App";


const SignInSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Required'),
    number: Yup.string().matches(/^[0-9]*$/).required('Required'),
    password: Yup.string().min(2, 'Too Short!').max(20, 'Too Long!').required('Required'),
    confirm: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match')
});


const FormRegistration = () => {
    let initialValues = {
        email: '',
        number: '',
        password: '',
        confirm: '',
    };
    let onSubmit = values => {
        console.log(values);
        registerUser(values.email, values.password, values.number)
        window.location.href = '/login'
    };
    return (
        <div className="container register-form my-5">
            <div className="form">
                <div className="note">
                    <p className='display-4'>Registration Form</p>
                </div>
                <Formik initialValues={initialValues} validationSchema={SignInSchema} onSubmit={onSubmit}>
                    {(params) => {
                        const {errors, touched} = params;

                        return (
                            <Form>
                                <div className="form-content">
                                    <div className="row">
                                        <div className="col-md-6">

                                            <div className="form-group">
                                                <Field name="email" className="form-control p-4"
                                                       placeholder="Your Email *"/>
                                                {errors.email && touched.email && <div>{errors.email}</div>}

                                            </div>
                                            <div className="form-group">
                                                <Field name="number" className="form-control p-4"
                                                       placeholder="Phone Number *"/>
                                                {errors.number && touched.number && <div>{errors.number}</div>}
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <Field type='password' name="password" className="form-control p-4"
                                                       placeholder="Your Password *"/>
                                                {errors.password && touched.password &&
                                                <div>{errors.password}</div>}
                                            </div>
                                            <div className="form-group">
                                                <Field type='password' name="confirm" className="form-control p-4"
                                                       placeholder="Confirm Password *"/>
                                                {errors.confirm && touched.confirm && <div>{errors.confirm}</div>}
                                            </div>
                                        </div>
                                    </div>
                                    <input type="submit" value="Submit" className="btn btn-primary"/>
                                    <div className='my-3'><NavLink to='login'>Have already account? Login</NavLink>
                                    </div>
                                    <div className='my-4'><NavLink to='api'>Hooks API calling Code</NavLink></div>
                                    <div className='my-4'><NavLink to='test'>Test link</NavLink></div>
                                    <div className='my-4'><NavLink to='photos'>Photos</NavLink></div>
                                </div>
                            </Form>
                        )
                    }}
                </Formik>

            </div>

        </div>

    );
}

export default FormRegistration
