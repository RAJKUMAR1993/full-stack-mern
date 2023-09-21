"strict mod";
import React from "react";
import Breadcrums from "../../pages/Breadcrums/Breadcrums";
import Meta from "../../componets/Meta/Meta";
import { AiFillDelete } from "react-icons/ai";
import { Link } from "react-router-dom";
const Cart = () => {
  return (
    <>
      <Meta title={"Cart"} />
      <Breadcrums title="Cart" />
      <section className="cart-wrapper home-wrapper-2 py-3">
        <div className="container">
          <div className="row">
            <div className="col-12 col-6 col-sm-12 col-md-6 col-lg-12">
              <div className="cart-header d-flex justify-content-between align-items-center">
                <h6 className="fw-bold text-secondary cart-col-1">Product</h6>
                <h6 className="fw-bold text-secondary cart-col-2">Price</h6>
                <h6 className="fw-bold text-secondary cart-col-3">Quantity</h6>
                <h6 className="fw-bold text-secondary cart-col-4">Total</h6>
              </div>
              <div className="cart-header d-flex justify-content-between align-item-center">
                <div className="cart-col-1 gap-15 d-flex align-items-center">
                  <div className="w-25 mb-3">
                    <img
                      src="images/watch.jpg"
                      alt="img"
                      className="img-fluid"
                    />
                  </div>
                  <div className="w-75 align-items-center">
                    <p className="">Watch</p>
                    <p className="color">balck</p>
                    <p className="size">small</p>
                  </div>
                </div>
                <div className="cart-col-2 py-5">
                  <div>
                    <h6 className="price">$ 5000</h6>
                  </div>
                </div>
                <div className="cart-col-3 d-flex align-items-center gap-15">
                  <div>
                    <input
                      type="number"
                      min={1}
                      max={10}
                      className="form-control w-60"
                    />
                  </div>
                  <div>
                    <AiFillDelete className="fs-3 text-danger" />
                  </div>
                </div>
                <div className="cart-col-4 py-5">
                  <div>
                    <h6 className="price">$ 5000</h6>
                  </div>
                </div>
              </div>
              <div className="cart-header d-flex justify-content-between align-item-center">
                <div className="cart-col-1 gap-15 d-flex align-items-center">
                  <div className="w-25">
                    <img
                      src="images/watch.jpg"
                      alt="img"
                      className="img-fluid"
                    />
                  </div>
                  <div className="w-75 align-items-center">
                    <p className="">Watch</p>
                    <p className="color">balck</p>
                    <p className="size">small</p>
                  </div>
                </div>
                <div className="cart-col-2 py-5">
                  <div>
                    <h6 className="price">$ 5000</h6>
                  </div>
                </div>
                <div className="cart-col-3 d-flex align-items-center gap-15">
                  <div>
                    <input
                      type="number"
                      min={1}
                      max={10}
                      className="form-control w-60"
                    />
                  </div>
                  <div>
                    <AiFillDelete className="fs-3 text-danger" />
                  </div>
                </div>
                <div className="cart-col-4 py-5">
                  <div>
                    <h6 className="price">$ 5000</h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 py-2 mt-4 ">
              <div className="d-flex justify-content-between align-items-baseline ">
                <Link
                  to="/ourstore"
                  className="button btn-btn-dark text-white "
                >
                  Continue To Shopping
                </Link>
                <div className="d-flex justify-content-end flex-column">
                  <h4>Subtotal : $5000</h4>
                  <p>Taxes and shipping calculated at checkout time.</p>
                  <Link
                    to="/checkout"
                    className="btn btn-dark btn-sm w-25 text-white"
                  >
                    Checkout
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cart;
