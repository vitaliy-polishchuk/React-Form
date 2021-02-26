import React from 'react';
import './container.css'
import FormRegistration from "../formRegistration/formRegistration";
import FormLogin from "../formLogin/formLogin";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import ForgotPass from "../forgotPass/forgotPass";
import Privat from "../privat/privat";
import GithubCommit from "../githubCommit/githubCommit";
import Test from "../test/test";
import Photos from "../photos/photos";
import Modal from "../modal/modal";


const Container = (props) => {
    return (
        <BrowserRouter>
            <div className="container">
                <Route exact path='/' component={FormRegistration}/>
                <Switch>
                    <Route path='/login' component={FormLogin}/>
                    <Route path='/fpass' component={ForgotPass}/>
                    <Route path='/privat' component={Privat}/>
                    <Route path='/api' component={GithubCommit}/>
                    <Route path='/test' component={Test}/>
                    <Route path='/photos' component={Photos}/>
                    <Route path='/photos' component={Modal}/>
                </Switch>
            </div>
        </BrowserRouter>
    )
}

export default Container;
