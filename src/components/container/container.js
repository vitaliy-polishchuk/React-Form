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
import TopHeader from "../topHeader/topHeader";
import TopContent from "../topContent/topContent";

const Container = (props) => {
    return (

        <div className="container">

            <Route path='/' component={TopContent}/>
            <Switch>
                <Route path='/regis' component={FormRegistration}/>
                <Route path='/login' component={FormLogin}/>
                <Route path='/forgot_pass' component={ForgotPass}/>
                <Route path='/privat' component={Privat}/>
                <Route path='/api' component={GithubCommit}/>
                <Route path='/test' component={Test}/>
                <Route path='/photos' component={Photos}/>
            </Switch>
        </div>

    )
}

export default Container;
