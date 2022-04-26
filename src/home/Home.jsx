import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

function Home(props) {
  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
    phone: "",
    friend: [],
  });

  function getUser() {
    const username = document.querySelector("#username").value;
    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;
    const friend = document.querySelector("#friend").value;

    let newData = [
      ...props.data,
      { username: username, email: email, password: password, friend: friend },
    ];
    props.changeData(newData);
  }

  return (
    <div>
      <Link to="./header"></Link>

      <h1>WellCome To Home</h1>
      <h2>{props.data.username}</h2>

      <Link to="./signup">
        <button>Đăng Ký</button>
      </Link>
      <Link to="./signin">
        <button>Đăng Nhập</button>
      </Link>

      <Link to="./profile">
        <button>Profile</button>
      </Link>

      <Link to="./footer"></Link>
    </div>
  );
}

export default Home;
