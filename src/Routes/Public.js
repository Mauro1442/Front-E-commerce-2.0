import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Detail from "../Pages/Detail";
import Buy from "../Pages/Buy";
import Home from "../Pages/Home";
import NotFound from "../Pages/NotFound";
import Signin from "../Pages/Signin";
import Login from "../Pages/Login";

export default function Public(props) {

const {setLogin} = props

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Navigate to="/" />} />
      <Route path="/product/:id" element={<Detail />} />
      <Route path="/buy" element={<Buy />} />
      <Route path="/log" element={<Login setLogin={props.setLogin}/>} />
      <Route path="/sign" element={<Signin />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
