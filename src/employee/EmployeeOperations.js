import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import studentstyles from "./student.module.css";
import axios from "axios";
const EmployeeOperations = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:4000/employee")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        alert("no data found");
      });
  });
  const deleteData = (eid) => {
    axios
      .delete(`http://localhost:4000/employee/${eid}`)
      .then((res) => {
        alert("Data Deleted Succ....");
      })
      .catch((err) => {
        alert("Unable to Delete the Data");
      });
  };
  return (
    <main>
      <section className={studentstyles.bg_image}>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="text-center">
                <h4>Employee Opearations</h4>
                <nav aria-label="breadcrumb">
                  <ol class="breadcrumb justify-content-center">
                    <li class="breadcrumb-item">
                      <NavLink to="/">Home</NavLink>
                    </li>
                    <li class="breadcrumb-item active" aria-current="page">
                      Employee Opearations
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
            <div className="col-md-12">
              <NavLink to="/addstudent">
                <button className="btn btn-primary mb-3 float-end">+</button>
              </NavLink>
              <div className="clearfix"></div>
              <div className="table-responsive">
                <table className="table table-bordered">
                  <thead className="table-primary">
                    <tr>
                      <th scope="col">Name</th>
                      <th scope="col">Email</th>
                      <th scope="col">Phone</th>
                      <th scope="col">Salary</th>
                      <th scope="col">Address</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.map((emp) => {
                      return (
                        <tr>
                          <td>{emp.name}</td>
                          <td>{emp.email}</td>
                          <td>{emp.phone}</td>
                          <td>{emp.salary}</td>
                          <td>{emp.address}</td>
                          <td>
                            <button
                              className="btn btn-danger me-4"
                              onClick={(e) => deleteData(emp._id)}
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default EmployeeOperations;
