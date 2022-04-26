import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Signup(props) {
  const navigate = useNavigate();

  function addUser() {
    const username = document.querySelector("#username").value;
    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;
    const phone = document.querySelector("#phone").value;
    console.log(12, props.allData);
    if (username && email && password && phone) {
      props.AddUserApp([
        ...props.allData,
        { username: username, email: email, password: password, phone: phone },
      ]);
      navigate("/");
    }
  }

  return (
    <div className="">
      <h1> Đăng Ký Tài Khoản </h1>
      <Link to="/">
        <button>Back Home</button>
      </Link>
      <br />
      <input type="text" id="username" placeholder="username" /> <br />
      <input type="email" id="email" placeholder="email" /> <br />
      <input type="password" id="password" placeholder="password" /> <br />
      <input type="text" id="phone" placeholder="phone" /> <br />
      <button onClick={addUser}>Sign Up</button>
    </div>
  );
}

export default Signup;
