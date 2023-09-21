import React, { useEffect } from "react";
import CustomInputs from "../components/CustomInputs";
import { Link, useNavigate } from "react-router-dom";
import { FcKey } from "react-icons/fc";
import { useFormik } from "formik";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { adminLogin } from "../../src/features/auth/authService";
import { toast } from "react-toastify";
const schema = yup
  .object({
    email: yup
      .string()
      .email("email should be valid")
      .required("email is required"),
    password: yup.string().required("password is required"),
  })
  .required();

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, isLoading, isSuccess, message } = useSelector(
    (state) => state.auth
  );
  // console.log("user Details :", user);
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: schema,
    onSubmit: (values) => {
      dispatch(adminLogin(values));
      // alert(JSON.stringify(values, null, 2));
    },
  });
  useEffect(() => {
    if (!user == null || isSuccess) {
      navigate("admin");
      toast.success("login successfully ");
    }
  }, [user, isLoading, isSuccess, message]);

  return (
    <>
      <div
        className="py-5"
        style={{ background: "#607D8B", minHeight: "100vh" }}
      >
        <div className="row">
          <div className="col-md-6"></div>
          <div className="col-md-6"></div>
        </div>
        <div className="my-5  bg-white rounded-3 mx-auto p-3">
          <h3 className="text-center fs-4">
            <span className=" fw-semibold">L</span>ogin
          </h3>
          <p className="text-center fw-semibold">
            Login into your Account continue
          </p>
          <div className="text-error text-center">
            {/* {
              (message.message = "Rejected to login "
                ? "Your are not an Admin !"
                : "")
            } */}
          </div>
          <form action="" onSubmit={formik.handleSubmit}>
            <CustomInputs
              type="text"
              name="email"
              placeholder="Enter User Email"
              id="email"
              className="form-control form-control-sm"
              label="User Email"
              val={formik.values.email}
              oncha={formik.handleChange("email")}
              //onBlur={formik.values.email}
            />
            {formik.touched?.email && formik.errors?.email ? (
              <small className="text-danger">{formik.errors?.email}</small>
            ) : null}
            <CustomInputs
              type="password"
              placeholder=""
              id="pass"
              name="password"
              className="form-control form-control-sm"
              label="Password"
              oncha={formik.handleChange("password")}
              val={formik.values.password}
              //onBlur={formik.values.password}
            />
            {formik.touched?.password && formik.errors?.password ? (
              <small className="text-danger">{formik.errors?.password}</small>
            ) : null}
            <div className="mb-3 text-end">
              <FcKey />
              <Link className="text-decoration-none" to="/forgot-password">
                Forgot Password
              </Link>
            </div>
            <div className="d-grid gap-2 col-6 mx-auto">
              <button className="btn btn-primary" type="submit">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
