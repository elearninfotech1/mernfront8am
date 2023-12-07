import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import studentstyles from "./student.module.css";
import axios from "axios";

const EditStudent = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const { id } = useParams();
  useEffect(() => {
    axios
      .get(`http://localhost:4000/student/${id}`)
      .then((res) => {
        setName(res.data.name);
        setEmail(res.data.email);
        setAddress(res.data.address);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const submitHandler = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:4000/student/${id}`, { name, email, address })
      .then((res) => {
        alert("Data Updated Succ...");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <main>
      <section className={studentstyles.bg_image}>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="text-center">
                <h4>Edit Student</h4>
                <nav aria-label="breadcrumb">
                  <ol class="breadcrumb justify-content-center">
                    <li class="breadcrumb-item">
                      <NavLink to="/">Home</NavLink>
                    </li>
                    <li class="breadcrumb-item active" aria-current="page">
                      Edit Student
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
                      type="text"
                      name="name"
                      class="form-control"
                      placeholder="Name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div class="mb-4">
                    <input
                      type="email"
                      class="form-control"
                      placeholder="Email ID"
                      name="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div class="mb-4">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Address"
                      name="address"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                    />
                  </div>
                  <div class="mb-4">
                    <input
                      type="submit"
                      class="btn btn-warning"
                      value="Edit Student"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default EditStudent;
