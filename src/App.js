import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Navbar from "./components/Navbar/Navbar.js";
import RickAndMorty from "./pages/RickAndMorty";
import Pokemon from "./pages/Pokemon";

function App() {
  const [isOn, setIsOn] = React.useState(true);

  React.useEffect(() => {
    fetch("https://api.fern.fun/").catch((err) => setIsOn(false));
  }, []);

  return (
    <>
      {isOn ? (
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route index element={<Home />} />
            <Route path="/flag" element={<Home />} />
            <Route path="/r&m" element={<RickAndMorty />} />
            <Route path="/pokemon" element={<Pokemon />} />
          </Routes>
        </BrowserRouter>
      ) : (
        <div className="loading">
          <h1>API Offline</h1>
        </div>
      )}
    </>
  );
}

export default App;
