import React from "react";
import Breadcrums from "../../pages/Breadcrums/Breadcrums";
import Meta from "../../componets/Meta/Meta";
const ResetPassword = () => {
  return (
    <>
      <Meta title={"Reset Password"} />
      <Breadcrums title="Reset Password" />
      <div className="login-wrapper py-5 home-wrapper-2">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-6 col-lg-12">
              <div className="auth-card">
                <h6 className="title fst-italic text-center py-1">
                  Reset Password
                </h6>

                <form>
                  <div className="mb-3">
                    <input
                      type="password"
                      className="form-control"
                      id="exampleInputPassword1"
                      placeholder="Password"
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="password"
                      className="form-control"
                      id="exampleInputPassword1"
                      placeholder="Confirm Password"
                    />
                  </div>
                  <div className="d-flex justify-content-center gap-15 align-item-center">
                    <button type="submit" className="btn btn-dark btnround">
                      Submit
                    </button>
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

export default ResetPassword;
