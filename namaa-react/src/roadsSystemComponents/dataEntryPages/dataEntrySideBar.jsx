import React, { Component } from "react";
import { Link } from "react-router-dom";
// import "./dataEntrySideBarStyle.css";

class DataEntrySideBar extends Component {
  state = {};
  render() {
    return (
      <div class="sidebar" style={{ backgroundColor: "rgb(35, 35, 46)" }}>
        <div>
          <h5 className="system-name">Road System</h5>
        </div>
        <div className="sidebar-list">
          <ul>
            <li>
              <Link to="/roadsSystem/dataentry/">
                <i class="fas fa-home"></i>Home
              </Link>
            </li>
            <li>
              <Link to="/roadsSystem/dataentry/majorroads">
                <i
                  class="fas fa-road"
                  style={{ color: "rgb(189, 184, 215)" }}
                ></i>
                major
              </Link>
            </li>
            <li>
              <Link to="/roadsSystem/dataentry/majorroads/sections">
                <i class="fas fa-globe-africa"></i>
                sections
              </Link>
            </li>
            <li>
              <Link to="/roadsSystem/dataentry/majorroads/intersections">
                <i class="fas fa-globe-africa"></i>
                intersections
              </Link>
            </li>
            <li>
              <Link to="/roadsSystem/dataentry/minorroads">
                <i class="far fa-map"></i> minor
              </Link>
            </li>
          </ul>
        </div>

        <div class="social_media">
          <Link>
            <i class="fab fa-facebook-f"></i>
          </Link>
          <Link>
            <i class="fab fa-twitter"></i>
          </Link>
          <Link>
            <i class="fab fa-instagram"></i>
          </Link>
        </div>
      </div>
    );
  }
}

export default DataEntrySideBar;
