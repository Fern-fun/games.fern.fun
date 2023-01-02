import React from "react";
import Footer from "../components/Footer/Footer";
import PokemonGame from "../components/PokemonGame/PokemonGame";

function Pokemon() {
  return (
    <div className="pageContainer">
      <div className="pageTitle"></div>

      <div className="pageContent">
        <div className="pageContentGuessGame">
          <PokemonGame />
        </div>
      </div>

      <div className="pageFooter">
        <Footer />
      </div>
    </div>
  );
}

export default Pokemon;
