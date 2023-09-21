import React, { useState } from "react";
import Breadcrums from "../Breadcrums/Breadcrums";
import ProductcardStore from "../../componets/Productcard/ProductcardStore";
import Color from "../../componets/Color/Color";
import Meta from "../../componets/Meta/Meta";
import { Link } from "react-router-dom";
import ReactStars from "react-rating-stars-component";

const Ourstore = () => {
  const [grid, setGrid] = useState(4);

  const ratingChanged = (newRating) => {};
  return (
    <>
      <Meta title={"Our Store"} />
      <Breadcrums title="Our Stroe" />
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
                        className="nav-link fs-6 text-dark"
                        aria-current="page"
                        to="#"
                      >
                        Watch
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link fs-6 text-dark" to="#">
                        Tv
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link fs-6 text-dark" to="#">
                        Camera
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link  fs-6 text-dark">Laptop</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="filter-card mb-4">
                <h6 className="filter-title">
                  <b>Filter By </b>
                </h6>
                <p>Avaliablity</p>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="defaultCheck1"
                  />
                  <label className="form-check-label" for="defaultCheck1">
                    In Stock (1)
                  </label>
                </div>
                <div className="form-check py-1">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="defaultCheck2"
                  />
                  <label className="form-check-label" for="defaultCheck2">
                    Out of Stock (0)
                  </label>
                </div>
                <h6>
                  <b>Price</b>
                </h6>
                <div className="d-flex align-item-center gap-10">
                  <div className="form-floating mb-3">
                    <input
                      type="text"
                      className="form-control"
                      style={{ height: "30px" }}
                      id="floatingInput"
                      // placeholder="From"
                    />
                  </div>
                  <span>To</span>
                  <div className="form-floating mb-3">
                    <input
                      type="text"
                      className="form-control"
                      style={{ height: "30px" }}
                      id="floatingInput"
                      placeholder="To"
                    />
                  </div>
                </div>
                <h6>
                  <b>Colors</b>
                </h6>
                <div>
                  <Color />
                </div>
                <h6>
                  <b>Size</b>
                </h6>
                <div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="defaultCheck1"
                    />
                    <label className="form-check-label" for="defaultCheck1">
                      S(2)
                    </label>
                  </div>
                  <div className="form-check py-1">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="defaultCheck2"
                    />
                    <label className="form-check-label" for="defaultCheck2">
                      M (2)
                    </label>
                  </div>
                </div>
              </div>
              <div className="filter-card mb-4">
                <h6 className="filter-title">
                  <b>Product Tags</b>
                </h6>
                <div>
                  <div className="product-tags d-flex flex-wrap align-items-center gap-10">
                    <span className="badge bg-light text-dark rounded-3 py-2 px-3 ">
                      headphones
                    </span>
                    <span className="badge bg-light text-dark rounded-3 py-2 px-3 ">
                      Laptops
                    </span>
                    <span className="badge bg-light text-dark rounded-3 py-2 px-3 ">
                      Mobiles
                    </span>
                    <span className="badge bg-light text-dark rounded-3 py-2 px-3 ">
                      Sony
                    </span>
                    <span className="badge bg-light text-dark rounded-3 py-2 px-3 ">
                      Samsung
                    </span>
                    <span className="badge bg-light text-dark rounded-3 py-2 px-3 ">
                      Google
                    </span>
                  </div>
                </div>
              </div>
              <div className="filter-card mb-3">
                <h6 className="filter-title">
                  <b>Random Product</b>
                </h6>
                <div>
                  <div className="random-product d-flex">
                    <div className="w-50">
                      <img src="images/watch.jpg" className="width" alt="" />
                    </div>
                    <div className="w-50">
                      <p>
                        <b>Kids headphones Bulk 10 pack multi Colored For...</b>
                      </p>
                      <ReactStars
                        count={5}
                        onChange={ratingChanged}
                        size={24}
                        //   value="3"
                        //   edit={false}
                        activeColor="#ffd700"
                      />
                      <h6>$100.00</h6>
                    </div>
                    <hr />
                  </div>
                </div>
                <hr />
                <div>
                  <div className="random-product d-flex">
                    <div className="w-50">
                      <img src="images/watch.jpg" className="width" alt="" />
                    </div>
                    <div className="w-50">
                      <p>
                        <b>Kids headphones Bulk 10 pack multi Colored For...</b>
                      </p>
                      <ReactStars
                        count={5}
                        onChange={ratingChanged}
                        size={24}
                        value="3"
                        edit={false}
                        activeColor="#ffd700"
                      />
                      <h6>$100.00</h6>
                    </div>
                    <hr />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-9">
              <div className="filter-sort-grid mb-4">
                <div className="d-flex justify-content-between align-item-center">
                  <div className="d-flex align-items-center gap-10">
                    <p className="mb-0 d-block" style={{ width: "77px" }}>
                      Sort by:
                    </p>
                    <select
                      className="form-select form-select-sm"
                      aria-label=".form-select-sm example"
                    >
                      <option selected>Open this select menu</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                  </div>
                  <div className="d-flex align-items-center gap-10">
                    <p className="totalProduct align-item-center">21 Product</p>
                    <div className="d-flex align-items-center gap-4 grid">
                      <img
                        onClick={() => {
                          setGrid(3);
                        }}
                        src="images/gr4.svg"
                        alt="grid"
                        className="d-block img-fluid"
                      />
                      <img
                        onClick={() => {
                          setGrid(4);
                        }}
                        src="images/gr3.svg"
                        alt="grid"
                        className="d-block img-fluid"
                      />
                      <img
                        onClick={() => {
                          setGrid(6);
                        }}
                        src="images/gr2.svg"
                        alt="grid"
                        className="d-block img-fluid"
                      />
                      <img
                        onClick={() => {
                          setGrid(12);
                        }}
                        src="images/gr.svg"
                        alt="grid"
                        className="d-block img-fluid"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="products-list pb-5">
                <div className="d-flex flex-wrap">
                  <ProductcardStore grid={grid} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Ourstore;
