import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";

import Home from "./pages/Home";
import Games from "./pages/Games";
import FlagQuiz from "./components/Games/FlagQuiz/FlagQuiz";
import Footer from "./components/Footer/Footer";

const Router = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="*" element={<Home />} />
        <Route path="/games" element={<Games />} />
        <Route path="/games/flag-quiz" element={<FlagQuiz />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
