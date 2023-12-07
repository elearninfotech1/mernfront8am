import React from "react";
import { Route, Routes } from "react-router-dom";
import StudentData from "./student/StudentData";
import AddStudent from "./student/AddStudent";
import StudentOperations from "./student/StudentOperations";
import EditStudent from "./student/EditStudent";
import EmployeeData from "./employee/EmployeeData";
import AddEmployee from "./employee/AddEmployee";
import EmployeeOperations from "./employee/EmployeeOperations";
import Signup from "./student/Signup";
import Login from "./student/Login";
import ForgotPassword from "./student/ForgotPassword";

const Routing = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<StudentData />} />
        <Route path="/addstudent" element={<AddStudent />} />
        <Route path="/studentoperations" element={<StudentOperations />} />
        <Route path="/editstudent/:sno" element={<EditStudent />} />
        <Route path="/employeedata" element={<EmployeeData />} />
        <Route path="/addemployee" element={<AddEmployee />} />
        <Route path="/employeeoperations" element={<EmployeeOperations />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot" element={<ForgotPassword />} />
      </Routes>
    </div>
  );
};

export default Routing;
