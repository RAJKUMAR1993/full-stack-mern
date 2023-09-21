import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";

const Productcard = () => {
  const ratingChanged = (newRating) => {
    console.log(newRating);
  };
  return (
    <>
      <div className="col-sm-12 col-md-6 col-lg-2  ">
        <div className="card cardWidth product-card position-relative">
          <div className="wish-list position-absolute">
            <Link>
              <img src="images/wish.svg" alt="wishlist" className=" " />
            </Link>
          </div>
          <img src="images/watch.jpg" className="card-img-top" alt="..." />
          <div className="product_details">
            <h6 className="brand mr-4">Havel</h6>
          </div>
          <div className="card-body product_details">
            <h5 className="card-text">
              Some quick example text to build on the card title
            </h5>
            <ReactStars
              count={5}
              onChange={ratingChanged}
              size={24}
              //   value="3"
              //   edit={false}
              activeColor="#ffd700"
            />
            <h5 className="price">$500.00</h5>
          </div>
          <div className="action-bar position-absolute">
            <div className="d-flex flex-column gap-8">
              <Link>
                <img
                  src="images/prodcompare.svg"
                  alt="productcompare"
                  className=""
                />
              </Link>
              <Link>
                <img src="images/view.svg" alt="view" className="" />
              </Link>
              <Link>
                <img src="images/add-cart.svg" alt="add-cart" className="" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="col-sm-12 col-md-6 col-lg-2  ">
        <div className="card cardWidth product-card position-relative">
          <div className="wish-list position-absolute">
            <Link>
              <img src="images/wish.svg" alt="wishlist" className=" " />
            </Link>
          </div>
          <img src="images/watch.jpg" className="card-img-top" alt="..." />
          <div className="product_details">
            <h6 className="brand mr-4">Havel</h6>
          </div>
          <div className="card-body product_details">
            <h5 className="card-text">
              Some quick example text to build on the card title
            </h5>
            <ReactStars
              count={5}
              onChange={ratingChanged}
              size={24}
              //   value="3"
              //   edit={false}
              activeColor="#ffd700"
            />
            <h5 className="price">$500.00</h5>
          </div>
          <div className="action-bar position-absolute">
            <div className="d-flex flex-column gap-8">
              <Link>
                <img
                  src="images/prodcompare.svg"
                  alt="productcompare"
                  className=""
                />
              </Link>
              <Link>
                <img src="images/view.svg" alt="view" className="" />
              </Link>
              <Link>
                <img src="images/add-cart.svg" alt="add-cart" className="" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="col-sm-12 col-md-6 col-lg-2  ">
        <div className="card cardWidth product-card position-relative">
          <div className="wish-list position-absolute">
            <Link>
              <img src="images/wish.svg" alt="wishlist" className=" " />
            </Link>
          </div>
          <img src="images/watch.jpg" className="card-img-top" alt="..." />
          <div className="product_details">
            <h6 className="brand mr-4">Havel</h6>
          </div>
          <div className="card-body product_details">
            <h5 className="card-text">
              Some quick example text to build on the card title
            </h5>
            <ReactStars
              count={5}
              onChange={ratingChanged}
              size={24}
              //   value="3"
              //   edit={false}
              activeColor="#ffd700"
            />
            <h5 className="price">$500.00</h5>
          </div>
          <div className="action-bar position-absolute">
            <div className="d-flex flex-column gap-8">
              <Link>
                <img
                  src="images/prodcompare.svg"
                  alt="productcompare"
                  className=""
                />
              </Link>
              <Link>
                <img src="images/view.svg" alt="view" className="" />
              </Link>
              <Link>
                <img src="images/add-cart.svg" alt="add-cart" className="" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="col-sm-12 col-md-6 col-lg-2  ">
        <div className="card cardWidth product-card position-relative">
          <div className="wish-list position-absolute">
            <Link>
              <img src="images/wish.svg" alt="wishlist" className=" " />
            </Link>
          </div>
          <img src="images/watch.jpg" className="card-img-top" alt="..." />
          <div className="product_details">
            <h6 className="brand mr-4">Havel</h6>
          </div>
          <div className="card-body product_details">
            <h5 className="card-text">
              Some quick example text to build on the card title
            </h5>
            <ReactStars
              count={5}
              onChange={ratingChanged}
              size={24}
              //   value="3"
              //   edit={false}
              activeColor="#ffd700"
            />
            <h5 className="price">$500.00</h5>
          </div>
          <div className="action-bar position-absolute">
            <div className="d-flex flex-column gap-8">
              <Link>
                <img
                  src="images/prodcompare.svg"
                  alt="productcompare"
                  className=""
                />
              </Link>
              <Link>
                <img src="images/view.svg" alt="view" className="" />
              </Link>
              <Link>
                <img src="images/add-cart.svg" alt="add-cart" className="" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="col-sm-12 col-md-6 col-lg-2  ">
        <div className="card cardWidth product-card position-relative">
          <div className="wish-list position-absolute">
            <Link>
              <img src="images/wish.svg" alt="wishlist" className=" " />
            </Link>
          </div>
          <img src="images/watch.jpg" className="card-img-top" alt="..." />
          <div className="product_details">
            <h6 className="brand mr-4">Havel</h6>
          </div>
          <div className="card-body product_details">
            <h5 className="card-text">
              Some quick example text to build on the card title
            </h5>
            <ReactStars
              count={5}
              onChange={ratingChanged}
              size={24}
              //   value="3"
              //   edit={false}
              activeColor="#ffd700"
            />
            <h5 className="price">$500.00</h5>
          </div>
          <div className="action-bar position-absolute">
            <div className="d-flex flex-column gap-8">
              <Link>
                <img
                  src="images/prodcompare.svg"
                  alt="productcompare"
                  className=""
                />
              </Link>
              <Link>
                <img src="images/view.svg" alt="view" className="" />
              </Link>
              <Link>
                <img src="images/add-cart.svg" alt="add-cart" className="" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="col-sm-12 col-md-6 col-lg-2  ">
        <div className="card cardWidth product-card position-relative">
          <div className="wish-list position-absolute">
            <Link>
              <img src="images/wish.svg" alt="wishlist" className=" " />
            </Link>
          </div>
          <img src="images/watch.jpg" className="card-img-top" alt="..." />
          <div className="product_details">
            <h6 className="brand mr-4">Havel</h6>
          </div>
          <div className="card-body product_details">
            <h5 className="card-text">
              Some quick example text to build on the card title
            </h5>
            <ReactStars
              count={5}
              onChange={ratingChanged}
              size={24}
              //   value="3"
              //   edit={false}
              activeColor="#ffd700"
            />
            <h5 className="price">$500.00</h5>
          </div>
          <div className="action-bar position-absolute">
            <div className="d-flex flex-column gap-8">
              <Link>
                <img
                  src="images/prodcompare.svg"
                  alt="productcompare"
                  className=""
                />
              </Link>
              <Link>
                <img src="images/view.svg" alt="view" className="" />
              </Link>
              <Link>
                <img src="images/add-cart.svg" alt="add-cart" className="" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="col-sm-12 col-md-6 col-lg-2 ">
        <div className="card cardWidth">
          <img src="images/watch.jpg" className="card-img-top" alt="..." />
          <div className="card-body">
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
      </div>
      <div className="col-sm-12 col-md-6 col-lg-2 ">
        <div className="card cardWidth">
          <img src="images/watch.jpg" className="card-img-top" alt="..." />
          <div className="card-body">
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
      </div>
      <div className="col-sm-12 col-md-6 col-lg-2 ">
        <div className="card cardWidth">
          <img src="images/watch.jpg" className="card-img-top" alt="..." />
          <div className="card-body">
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
      </div>
      <div className="col-sm-12 col-md-6 col-lg-2 ">
        <div className="card cardWidth">
          <img src="images/watch.jpg" className="card-img-top" alt="..." />
          <div className="card-body">
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
      </div>
      <div className="col-sm-12 col-md-6 col-lg-2 ">
        <div className="card cardWidth">
          <img src="images/watch.jpg" className="card-img-top" alt="..." />
          <div className="card-body">
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
      </div> */}
    </>
  );
};
export default Productcard;
