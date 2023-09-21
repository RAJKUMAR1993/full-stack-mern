import React from "react";
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";

const Blog = () => {
  return (
    <>
      <div className="col-sm-12 col-md-6 col-lg-3">
        <div className="card">
          <img src="images/blog-1.jpg" className="img-fluid " alt="" />
          <div class="card-body">
            <p class="card-title">27 DEC 2022</p>
            <h5 class="card-title">A Beautiful Sunday Morning </h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <Link
              to="/single-blog/:id"
              className="btn btn-dark btn-sm rounded-pill"
            >
              Read More
            </Link>
          </div>
        </div>
      </div>
      <div className="col-sm-12 col-md-6 col-lg-3">
        <div className="card">
          <img src="images/blog-1.jpg" className="img-fluid" alt="" />
          <div class="card-body">
            <p class="card-title">27 DEC 2022</p>
            <h5 class="card-title">A Beautiful Sunday Morning </h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <Link className="btn btn-dark btn-sm rounded-pill">Read More</Link>
          </div>
        </div>
      </div>
      <div className="col-sm-12 col-md-6 col-lg-3">
        <div className="card">
          <img src="images/blog-1.jpg" className="img-fluid" alt="" />
          <div class="card-body">
            <p class="card-title">27 DEC 2022</p>
            <h5 class="card-title">A Beautiful Sunday Morning </h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <Link className="btn btn-dark btn-sm rounded-pill">Read More</Link>
          </div>
        </div>
      </div>
      <div className="col-sm-12 col-md-6 col-lg-3">
        <div className="card">
          <img src="images/blog-1.jpg" className="img-fluid" alt="" />
          <div class="card-body blog-content">
            <p class="card-title">27 DEC 2022</p>
            <h5 class="card-title">A Beautiful Sunday Morning </h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <Link className="btn btn-dark btn-sm rounded-pill">Read More</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
