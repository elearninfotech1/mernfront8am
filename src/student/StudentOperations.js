import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import studentstyles from "./student.module.css";
import axios from "axios";
const StudentOperations = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:4000/studentmysql")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        alert("no data found");
      });
  });
  const deleteData = (sid) => {
    axios
      .delete(`http://localhost:4000/studentmysql/${sid}`)
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
                <h4>Student Operations</h4>
                <nav aria-label="breadcrumb">
                  <ol class="breadcrumb justify-content-center">
                    <li class="breadcrumb-item">
                      <NavLink to="/">Home</NavLink>
                    </li>
                    <li class="breadcrumb-item active" aria-current="page">
                      Student Operations
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
              <div className="table-responsive">
                <table className="table table-bordered">
                  <thead className="table-primary">
                    <tr>
                      <th scope="col">ID</th>
                      <th scope="col">Name</th>
                      <th scope="col">Address</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.map((stu) => {
                      return (
                        <tr>
                          <td>{stu.id}</td>
                          <td>{stu.name}</td>
                          <td>{stu.address}</td>
                          <td>
                            <button
                              className="btn btn-danger me-4"
                              onClick={(e) => deleteData(stu.id)}
                            >
                              Delete
                            </button>
                            <NavLink to={`/editstudent/${stu.id}`}>
                              <button className="btn btn-warning">Edit</button>
                            </NavLink>
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

export default StudentOperations;
