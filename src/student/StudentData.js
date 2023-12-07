import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import studentstyles from "./student.module.css";
import axios from "axios";
const StudentData = () => {
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
  }, []);
  const searchHandler = (e) => {
    let key = e.target.value;
    if (key) {
      axios
        .get(`http://localhost:4000/search/${key}`)
        .then((res) => {
          setData(res.data);
        })
        .catch((err) => {
          alert("no data found");
        });
    }
  };
  return (
    <main>
      <section className={studentstyles.bg_image}>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="text-center">
                <h4>Student Data</h4>
                <nav aria-label="breadcrumb">
                  <ol class="breadcrumb justify-content-center">
                    <li class="breadcrumb-item">
                      <NavLink to="/">Home</NavLink>
                    </li>
                    <li class="breadcrumb-item active" aria-current="page">
                      Student Data
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
              <input
                type="text"
                placeholder="Search Here.."
                onChange={searchHandler}
              />
              <NavLink to="/addstudent">
                <button className="btn btn-primary mb-3 float-end">+</button>
              </NavLink>
              <div className="clearfix"></div>
              <div className="table-responsive">
                <table className="table table-bordered">
                  <thead className="table-primary">
                    <tr>
                      <th scope="col">ID</th>
                      <th scope="col">Name</th>
                      <th scope="col">Address</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.map((stu) => {
                      return (
                        <tr>
                          <td>{stu.id}</td>
                          <td>{stu.name}</td>
                          <td>{stu.address}</td>
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

export default StudentData;
