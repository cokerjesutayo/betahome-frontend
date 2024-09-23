import React from 'react'
import { Link } from "react-router-dom";
import"../styles/signup.css"
import { FcGoogle } from "react-icons/fc";
const SignIn = () => {
  return (
    <section className="signing-section d-flex flex-row vh-100 ">
      <div className="d-flex justify-content-center align-items-center form-part p-1 p-lg-4 ">
        <form className=" p-2 p-lg-5 ">
          <h2>Welcome Back to BetaHouse! </h2>
          <p>Lets get started by filling out the information below</p>

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
          <div className="d-flex my-3 justify-content-between align-items-center">
            <div className=" form-check ">
              <input type="checkbox" id="agree" className="form-check-input" />
              <label htmlFor="agree" className="form-check-label">
                Remember Me
              </label>
            </div>
            <div>
              <label htmlFor="agree" className="form-check-label text-danger">
                Forgot Password
              </label>
            </div>
          </div>

          <div className="my-3">
            <button
              type="submit"
              className="btn btn-success w-100 d-block"
              style={{
                borderRadius: "15px",
                padding: " 7px 10px 7px 10px",
                backgroundColor: "#3D9970",
              }}
            >
              Sign Up
            </button>
          </div>
          <div className="d-flex align-items-center justify-content-center gap-2 mb-3">
            <hr style={{ border: "1px solid #4F4E4E", width: "177px" }} />
            or
            <hr style={{ border: "1px solid #4F4E4E", width: "177px" }} />
          </div>

          <button
            className="btn border border-dark border-2 w-100 mb-3"
            style={{
              borderRadius: "15px",
              padding: " 7px 10px 7px 10px",
            }}
          >
            <FcGoogle />
            Continue with Google
          </button>

          <p className="my-2 text-center ">
            New User?{" "}
            <Link to="/signup" className="text-success text-decoration-none ">
              Sign Up
            </Link>
          </p>
        </form>
      </div>
      <div className="signing-bg d-none d-lg-block w-50"></div>
    </section>
  );
}

export default SignIn