import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faUser, faPhone } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
//import facebook from "C:expanse 328expanse-management-systemclientsrcimages\facebook.svg";
const Footer = () => {
  return (
    <div className=" text-light p-4" style={{ backgroundColor: "#8f957c" }}>
      <div className="container mb-3">
        <div className="row text-center">
          <div className="col-sm">
            <Link
              to="https://mail.google.com/mail/u/0/#inbox"
              style={{ textDecoration: "none" }}
            >
              <FontAwesomeIcon icon={faEnvelope} />
            </Link>
          </div>
          <div className="col-sm">
            <Link to="https://www.linkedin.com/in/shivaji99/">
              <FontAwesomeIcon icon={faUser} />
            </Link>
          </div>
          <div className="col-sm">
            <Link to="https://github.com/shivaji2001">
              <FontAwesomeIcon className="fa-light fa-lg" icon={faPhone} />
            </Link>
          </div>
        </div>
      </div>

      <h6 className="text-center">
        All rights reserved &copy; Shivanshu Singh
      </h6>
    </div>
  );
};

export default Footer;
