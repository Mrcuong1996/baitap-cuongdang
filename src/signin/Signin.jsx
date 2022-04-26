import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

function Signin(props) {
  const navigate = useNavigate();

  function login() {
    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;
    for (let i = 0; i < props.data.length; i++) {
      if (
        email === props.data[i].email &&
        password === props.data[i].password
      ) {
        props.login(i);
        navigate("/");
        break;
      }
    }
    document.querySelector(".info-error").innerHTML =
      "Sai Tên Tài Khoản Hoặc Mật Khẩu";
  }

  return (
    <div className="">
      <Link onClick={login} to="/">
        <button>Back Home</button>
      </Link>
      <h1> Đăng Nhập </h1>
      <input type="email" id="email" placeholder="email" /> <br />
      <input type="password" id="password" placeholder="password" /> <br />
      <button onClick={login}>Đăng Nhập</button>
      <div className="info-error"></div>
    </div>
  );
}

export default Signin;
