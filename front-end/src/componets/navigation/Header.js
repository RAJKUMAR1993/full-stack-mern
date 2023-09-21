import React from "react";
import { Link, NavLink } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import { AiOutlineBars } from "react-icons/ai";
// import { useSelector } from "react-redux";

const Header = () => {
  // const { amount } = useSelector((state) => state.cart);
  return (
    <>
      <nav className="header-top-strip py-1">
        <div className="container-fluid">
          <div className="row">
            <div className="col-6">
              <p className="text-white mt-2">
                Free Shipping over 1000 free Return
              </p>
            </div>
            <div className="col-6">
              <p className="text-end text-white mt-2">
                Mobile :
                <a className="text-white" href="tel: +91 9848604561">
                  <strong> 9848604561</strong>
                </a>
              </p>
            </div>
          </div>
        </div>
      </nav>
      <header className="header-upper py-1">
        <div className="container-xxl ">
          <div className="row aline-items-center">
            <div className="col-2 mt-2">
              <h4>
                <Link className="text-white text-decoration-none textCorner">
                  Dev <span className="text-info">Corner</span>
                  <span className="text-info">.</span>
                </Link>
              </h4>
            </div>
            <div className="col-5 mt-2">
              <div className="input-group mb-2">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search Products Here....."
                  aria-label="Search Products Here....."
                />
                <button
                  className="input-group-text btn btn-success"
                  id="basic-addon2"
                >
                  <BsSearch className="fs-6" />
                </button>
              </div>
            </div>
            <div className="col-5 my-2">
              <div className="header-upper-links d-flex aline-item-center justify-content-between ">
                <div className="">
                  <Link
                    to="/compare-product"
                    className="d-flex aline-items-center gap-10 text-white"
                  >
                    <img src="/images/compare.svg" alt="" />
                    <p className="textdecorationnone mb-0">
                      <span>Compare Product</span>
                    </p>
                  </Link>
                </div>
                <div className="">
                  <Link
                    to="/wish-list"
                    className="d-flex aline-items-center gap-10 text-white"
                  >
                    <img src="/images/wishlist.svg" alt="" />
                    <p className="text-decoration-none mb-0">
                      <span>wishlist</span>
                    </p>
                  </Link>
                </div>
                <div className="">
                  <Link
                    to="/login"
                    className="d-flex aline-items-center gap-10 text-white"
                  >
                    <img src="/images/user.svg" alt="" />
                    <p className="textdecorationnone mb-2">
                      <span>My Account</span>
                    </p>
                  </Link>
                </div>
                <div className="">
                  <Link
                    to="/cart"
                    className="d-flex aline-items-center gap-10 text-white"
                  >
                    <img
                      src="/images/cart.svg"
                      alt=""
                      style={{ marginBottom: "15px" }}
                    />
                    <div className="d-flex flex-column gap-10">
                      <span className="badge bg-white text-dark mb-10">0</span>
                      <p className="mb-0 text-success fw-bold">$ {0}</p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <header className="header-bottom py-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="menu-bottom d-flex aline-items-center gap-30 mt-2">
                <div>
                  <div className="dropdown ">
                    <button
                      className="btn btn-secondary dropdown-toggle bg-transparent aline-items-center"
                      type="button"
                      id="dropdownMenuButton1"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <AiOutlineBars className="mb-1" />
                      <span className="me-5 d-inline-block">
                        Shop categories
                      </span>
                    </button>
                    <ul
                      id="transfmation"
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenuButton1"
                    >
                      <li>
                        <Link to="/" className="dropdown-item text-white">
                          Action
                        </Link>
                      </li>
                      <li>
                        <Link to="/" className="dropdown-item text-white">
                          Another action
                        </Link>
                      </li>
                      <li>
                        <Link to="/" className="dropdown-item text-white">
                          Something else here
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="menu-links">
                  <div className="d-flex aline-items-center gap-15">
                    <NavLink className="mt-2" index to="/">
                      Home
                    </NavLink>
                    <NavLink className="mt-2" to="/ourstore">
                      Our Store
                    </NavLink>
                    <NavLink className="mt-2" to="/blog">
                      Blogs
                    </NavLink>
                    <NavLink className="mt-2" to="/contact">
                      Contact
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
