import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import App from "./App";

// import '../src/CSS files/Dashboard/style-dashboard.css';

// import '../src/CSS files/sidebar-style.css'
// import '../src/JS files/sidebar-script'
//import '../src/JS files/script-dashboard.js'
import "bootstrap/dist/css/bootstrap.css";
import "@fortawesome/fontawesome-free/css/all.css";
import "../src/CSS files/adminlte.min.css";
import "../src/CSS files/content-admin.css";
import "./halaStyle.css";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
