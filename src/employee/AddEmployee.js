import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import studentstyles from "./student.module.css";
import axios from "axios";
const AddEmployee = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [salary, setSalary] = useState("");
  const [address, setAddress] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    axios
      .post("https://mernback8am.onrender.com/employee", {
        name,
        email,
        phone,
        salary,
        address,
      })
      .then((res) => {
        alert("Student data added success..");
        setName("");
        setEmail("");
        setPhone("");
        setSalary("");
        setAddress("");
      })
      .catch((err) => {
        alert("unable to add the data");
      });
  };
  return (
    <main>
      <section className={studentstyles.bg_image}>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="text-center">
                <h4>Add Employee</h4>
                <nav aria-label="breadcrumb">
                  <ol class="breadcrumb justify-content-center">
                    <li class="breadcrumb-item">
                      <NavLink to="/">Home</NavLink>
                    </li>
                    <li class="breadcrumb-item active" aria-current="page">
                      Add Employee
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
                      placeholder="Phone"
                      name="phone"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>
                  <div class="mb-4">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Salary"
                      name="salary"
                      value={salary}
                      onChange={(e) => setSalary(e.target.value)}
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
                      value="Add Employee"
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

export default AddEmployee;
