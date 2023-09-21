import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";

const Specialproducts = () => {
  const ratingChanged = (newRating) => {
    console.log(newRating);
  };
  return (
    <>
      <div className="col-sm-12 col-md-6 col-lg-4">
        <div className="specialProduct-card">
          <div className="row">
            <div className="col-sm-12 col-md-6 col-lg-5 ">
              <img src="images/watch.jpg" alt="" className="img-fix " />
            </div>
            <div className="col-sm-12 col-md-6 col-lg-7 ">
              <div className="specialProduct-content">
                <div className="">
                  <h5 className="brand">Havels</h5>
                  <p className="title fw-normal">
                    Samsung Galaxy Note10+ Mobile Phone :sim...
                  </p>
                  <ReactStars
                    count={5}
                    onChange={ratingChanged}
                    size={24}
                    //   value="3"
                    //   edit={false}
                    activeColor="#ffd700"
                  />
                  <p className="price">
                    <span className="red-p text-danger fw-bold ">$100.00</span>
                    &nbsp;
                    <strike className="">$200.00</strike>
                  </p>
                  <div className="discount-till d-flex align-items-center gap-10">
                    <p className="mb-0">
                      <b>5 </b>Days
                    </p>
                    <div className="d-flex gap-15 align-items-center ">
                      <span className="p-1 rounded-circle ">:</span>
                      <span className="p-1 rounded-circle ">:</span>
                      <span className="p-1 rounded-circle "></span>
                    </div>
                    <div className="prod-count ">
                      <p className="text-success">Product:5</p>
                      <div class="progress">
                        <div
                          className="progress-bar bg-info "
                          role="progressbar"
                          style={{ width: "25%" }}
                          aria-valuenow="25"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                      <div className="float-start my-3">
                        <Link
                          to="#"
                          className="btn btn-dark text-white  btn-sm floatleft "
                        >
                          add cart
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-sm-12 col-md-6 col-lg-4">
        <div className="specialProduct-card">
          <div className="row">
            <div className="col-sm-12 col-md-6 col-lg-5 ">
              <img src="images/watch.jpg" alt="" className="img-fix " />
            </div>
            <div className="col-sm-12 col-md-6 col-lg-7 ">
              <div className="specialProduct-content">
                <div className="">
                  <h5 className="brand">Havels</h5>
                  <p className="title fw-normal">
                    Samsung Galaxy Note10+ Mobile Phone :sim...
                  </p>
                  <ReactStars
                    count={5}
                    onChange={ratingChanged}
                    size={24}
                    //   value="3"
                    //   edit={false}
                    activeColor="#ffd700"
                  />
                  <p className="price">
                    <span className="red-p text-danger fw-bold ">$100.00</span>
                    &nbsp;
                    <strike className="">$200.00</strike>
                  </p>
                  <div className="discount-till d-flex align-items-center gap-10">
                    <p className="mb-0">
                      <b>5 </b>Days
                    </p>
                    <div className="d-flex gap-15 align-items-center ">
                      <span className="p-1 rounded-circle ">:</span>
                      <span className="p-1 rounded-circle ">:</span>
                      <span className="p-1 rounded-circle "></span>
                    </div>
                    <div className="prod-count ">
                      <p className="text-success">Product:5</p>
                      <div class="progress">
                        <div
                          className="progress-bar bg-info "
                          role="progressbar"
                          style={{ width: "25%" }}
                          aria-valuenow="25"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                      <div className="float-start my-3">
                        <Link
                          to="#"
                          className="btn btn-dark text-white btn-sm floatleft "
                        >
                          add cart
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-sm-12 col-md-6 col-lg-4">
        <div className="specialProduct-card">
          <div className="row">
            <div className="col-sm-12 col-md-6 col-lg-5 ">
              <img src="images/watch.jpg" alt="" className="img-fix " />
            </div>
            <div className="col-sm-12 col-md-6 col-lg-7 ">
              <div className="specialProduct-content">
                <div className="">
                  <h5 className="brand">Havels</h5>
                  <p className="title fw-normal">
                    Samsung Galaxy Note10+ Mobile Phone :sim...
                  </p>
                  <ReactStars
                    count={5}
                    onChange={ratingChanged}
                    size={24}
                    //   value="3"
                    //   edit={false}
                    activeColor="#ffd700"
                  />
                  <p className="price">
                    <span className="red-p text-danger fw-bold ">$100.00</span>
                    &nbsp;
                    <strike className="">$200.00</strike>
                  </p>
                  <div className="discount-till d-flex align-items-center gap-10">
                    <p className="mb-0">
                      <b>5 </b>Days
                    </p>
                    <div className="d-flex gap-15 align-items-center ">
                      <span className="p-1 rounded-circle ">:</span>
                      <span className="p-1 rounded-circle ">:</span>
                      <span className="p-1 rounded-circle "></span>
                    </div>
                    <div className="prod-count ">
                      <p className="text-success">Product:5</p>
                      <div class="progress">
                        <div
                          className="progress-bar bg-info "
                          role="progressbar"
                          style={{ width: "25%" }}
                          aria-valuenow="25"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                      <div className="float-start my-3">
                        <Link
                          to="#"
                          className="btn btn-dark text-white rounded  btn-sm floatleft "
                        >
                          add cart
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Specialproducts;
