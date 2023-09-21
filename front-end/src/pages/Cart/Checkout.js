import React from "react";
import { Link } from "react-router-dom";
import { TiArrowBack } from "react-icons/ti";

const Checkout = () => {
  return (
    <>
      <div className="checkout-wrapper home-wrapper-2 py-5">
        <div className="container">
          <div className="row">
            <div className="col-12 col6 col-sm-12 col-md-6 col-lg-7">
              <div className="checkout-left-data">
                <h5 className="website-name">Dev Corner</h5>
                <nav aria-label="breadcrumb">
                  <ol class="breadcrumb">
                    <li class="breadcrumb-item">
                      <Link to="/" className="text-secondary">
                        Home
                      </Link>
                    </li>
                    <li class="breadcrumb-item ">
                      <Link to="/cart" className="text-secondary">
                        cart
                      </Link>
                    </li>
                    <li
                      class="breadcrumb-item text-secondary"
                      aria-current="page"
                    >
                      Data
                    </li>
                  </ol>
                </nav>
                <p className="title">Contact Information</p>
                <p>Rajkumar R(rajkumarramineni19@gmail.com)</p>
                <form
                  action="#"
                  className="d-flex flex-wrap justify-content-between"
                >
                  <div class="w-100 mb-3">
                    <div class="form-floating">
                      <select
                        class="form-select form-select-sm"
                        id="floatingSelect"
                      >
                        <option selected>Select address</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                      </select>
                      <label for="floatingSelect">Use a new address</label>
                    </div>
                  </div>
                  <div class="w-100 mb-3">
                    <div class="form-floating">
                      <select
                        class="form-select form-select-sm"
                        id="floatingSelect"
                      >
                        <option selected>select</option>
                        <option value="1">India</option>
                        <option value="2">USA</option>
                        <option value="3">UAE</option>
                        <option value="3">Australia</option>
                        <option value="3">New zealand</option>
                        <option value="3">Uk</option>
                        <option value="3">Russia</option>
                      </select>
                      <label for="floatingSelect">Country/Region</label>
                    </div>
                  </div>
                  <div className="mb-3 form-floating">
                    <input type="text" class="form-control" />
                    <label for="floatingEmail">First name(optional)</label>
                  </div>
                  <div className="mb-3 form-floating">
                    <input type="text" class="form-control" />
                    <label for="floatingEmail">Last name</label>
                  </div>
                  <div className="w-100 mb-3 form-floating">
                    <input type="text" class="form-control" />
                    <label for="floatingEmail">Address</label>
                  </div>
                  <div className="w-100 mb-3 form-floating">
                    <input type="text" class="form-control" />
                    <label for="floatingEmail">Apartment No./room no.</label>
                  </div>
                  <div className=" form-floating">
                    <input type="text" class="form-control" />
                    <label for="floatingEmail">City</label>
                  </div>
                  <div className=" form-floating">
                    <div class="form-floating">
                      <select
                        class="form-select form-select-sm"
                        id="floatingSelect"
                      >
                        <option selected>select </option>
                        <option value="1">Telangana</option>
                        <option value="2">Andhara Pradesh</option>
                        <option value="3">Tamil Nadu</option>
                        <option value="3">Kerla</option>
                        <option value="3">goa</option>
                        <option value="3">karnataka</option>
                      </select>
                      <label for="floatingSelect">State</label>
                    </div>
                  </div>
                  <div className=" form-floating">
                    <input type="text" class="form-control" />
                    <label for="floatingEmail">Zip Code</label>
                  </div>
                  <div className=" w-100  mt-3">
                    <div className=" d-flex justify-content-between align-items-center">
                      <Link to="/cart" className="text-dark">
                        <TiArrowBack className="fs-3" />
                        Return to cart
                      </Link>
                      <Link to="/ourstore" className="btn btn-danger btn-sm">
                        Continue to shopping
                      </Link>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-12 col6 col-sm-12 col-md-6 col-lg-5">
              <div className="border-bottom py-4">
                <div className="d-flex gap-10 mb-2 align-items-center">
                  <div className="w-75 d-flex gap-10">
                    <div className="w-25 position-relative">
                      <sapn className=" setbadge badge bg-secondary text-white align-items-center  rounded-pill p-3 position-absolute">
                        1
                      </sapn>
                      <img
                        src="images/watch.jpg"
                        alt="watch"
                        className="img-fluid"
                      />
                    </div>
                    <div className="mt-4">
                      <h6>Watch</h6>
                      <p>saasa</p>
                    </div>
                  </div>
                  <div className="flex-grow-1">
                    <h6>$1000</h6>
                  </div>
                </div>
              </div>
              <div className="border-bottom py-4">
                <div className="d-flex justify-content-between align-nav-item">
                  <p className="total">Sub Total</p>
                  <p className="total-price">$5000</p>
                </div>
                <div className="d-flex justify-content-between align-nav-item">
                  <p className="mb-0">Shipping</p>
                  <p className="mb-0">$5000</p>
                </div>
              </div>

              <div className="d-flex justify-content-between align-nav-item">
                <p className="fw-bold">Total</p>
                <p className="fw-bold">$5000</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
