import React from "react";
import CustomInputs from "../components/CustomInputs";

const ForgotPassword = () => {
  return (
    <>
      <div
        className="py-5"
        style={{ background: "#607D8B", minHeight: "100vh" }}
      >
        <div className="my-5 w-50 bg-white rounded-3 mx-auto p-3">
          <h3 className="text-center fs-4">
            <span className=" fw-semibold"></span>Forgot Password
          </h3>
          <p className="text-center ">
            Please Enter your Register Email to get reset password mail Link
          </p>
          <form action="">
            <CustomInputs
              type="email"
              placeholder="Registered Email"
              id="email"
              className="form-control form-control-sm"
              label="Enter Register Email"
            />

            <div className="d-grid gap-2 col-6 mx-auto">
              <button className="btn btn-primary" type="button">
                Send link
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ForgotPassword;
