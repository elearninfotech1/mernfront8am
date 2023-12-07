import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./header.module.css";
const Header = () => {
  return (
    <header className={styles.header}>
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <NavLink className="navbar-brand" to="/">
            Navbar
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/addstudent">
                  Add Student
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/studentoperations">
                  Delete/Edit Student
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/employeedata">
                  Employee Data
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/addemployee">
                  Add Employee
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/employeeoperations">
                  Delete/Edit Employee
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
