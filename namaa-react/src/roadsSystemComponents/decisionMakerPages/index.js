import React from "react";
import ReactDOM from "react-dom";

import App from "./app";

import "@fortawesome/fontawesome-free/css/all.css";
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";

import "./SideBar/side.css";

import "./SideBar/sideBarScript";

import {BrowserRouter } from "react-router-dom";



ReactDOM.render(


    <BrowserRouter>


        <App />


    </BrowserRouter>,



    
    document.querySelector("#root"));