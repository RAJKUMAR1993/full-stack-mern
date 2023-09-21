import React from "react";
import Breadcrums from "../../pages/Breadcrums/Breadcrums";
import Meta from "../../componets/Meta/Meta";

const Signup = () => {
  return (
    <>
      <Meta title={"Signup"} />
      <Breadcrums title="Signup" />
      <div className="login-wrapper py-5 home-wrapper-2">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-6 col-lg-12">
              <div className="auth-card">
                <h5 className="title fst-italic text-center">Signup</h5>
                <form>
                  <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                    />
                  </div>
                  <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                    />
                  </div>
                  <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">
                      Email
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                    />
                  </div>
                  <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">
                      Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="exampleInputPassword1"
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

export default Signup;
