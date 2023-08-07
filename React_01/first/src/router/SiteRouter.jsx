//import React from "react";
import { Route, Routes } from "react-router-dom";
import AddUser from "../components/AddUser";
import Home from "../components/Home";
import AboutUs from "../components/AboutUs";
function SiteRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/adduser" element={<AddUser />} />
      <Route path="/about" element={<AboutUs />} />
    </Routes>
  );
}

export default SiteRouter;
