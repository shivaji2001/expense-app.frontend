import React from "react";
import { useState } from "react";
import { Form, Input, message } from "antd";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Spinner from "../components/Spinner";
import Header from "../components/Layouts/Header";
import loginimage from "../images/loginimage.png";
const Login = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const submitHandler = async (values) => {
    try {
      setLoading(true);
      const { data } = await axios.post(
        "https://expensemanagementbackendf.onrender.com/users/login",
        values
      );
      setLoading(false);
      message.success("login success");
      localStorage.setItem(
        "user",
        JSON.stringify({ ...data.user, password: "" })
      );
      navigate("/");
    } catch (error) {
      message.error("Something went Wromg");
    }
  };
  return (
    <>
      <div
        class="login-page"
        style={{ backgroundColor: "#cdd5b1", height: "100vh" }}
      >
        {/* bg-dark text-light p-4 */}
        <div className=" text-light p-3" style={{ backgroundColor: "#8f957c" }}>
          <h6 className="text-left">Expanse Management System </h6>
        </div>
        {loading && <Spinner />}
        {/* body part */}

        <div
          className="container text-center register-page   "
          style={{ width: "70vw" }}
        >
          <div className="row border border-2 rounded">
            <div className="col">
              <img
                src={loginimage}
                class="img-fluid"
                alt="Image"
                style={{ height: "100%" }}
              />
            </div>
            <div className="col">
              <Form layout="vertical" onFinish={submitHandler}>
                <h1>Login Form</h1>

                <Form.Item label="Email" name="email" placeholder>
                  <Input type="email" placeholder="xyz@gmail.com" />
                </Form.Item>
                <Form.Item label="Password" name="password">
                  <Input type="password" placeholder="*****" />
                </Form.Item>
                <div className="d-flex justify-content-between">
                  <Link to="/register">
                    {" "}
                    <button type="button" class="btn btn-primary">
                      Register
                    </button>
                  </Link>
                  <button className="btn btn-primary">Login</button>
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

export default Login;
