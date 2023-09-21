import React from "react";
import Breadcrums from "../../pages/Breadcrums/Breadcrums";
import Meta from "../../componets/Meta/Meta";

const Wishlist = () => {
  return (
    <>
      <Meta title={"WishList"} />
      <Breadcrums title="WishList" />
      <div className="whishlist-wrapper py-5 home-wrapper-2">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-6 col-lg-3">
              <div className="whishlist-card position-relative">
                <img
                  src="images/cross.svg"
                  alt="cross"
                  className="position-absolute cross img-fluid"
                />
                <div className="whishlist-card-image">
                  <img
                    src="images/watch.jpg"
                    alt="watch"
                    className="img-fluid w-100"
                  />
                  <div className="whishlist-product-details ">
                    <h6 className="whishlist-title">
                      Samsung M31 6gb 12gb black Color
                    </h6>
                    <h6 className="price text-danger">$100.00</h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-3">
              <div className="whishlist-card position-relative">
                <img
                  src="images/cross.svg"
                  alt="cross"
                  className="position-absolute cross img-fluid"
                />
                <div className="whishlist-card-image">
                  <img
                    src="images/watch.jpg"
                    alt="watch"
                    className="img-fluid w-100"
                  />
                  <div className="whishlist-product-details ">
                    <h6 className="whishlist-title">
                      Samsung M31 6gb 12gb black Color
                    </h6>
                    <h6 className="price text-danger">$100.00</h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-3">
              <div className="whishlist-card position-relative">
                <img
                  src="images/cross.svg"
                  alt="cross"
                  className="position-absolute cross img-fluid"
                />
                <div className="whishlist-card-image">
                  <img
                    src="images/watch.jpg"
                    alt="watch"
                    className="img-fluid w-100"
                  />
                  <div className="whishlist-product-details ">
                    <h6 className="whishlist-title">
                      Samsung M31 6gb 12gb black Color
                    </h6>
                    <h6 className="price text-danger">$100.00</h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-3">
              <div className="whishlist-card position-relative">
                <img
                  src="images/cross.svg"
                  alt="cross"
                  className="position-absolute cross img-fluid"
                />
                <div className="whishlist-card-image">
                  <img
                    src="images/watch.jpg"
                    alt="watch"
                    className="img-fluid w-100"
                  />
                  <div className="whishlist-product-details ">
                    <h6 className="whishlist-title">
                      Samsung M31 6gb 12gb black Color
                    </h6>
                    <h6 className="price text-danger">$100.00</h6>
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

export default Wishlist;
