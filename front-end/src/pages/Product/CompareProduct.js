import React from "react";
import Breadcrums from "../../pages/Breadcrums/Breadcrums";
import Meta from "../../componets/Meta/Meta";
import Color from "../../componets/Color/Color";

const Compareproduct = () => {
  return (
    <>
      <Meta title={"Comapare Product"} />
      <Breadcrums title="Comapare Product" />
      <div className="compare-product-wrapper py-5 home-wrapper-2">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-6 col-lg-3">
              <div className="compare-product-card position-relative">
                <img
                  src="images/cross.svg"
                  alt="cross"
                  className="position-absolute cross img-fluid"
                />
                <div className="product-card-image">
                  <img src="images/watch.jpg" alt="watch" className="" />
                  <div className="compare-product-details">
                    <h5 className="product-title">
                      Samsung M31 6gb 12gb black Color
                    </h5>
                    <h6 className="price text-danger">$100.00</h6>
                    <div>
                      <div className="product-details">
                        <h6>Brand:</h6>
                        <p>Samsung M31</p>
                      </div>
                      <div className="product-details">
                        <h6>Type:</h6>
                        <p> M31</p>
                      </div>
                      <div className="product-details">
                        <h6>SkU:</h6>
                        <p>reli296180</p>
                      </div>
                      <div className="product-details">
                        <h6>Avaliblilty:</h6>
                        <p>In Stock</p>
                      </div>
                      <div className="product-details">
                        <h6>Color:</h6>
                        <Color />
                      </div>

                      <div className="product-details">
                        <h6>Size:</h6>
                        <p>S M L</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-3">
              <div className="compare-product-card position-relative">
                <img
                  src="images/cross.svg"
                  alt="cross"
                  className="position-absolute cross img-fluid"
                />
                <div className="product-card-image">
                  <img src="images/watch.jpg" alt="watch" className="" />
                  <div className="compare-product-details-">
                    <h5 className="product-title-">
                      Samsung M31 6gb 12gb black Color
                    </h5>
                    <h6 className="price text-danger">$100.00</h6>
                    <div>
                      <div className="product-details">
                        <h6>Brand:</h6>
                        <p>Samsung M31</p>
                      </div>
                      <div className="product-details">
                        <h6>Type:</h6>
                        <p> M31</p>
                      </div>
                      <div className="product-details">
                        <h6>SkU:</h6>
                        <p>reli296180</p>
                      </div>
                      <div className="product-details">
                        <h6>Avaliblilty:</h6>
                        <p>In Stock</p>
                      </div>
                      <div className="product-details">
                        <h6>Color:</h6>
                        <Color />
                      </div>

                      <div className="product-details">
                        <h6>Size:</h6>
                        <p>S M L</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-3">
              <div className="compare-product-card position-relative">
                <img
                  src="images/cross.svg"
                  alt="cross"
                  className="position-absolute cross img-fluid"
                />
                <div className="product-card-image">
                  <img src="images/watch.jpg" alt="watch" className="" />
                  <div className="compare-product-details-">
                    <h5 className="product-title-">
                      Samsung M31 6gb 12gb black Color
                    </h5>
                    <h6 className="price text-danger">$100.00</h6>
                    <div>
                      <div className="product-details">
                        <h6>Brand:</h6>
                        <p>Samsung M31</p>
                      </div>
                      <div className="product-details">
                        <h6>Type:</h6>
                        <p> M31</p>
                      </div>
                      <div className="product-details">
                        <h6>SkU:</h6>
                        <p>reli296180</p>
                      </div>
                      <div className="product-details">
                        <h6>Avaliblilty:</h6>
                        <p>In Stock</p>
                      </div>
                      <div className="product-details">
                        <h6>Color:</h6>
                        <Color />
                      </div>

                      <div className="product-details">
                        <h6>Size:</h6>
                        <p>S M L</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-3">
              <div className="compare-product-card position-relative">
                <img
                  src="images/cross.svg"
                  alt="cross"
                  className="position-absolute cross img-fluid"
                />
                <div className="product-card-image">
                  <img src="images/watch.jpg" alt="watch" className="" />
                  <div className="compare-product-details-">
                    <h5 className="product-title-">
                      Samsung M31 6gb 12gb black Color
                    </h5>
                    <h6 className="price text-danger">$100.00</h6>
                    <div>
                      <div className="product-details">
                        <h6>Brand:</h6>
                        <p>Samsung M31</p>
                      </div>
                      <div className="product-details">
                        <h6>Type:</h6>
                        <p> M31</p>
                      </div>
                      <div className="product-details">
                        <h6>SkU:</h6>
                        <p>reli296180</p>
                      </div>
                      <div className="product-details">
                        <h6>Avaliblilty:</h6>
                        <p>In Stock</p>
                      </div>
                      <div className="product-details">
                        <h6>Color:</h6>
                        <Color />
                      </div>

                      <div className="product-details">
                        <h6>Size:</h6>
                        <p>S M L</p>
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

export default Compareproduct;
