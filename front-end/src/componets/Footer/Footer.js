import React from "react";
import { Link } from "react-router-dom";
import { BsLinkedin, BsInstagram, BsGithub, BsYoutube } from "react-icons/bs";

const Footer = () => {
  return (
    <>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row aline-items-center">
            <div className="col-sm-12 col-md-6 col-lg-6">
              <div className="footer-top-data d-flex gap-3o aline-items-center">
                <img
                  src="/images/newsletter.png"
                  alt="newsletter"
                  className=""
                />
                <h5 className="mb-0 ml-6 text-white">
                  Sign up for New Letter for
                </h5>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-6">
              <div className="input-group mb-2">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Email....."
                  aria-label="Email....."
                />
                <button className="input-group-text " id="basic-addon2">
                  <span className=" " id="basic-addon2">
                    Subscribe
                  </span>

                  {/* <BsSearch className="fs-6" /> */}
                </button>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-3">
        <div className="container-xxl">
          <div className="row">
            <div className="col-sm-12 col-md-6 col-lg-3">
              <h6 className="mb-4 text-uppercase text-white">Contact US</h6>
              <div className="footer-links d-flex flex-column">
                <address className="text-white">
                  Hno : 1-52/11 kansas , lonavati <br />
                  USA ,Pincode: 2987664
                </address>
                <a
                  href="tel:+91 9848604561"
                  className="mt-0 d-block mb-1 text-white"
                >
                  9848604561
                </a>
                <a
                  href="mailto: rajkumarramineni19@gmail.com"
                  className="mt-0 d-block mb-1 text-white"
                >
                  rajkumarramineni19@gmail.com
                </a>
                <div className="social-links d-flex aline-items-center gap-30">
                  <a href="http://">
                    <BsLinkedin className="text-white fs-4" />
                  </a>
                  <a href="http://">
                    <BsInstagram className="text-white fs-4" />
                  </a>
                  <a href="http://">
                    <BsGithub className="text-white fs-4" />
                  </a>
                  <a href="http://">
                    <BsYoutube className="text-white fs-4" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-3">
              <h6 className="mb-4 text-uppercase text-white">Information</h6>
              <div className="footer-links d-flex flex-column">
                <Link to="/privacy-policy" className="text-white py-2 mb-1">
                  Privacy policy
                </Link>
                <Link to="/refound" className="text-white py-2 mb-1">
                  Refund Policy
                </Link>
                <Link to="/shipping-policy" className="text-white py-2 mb-1">
                  Shipping policy
                </Link>
                <Link to="/tram-conditions" className="text-white py-2 mb-1">
                  Terms&Conditions
                </Link>
                <Link to="/blog" className="text-white py-2 mb-1">
                  Blogs
                </Link>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-3">
              <h6 className="mb-4 text-uppercase text-white">Account </h6>
              <div className="footer-links d-flex flex-column">
                <Link to="/" className="text-white py-2 mb-1">
                  About us
                </Link>
                <Link to="/" className="text-white py-2 mb-1">
                  Faq
                </Link>
                <Link to="/" className="text-white py-2 mb-1">
                  Contact
                </Link>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-3">
              <h6 className="mb-4 text-uppercase text-white">Quick Links</h6>
              <div className="footer-links d-flex flex-column">
                <Link to="/" className="text-white py-2 mb-1">
                  Loptops
                </Link>
                <Link to="/" className="text-white py-2 mb-1">
                  Headphones
                </Link>
                <Link to="/" className="text-white py-2 mb-1">
                  Tablets
                </Link>
                <Link to="/" className="text-white py-2 mb-1">
                  Watchs
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-sm-12 col-md-6 col-lg-12">
              <p className="text-center mb-0 text-white text-bold">
                &copy; {new Date().getFullYear()}; Powered by Developer :
                Rajkumar 👩‍💻
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
