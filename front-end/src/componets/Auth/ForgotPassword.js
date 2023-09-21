import React from "react";
import Breadcrums from "../../pages/Breadcrums/Breadcrums";
import Meta from "../../componets/Meta/Meta";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  return (
    <>
      <Meta title={"Forgot Password"} />
      <Breadcrums title="Account" />
      <div className="login-wrapper py-5 home-wrapper-2">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-6 col-lg-12">
              <div className="auth-card">
                <h6 className="title fst-italic text-center">
                  Reset Your Password
                </h6>
                <p className=" fst-italic text-center">
                  we will send to an email to reset your password
                </p>
                <form>
                  <div className="mb-3">
                    <input
                      type="password"
                      className="form-control"
                      id="exampleInputPassword1"
                      placeholder="Enter your register email..."
                    />
                  </div>

                  <div className="d-flex justify-content-center gap-15 align-item-center">
                    <button type="submit" className="btn btn-dark btnround">
                      Submit
                    </button>
                    <Link to="/signup" className="btn btn-dark btnround">
                      Cancle
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForgotPassword;
