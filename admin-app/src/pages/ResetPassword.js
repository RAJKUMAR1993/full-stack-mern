import React from "react";
import CustomInputs from "../components/CustomInputs";

const ResetPassword = () => {
  return (
    <>
      <div
        className="py-5"
        style={{ background: "#607D8B", minHeight: "100vh" }}
      >
        <div className="my-5 w-50 bg-white rounded-3 mx-auto p-3">
          <h3 className="text-center fs-4">
            <span className=" fw-semibold">Reset Password</span>
          </h3>
          <p className="text-center fw-semibold">
            Please Enter your new password
          </p>
          <form action="">
            <CustomInputs
              type="password"
              placeholder="New password"
              id="password"
              className="form-control form-control-sm"
              label="New password"
            />
            <CustomInputs
              type="password"
              placeholder="Confirm Password"
              id="newPass"
              className="form-control form-control-sm"
              label="Confirm Password"
            />
            <div className="d-grid gap-2 col-6 mx-auto">
              <button className="btn btn-primary" type="button">
                update Password
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ResetPassword;
