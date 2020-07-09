import React from "react";
import { Link } from "react-router-dom";

const Minor = () => {
  return (
    <section id="hero" class="d-flex align-items-center justify-content-center">
      <div class="container" data-aos="fade-up">
        <div
          class="row justify-content-center"
          data-aos="fade-up"
          data-aos-delay="150"
        >
          <div class="col-xl-6 col-lg-8">
            <h1></h1>
            <h2>
              <span></span>
            </h2>
          </div>
        </div>

        <div
          class="row mt-5 justify-content-center"
          data-aos="zoom-in"
          data-aos-delay="250"
        >
          {/*----------------------------------*/}
          <div class="col-xl-2 col-md-4 col-6">
            <div class="icon-box">
              <Link>
                <i class="fas fa-file-export"></i>
              </Link>
              <h3>
                <Link>إدخال بيانات </Link>
              </h3>
            </div>
          </div>
          {/* ------------------------------ */}
          <div class="col-xl-2 col-md-4 col-6">
            <div class="icon-box">
              <Link>
                <i class="fas fa-edit"></i>
              </Link>
              <h3>
                <Link>تعديل بيانات </Link>
              </h3>
            </div>
          </div>
          {/* ----------------------------------- */}
        </div>
      </div>
    </section>
  );
};

export default Minor;
