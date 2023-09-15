import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Form, Input, message } from "antd";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Spinner from "../components/Spinner";
import loginimage from "../images/loginimage.png";
const Register = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const submitHandler = async (values) => {
    try {
      setLoading(true);
      await axios.post(
        "https://expensemanagementbackendf.onrender.com/users/register",
        values
      );
      message.success("Registration Successful");
      setLoading(false);
      navigate("/login");
    } catch (error) {
      setLoading(false);
      message.error("Something went wrong");
    }
  };
  useEffect(() => {
    if (localStorage.getItem("user")) {
      navigate("/");
    }
  }, [navigate]);
  return (
    <>
      <div class="" style={{ backgroundColor: "#cdd5b1", height: "100vh" }}>
        <div className=" text-light p-3" style={{ backgroundColor: "#8f957c" }}>
          <h6 className="text-left">Expanse Management System </h6>
        </div>
        {loading && <Spinner />}
        <div
          className="container text-center  register-page"
          style={{ width: "70vw" }}
        >
          <div className="row border  border-1 rounded">
            <div className="col">
              <img
                src={loginimage}
                className="img-fluid"
                alt="Image"
                style={{ height: "100%" }}
              />
            </div>
            <div className="col">
              <Form layout="vertical" onFinish={submitHandler}>
                <h1>Register Form</h1>
                <Form.Item label="Name" name="name">
                  <Input placeholder="Enter your Name" />
                </Form.Item>
                <Form.Item label="Email" name="email">
                  <Input type="email" placeholder="Enter your Gmail" />
                </Form.Item>
                <Form.Item label="Password" name="password">
                  <Input type="password" placeholder="Enter your Password" />
                </Form.Item>
                <div className="d-flex justify-content-between">
                  <Link to="/login">
                    <button type="button " class="btn btn-primary">
                      Existing User? Log in
                    </button>
                  </Link>
                  <button className="btn btn-primary">Register</button>
                </div>
              </Form>
            </div>
          </div>
        </div>

        <div
          className=" text-light p-3 "
          style={{ backgroundColor: "#8f957c" }}
        >
          <h6 className="text-center">All rights reserved &copy; Shivanshu </h6>
        </div>
      </div>
    </>
  );
};

export default Register;
