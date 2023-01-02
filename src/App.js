import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Navbar from "./components/Navbar/Navbar.js";
import RickAndMorty from "./pages/RickAndMorty";
import Pokemon from "./pages/Pokemon";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/flag" element={<Home />} />
        <Route path="/r&m" element={<RickAndMorty />} />
        <Route path="/pokemon" element={<Pokemon />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
