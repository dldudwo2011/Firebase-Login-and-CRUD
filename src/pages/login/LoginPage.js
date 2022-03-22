import React, { useState } from "react";

import { Link, useNavigate } from "react-router-dom";

import { AppBar } from "../../components/appbar";

import { FiFacebook, FiTwitter, FiLinkedin } from "react-icons/fi";

import { FcGoogle } from "react-icons/fc";

import { auth } from "libs/firebase";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { MdError } from "react-icons/md";
import { signInWithEmailAndPassword } from "firebase/auth";

function LoginPage(props) {
  let navigator = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function onSignInHandler(e) {
    e.preventDefault();

    const emailInput = document.querySelector("#email").value;
    const passwordInput = document.querySelector("#password").value;

    if (!emailInput && !passwordInput) {
      notify("Please enter email and password.");
      return;
    } else if (!passwordInput) {
      notify("Please enter password.");
      return;
    } else if (!emailInput) {
      notify("Please enter email.");
      return;
    }

    // Auth   password email
    // true go to the dashboard
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        navigator("/dashboard");
      })
      .catch((error) => {
        // add toast messages
        notify(error);
      });
  }

  function notify(error) {
    if (error != null && typeof error == "string") {
      toast.error(error, {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        icon: <MdError />,
      });
    } else {
      toast.error(error.code, {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        icon: <MdError />,
      });
    }
  }

  const styleObj = {
    height: "calc(100vh - 9.5rem)",
  };

  return (
    <>
      <AppBar />
      <ToastContainer />
      <section className="login d-flex align-items-center" style={styleObj}>
        <div className="container-fluid h-custom">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-md-9 col-lg-6 col-xl-5">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                className="img-fluid"
                alt="Sample"
              />
            </div>
            <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
              <form onSubmit={onSignInHandler}>
                <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                  <p className="lead fw-normal mb-0 me-3">Sign in with</p>
                  <button
                    type="button"
                    className="btn btn-primary btn-floating mx-1"
                  >
                    <FiFacebook />
                  </button>

                  <button
                    type="button"
                    className="btn btn-primary btn-floating mx-1"
                  >
                    <FiTwitter />
                  </button>

                  <button
                    type="button"
                    className="btn btn-primary btn-floating mx-1"
                  >
                    <FiLinkedin />
                  </button>
                </div>

                <div className="divider d-flex align-items-center my-4">
                  <p className="text-center fw-bold mx-3 mb-0">Or</p>
                </div>

                <div className="form-outline mb-4">
                  <input
                    type="email"
                    id="email"
                    onChange={(e) => setEmail(e.target.value)}
                    className="form-control form-control-lg"
                    placeholder="Enter a valid email address"
                  />
                  <label className="form-label" htmlFor="form3Example3">
                    Email address
                  </label>
                </div>

                <div className="form-outline mb-3">
                  <input
                    type="password"
                    id="password"
                    onChange={(e) => setPassword(e.target.value)}
                    className="form-control form-control-lg"
                    placeholder="Enter password"
                  />
                  <label className="form-label" htmlFor="form3Example4">
                    Password
                  </label>
                </div>

                <div className="d-flex justify-content-between align-items-center">
                  <div className="form-check mb-0">
                    <input
                      className="form-check-input me-2"
                      type="checkbox"
                      value=""
                      id="form2Example3"
                    />
                    <label className="form-check-label" htmlFor="form2Example3">
                      Remember me
                    </label>
                  </div>
                  <Link to="#!" className="text-body">
                    Forgot password?
                  </Link>
                </div>

                <div className="text-center text-lg-start mt-4 pt-2">
                  <button
                    type="submit"
                    className="btn btn-primary btn-lg"
                    style={{ paddingLeft: 40, paddingRight: 40 }}
                  >
                    Login
                  </button>
                  <p className="small fw-bold mt-2 pt-1 mb-0">
                    Don't have an account?{" "}
                    <Link to="#!" className="link-danger">
                      Register
                    </Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <div className="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-primary">
        <div className="text-white mb-3 mb-md-0">
          Copyright © 2020. All rights reserved.
        </div>
        <div>
          <Link to="#!" className="text-white me-4">
            <FiFacebook />
          </Link>
          <Link to="#!" className="text-white me-4">
            <FiTwitter />
          </Link>
          <Link to="#!" className="text-white me-4">
            <FcGoogle />
          </Link>
          <Link to="#!" className="text-white">
            <FiLinkedin />
          </Link>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
