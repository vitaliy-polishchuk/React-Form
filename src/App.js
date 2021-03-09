import React from 'react'
import './App.css';
import Container from "./components/container/container";
import TopHeader from "./components/topHeader/topHeader";
import {BrowserRouter} from "react-router-dom";


window.Users = [
    {login: 'admin@gmail.com', password: 'admin', phone: 9379992}
]

window.loggedUserEmail = ''

export const loginUser = (email, password) => {
    const user = window.Users.find((user) => {
        return user.login === email && user.password === password
    })

    if (user) {
        window.loggedUserEmail = user.login
    }
    return user
}

export const registerUser = (email, password, phone) => {
    debugger
    window.Users.push({
        email: email,
        password: password,
        phone: phone
    })
}

export const isUserLoggedIn = (email) => {
    return window.loggedUserEmail === email
}


function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <TopHeader/>
                <Container/>
            </BrowserRouter>
        </div>
    );
}

export default App;
