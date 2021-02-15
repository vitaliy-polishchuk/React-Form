import React from 'react';
import './container.css'
import FormRegistration from "../formRegistration/formRegistration";
import FormLogin from "../formLogin/formLogin";
import {BrowserRouter, Route, Switch} from "react-router-dom";


const Container = (props) => {
  return (
      <BrowserRouter>
    <div className="container">
<Switch>
   <Route path='/reg' component={FormRegistration}/>
   <Route path='/login' component={FormLogin}/>
</Switch>
  </div>;
    </BrowserRouter>
)
}

export default Container;
