import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

import Home from "./home/Home";
import Signin from "./signin/Signin";
import Signup from "./signup/Signup";
import Profile from "./profile/profile";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import Error from "./error/Error";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [data, setData] = useState([
    {
      username: "mrcuong1996",
      email: "vanlytuongtuluv@gmail.com",
      password: "123",
      phone: "0967721996",
      friend: [],
    },

    {
      username: "dangcuong",
      email: "dangcuong@gmail.com",
      password: "1234",
      phone: "123456",
      friend: [],
    },

    {
      username: "dangcuong1996",
      email: "dangcuong1996@gmail.com",
      password: "12345",
      phone: "999999",
      friend: [],
    },
  ]);

  console.log(99, data);

  // xác định vị trí
  const [user, setUser] = useState(0);

  function changeData(newData) {
    setData(newData);
  }

  function updateData(newData) {
    setData(newData);
  }

  function login(newData) {
    setUser(newData);
  }

  return (
    <BrowserRouter>
      <div className="App">
        <Header user={user}></Header>
        <Routes>
          <Route
            path="/"
            element={<Home data={data} updateData={changeData}></Home>}
          ></Route>

          <Route
            path="/signin"
            element={<Signin data={data} login={login}></Signin>}
          ></Route>

          <Route
            path="/signup"
            element={<Signup allData={data} AddUserApp={changeData}></Signup>}
          ></Route>

          <Route
            path="/profile"
            element={
              <Profile data={data} index={user} update={updateData}></Profile>
            }
          ></Route>
        </Routes>

        {/* <Route path="*" element={<Error></Error>}></Route> */}

        <Footer></Footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
