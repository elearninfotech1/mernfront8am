import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";
import studentstyles from "./student.module.css";
import axios from "axios";
const EditStudent = () => {
  const [id, setID] = useState("");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const { sno } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get(`http://localhost:4000/studentmysql/${sno}`)
      .then((res) => {
        setID(res.data[0].id);
        setName(res.data[0].name);
        setAddress(res.data[0].address);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const submitHandler = (e) => {
    //alert(address);
    e.preventDefault();
    axios
      .put(`http://localhost:4000/studentmysql/${sno}`, { id, name, address })
      .then((res) => {
        alert("Data Updated Succe..");
        navigate("/");
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
                      name="id"
                      class="form-control"
                      placeholder="ID"
                      value={id}
                      onChange={(e) => setID(e.target.value)}
                    />
                  </div>
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
                      value="Add Student"
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
