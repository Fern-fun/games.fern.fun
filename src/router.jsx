import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar/Navbar";

import Home from "./Pages/Home";
import Games from "./Pages/Games";


const Router = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="*" element={<Home />} />
        <Route path="/games" element={<Games />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
