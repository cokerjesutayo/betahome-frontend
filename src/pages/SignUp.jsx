import React from "react";
import "../styles/signup.css";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
const SignUp = () => {
  return (
    <section className="signing-section d-flex flex-row ">
      <div className="d-flex justify-content-center align-items-center form-part p-1 p-lg-4 ">
        <form className=" p-2 p-lg-5 ">
          <h2>
            Join our community of home seekers and explore the possibilities
            that await.{" "}
          </h2>
          <p>Lets get started by filling out the information below</p>
          <div className="d-lg-flex align-items-between justify-content-between gap-2">
            <div>
              <label htmlFor="fname" className="form-label">
                First Name
              </label>
              <input
                type="text"
                id="fname"
                className="form-control"
                placeholder="Enter Name"
              />
            </div>
            <div>
              <label htmlFor="lname" className="form-label">
                Last Name
              </label>
              <input
                type="text"
                id="lname"
                className="form-control"
                placeholder="Enter Name"
              />
            </div>
          </div>
          <div className="my-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="form-control"
              placeholder="Enter your Email"
            />
          </div>
          <div className="my-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="form-control"
              placeholder="Enter your password"
            />
          </div>
          <div className="my-3">
            <label htmlFor="cpassword" className="form-label">
              Confirm Password
            </label>
            <input
              type="password"
              id="cpassword"
              className="form-control"
              placeholder="Confirm your password"
            />
          </div>
          <div className="my-3 form-check">
            <input type="checkbox" id="agree" className="form-check-input" />
            <label htmlFor="agree" className="form-check-label">
              I agree to <span className="text-success">Terms of Service</span>{" "}
              and <span className="text-success">Privacy Policies</span>
            </label>
          </div>
          <div className="my-3">
            <button
              type="submit"
              className="btn text-white  w-100 d-block "
              style={{
                borderRadius: "15px",
                padding: " 7px 10px 7px 10px",
                backgroundColor: "#3D9970",
              }}
            >
              Sign Up
            </button>
          </div>
          <div className="d-flex align-items-center justify-content-center gap-2">
            <hr style={{ border: "1px solid #4F4E4E", width: "177px" }} />
            or
            <hr style={{ border: "1px solid #4F4E4E", width: "177px" }} />
          </div>

          <button
            className="btn border border-dark border-2 w-100 mb-4 "
            style={{
              borderRadius: "15px",
              padding: " 7px 10px 7px 10px",
            }}
          >
           
            <FcGoogle />
            Continue with Google
          </button>

          <p className="my-2 text-center">
            Already have an account?{" "}
            <Link to="/signin" className="text-success text-decoration-none">
              Sign in
            </Link>
          </p>
        </form>
      </div>
      <div className="signing-bg d-none d-lg-block w-50"></div>
    </section>
  );
};

export default SignUp;
