import React from "react";
import { NavLink } from "react-router-dom";
import footerstyles from "./footer.module.css";
const Footer = () => {
  return (
    <footer className={footerstyles.footer}>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <p>&copy; 2023 Elearn Infotech</p>
          </div>
          <div className="col-md-6">
            <p className="text-end">
              Designed by{" "}
              <NavLink to="https://www.enuttech.com/">
                Enut Technologies Pvt Ltd
              </NavLink>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
