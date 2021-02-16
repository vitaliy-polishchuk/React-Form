import React from 'react';
import './formRegistration.css'
import {NavLink} from "react-router-dom";
import {Formik, Form, Field} from 'formik';
import * as Yup from 'yup';
import {registerUser} from "../../App";


const SignInSchema = Yup.object().shape({
    name: Yup.string().max(15, 'Must be 15 characters or less').required('Required'),
    number: Yup.string().matches(/^[0-9]*$/).required('Required'),
    password: Yup.string().min(2, 'Too Short!').max(20, 'Too Long!').required('Required'),
    confirm: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match')
});


const FormRegistration = () => {
    let initialValues = {
        name: '',
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
                                                <Field name="name" className="form-control p-4"
                                                       placeholder="Your Name *"/>
                                                {errors.name && touched.name && <div>{errors.name}</div>}

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
                                    <div className='my-3'><NavLink to='/login'>Have already account? Login</NavLink>
                                    </div>
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
