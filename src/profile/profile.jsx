import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Profile(props) {
  console.log(5, props.data, props.index);
  console.log(6, props.data[props.index]);
  console.log(7, props.index);

  const navigate = useNavigate();

  function updateUser() {
    const password = document.querySelector("#password").value;
    const newPassword = document.querySelector("#newPassword").value;
    const phone = document.querySelector("#phone").value;
    const email = document.querySelector("#email").value;

    if (email && password && phone && newPassword) {
      if (
        email === props.data[props.index].email &&
        password === props.data[props.index].password
      ) {
        let clone = [...props.data];
        clone[props.index].password = newPassword;
        clone[props.index].phone = phone;
        props.update(clone);

        navigate("/signin");
      }
    }
    document.querySelector(".noti").innerHTML = "nhập chưa chính xác";
  }

  return (
    <div>
      <Link to="/">
        <button>Back Home</button>
      </Link>
      <h1>Trang Cá Nhân</h1>

      <p>username: {props.data[props.index].username} </p>
      <p>email: {props.data[props.index].email} </p>
      <p>password: {props.data[props.index].password} </p>

      <p>phone: {props.data[props.index].phone} </p>

      <div className="">
        <h3> thay đổi thông tin</h3>
        <input type="email" id="email" placeholder="email" /> <br />
        <input type="password" id="password" placeholder="password" /> <br />
        <input
          type="password"
          id="newPassword"
          placeholder=" New password"
        />{" "}
        <br />
        <input type="text" id="phone" placeholder="phone" /> <br />
        <button onClick={updateUser}> Update</button>
        <div className="noti"></div>
      </div>
    </div>
  );
}

export default Profile;
