import React from "react";
import Footer from "../components/Footer/Footer";
import RANDM from "../components/R&M/R&M";

function RickAndMorty() {
  return (
    <div className="pageContainer">
      <div className="pageTitle"></div>

      <div className="pageContent">
        <div className="pageContentGuessGame">
          <RANDM />
        </div>
      </div>

      <div className="pageFooter">
        <Footer />
      </div>
    </div>
  );
}

export default RickAndMorty;
