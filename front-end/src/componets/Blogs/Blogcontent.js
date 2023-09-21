import React from "react";
import Breadcrums from "../../pages/Breadcrums/Breadcrums";
import Meta from "../../componets/Meta/Meta";
import Blog from "../../componets/Blogs/Blog";
import { Link } from "react-router-dom";

const Blogcontent = () => {
  return (
    <>
      <Meta title={"BlogContent"} />
      <Breadcrums title="BlogContent" />
      <div className="store-wrapper home-wrapper-2 py-3">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-6 col-lg-3 ">
              <div className="filter-card mb-4">
                <h6 className="filter-title">
                  <b>Shope By Categories</b>
                </h6>
                <div className="">
                  <ul className="nav flex-column">
                    <li className="nav-item">
                      <Link
                        className="nav-link fs-6 text-dark fw-bolder fst-normal"
                        aria-current="page"
                        to="#"
                      >
                        Watch
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        className="nav-link fs-6 text-dark fw-bolder fst-normal"
                        to="#"
                      >
                        Tv
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        className="nav-link fs-6 text-dark fw-bolder fst-normal"
                        to="#"
                      >
                        Camera
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link  fs-6 text-dark fw-bolder fst-normal">
                        Laptop
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-9 ">
              <div className="row ">
                <Blog />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blogcontent;
