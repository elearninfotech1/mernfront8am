import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import studentstyles from "./student.module.css";
import axios from "axios";
const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const submitHandler = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:4000/forgot", {
        email,
      })
      .then((res) => {
        document.getElementById("password").innerHTML =
          "Your Password is " + res.data.password;
      })
      .catch((err) => {
        alert("No User Found");
      });
  };
  return (
    <main>
      <section className={studentstyles.bg_image}>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="text-center">
                <h4>Forgot Password</h4>
                <nav aria-label="breadcrumb">
                  <ol class="breadcrumb justify-content-center">
                    <li class="breadcrumb-item">
                      <NavLink to="/">Home</NavLink>
                    </li>
                    <li class="breadcrumb-item active" aria-current="page">
                      Forgot Password
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="my-5">
        <div className="container">
          <div className="row">
            <div className="col-md-4"></div>
            <div className="col-md-4">
              <div className={studentstyles.bx_shadow}>
                <form onSubmit={submitHandler}>
                  <div class="mb-4">
                    <input
                      type="email"
                      name="email"
                      class="form-control"
                      placeholder="Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div class="mb-4">
                    <input
                      type="submit"
                      class="btn btn-warning"
                      value="Forgot Password"
                    />
                  </div>
                </form>

                <div id="password"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ForgotPassword;
