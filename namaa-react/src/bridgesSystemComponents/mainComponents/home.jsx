//input:
//output:

import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <React.Fragment>
      <section
        id="hero"
        className="d-flex align-items-center justify-content-center"
      >
        <div className="container" data-aos="fade-up">
          <div
            className="row justify-content-center"
            data-aos="fade-up"
            data-aos-delay="150"
          >
            <div className="col-xl-6 col-lg-8">
              <h1>أمانة جدة</h1>
              <h2>
                <span>الادارة العامة للتشغيل والصيانة</span>
              </h2>
            </div>
          </div>

          <div
            className="row mt-5 justify-content-center"
            data-aos="zoom-in"
            data-aos-delay="250"
          >
            <div className="col-xl-2 col-md-4 col-6">
              <div className="icon-box">
                <Link to="/bridges">
                  <i>
                    <span
                      className="iconify"
                      data-icon="mdi-bridge"
                      data-inline="true"
                    ></span>
                  </i>
                </Link>
                <h3>
                  <Link to="/bridges">كباري</Link>
                </h3>
              </div>
            </div>
            <div className="col-xl-2 col-md-4 col-6">
              <div className="icon-box">
                <Link to="/minorRoads">
                  <i className="far fa-map"></i>
                </Link>
                <h3>
                  <Link to="/minorRoads">طرق فرعية ومناطق</Link>
                </h3>
              </div>
            </div>
            <div className="col-xl-2 col-md-4 col-6 mt-4 mt-md-0">
              <div className="icon-box">
                <Link to="/majorRoads">
                  <i className="fas fa-road"></i>
                </Link>
                <h3>
                  <Link to="/majorRoads">طرق رئيسية</Link>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Home;
