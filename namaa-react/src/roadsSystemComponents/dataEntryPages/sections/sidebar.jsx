import React, { Component } from "react";
class Sidebar extends Component {
  state = {};
  render() {
    return (
      <div class="sidebar" style={{ backgroundColor: "rgb(35, 35, 46)" }}>
        <div>
          <h2>Sidebar</h2>
        </div>
        <div className="sidebar-list">
          <ul>
            <li>
              <a href="#">
                <i class="fas fa-home"></i>Home
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fas fa-user"></i>Profile
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fas fa-address-card"></i>About
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fas fa-project-diagram"></i>portfolio
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fas fa-blog"></i>Blogs
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fas fa-address-book"></i>Contact
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fas fa-map-pin"></i>Map
              </a>
            </li>
          </ul>
        </div>

        <div class="social_media">
          <a href="#">
            <i class="fab fa-facebook-f"></i>
          </a>
          <a href="#">
            <i class="fab fa-twitter"></i>
          </a>
          <a href="#">
            <i class="fab fa-instagram"></i>
          </a>
        </div>
      </div>
    );
  }
}

export default Sidebar;
