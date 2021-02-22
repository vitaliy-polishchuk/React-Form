import React from 'react';
import './forgotPass.css'
import {NavLink} from "react-router-dom";
import * as Yup from "yup";
import {Form, Formik} from "formik";

const ForgotSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Required'),
});


const ForgotPass = () => {
    let initialValues = {

        email: '',
    };
    let onSubmit = values => {

        console.log(values);
    };
    return (
        <div className='container'>
            <div className='home mx-4 my-3'><NavLink to=''>Home</NavLink></div>
            <div className="form-gap"/>
            <div className="container">
                <div className="row">
                    <div className="col-md-12 col-md-offset-4 ">
                        <div className="panel panel-default">
                            <div className="panel-body">
                                <div className="text-center">
                                    <h3><i className="fa fa-lock fa-4x"/></h3>
                                    <h2 className="text-center">Forgot Password?</h2>
                                    <p>You can reset your password here.</p>
                                    <div className="panel-body">
                                        <Formik initialValues={initialValues} validationSchema={ForgotSchema}
                                                onSubmit={onSubmit}>
                                            {(params) => {
                                                const {errors, touched} = params;

                                                return (
                                                    <Form>

                                                        <div className="form-group">
                                                            <div className="input-group">
                      <span className="input-group-addon"><i
                          className="glyphicon glyphicon-envelope color-blue"/></span>
                                                                <input id="email" name="email"
                                                                       placeholder="Email address"
                                                                       className="form-control p-4" type="email"
                                                                       pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                                                                       required/>
                                                            </div>
                                                        </div>
                                                        <div className="form-group">
                                                            <input name="recover-submit"
                                                                   className="btn btn-lg btn-primary btn-block"
                                                                   value="Reset Password"
                                                                   type="submit"/>
                                                        </div>

                                                        <input type="hidden" className="hide" name="token" id="token"
                                                               value=""/>

                                                    </Form>
                                                )
                                            }}
                                        </Formik>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ForgotPass;
