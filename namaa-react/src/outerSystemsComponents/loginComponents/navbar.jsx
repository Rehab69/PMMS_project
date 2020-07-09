//input: authorized ==>  true or false
//output:
import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header id="header" className="fixed-top">
      <div className="container d-flex align-items-center justify-content-between">
        <h1 className="logo">
          <NavLink className="nav-link" to="/home">
            أمانة جدة
          </NavLink>
        </h1>
        {/* authorized === undefined ? (
        <Link className="get-started-btn scrollto" to="/login">
          تسجيل الدخول
        </Link>
        ) : ( */}
        <nav className="nav-menu d-none d-lg-block">
          <ul>
            {/* ================================================== */}
            <li className="drop-down nav-item">
              <NavLink className="nav-link" to="/bridges">
                كباري
              </NavLink>
              <ul>
                <li>
                  <NavLink className="nav-link" to="/bridges">
                    إدخال البيانات
                  </NavLink>
                </li>
                <li>
                  <NavLink className="nav-link" to="/bridges">
                    تعديل البيانات
                  </NavLink>
                </li>
              </ul>
            </li>
            {/* ================================================== */}
            <li className="drop-down nav-item">
              <NavLink className="nav-link" to="/minor">
                طرق فرعية ومناطق
              </NavLink>
              <ul>
                <li>
                  <NavLink className="nav-link" to="/minor/enteringMinorForm">
                    إدخال البيانات
                  </NavLink>
                </li>
                <li>
                  <NavLink className="nav-link" to="/minor/editingMinorForm">
                    تعديل البيانات
                  </NavLink>
                </li>
              </ul>
            </li>
            {/* ================================================== */}
            <li className="drop-down nav-item">
              <NavLink className="nav-link" to="/major">
                طرق رئيسية
              </NavLink>
              <ul>
                <li>
                  <NavLink className="nav-link" to="/major/enteringMajorForm">
                    إدخال البيانات
                  </NavLink>
                </li>
                <li>
                  <NavLink className="nav-link" to="/major/editingMajorForm">
                    تعديل البيانات
                  </NavLink>
                </li>
              </ul>
            </li>
            {/* ======================================================== */}
          </ul>
        </nav>
        <Link className="get-started-btn scrollto" to="/login">
          تسجيل الخروج
        </Link>
        {/* ) */}
      </div>
    </header>
  );
};

export default Navbar;
