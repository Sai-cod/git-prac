import React from "react";
import { Route, Routes } from "react-router";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import { ToastContainer, toast } from "react-toastify";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Routes>
        <Route path="/*" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/home" element={<Home/>} />
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
