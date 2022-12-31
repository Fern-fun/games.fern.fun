import React from "react";
import Flags from "../components/Flags/Flags";
import Footer from "../components/Footer/Footer";

function Home() {
  return (
    <div className="pageContainer">
      <div className="pageTitle"></div>

      <div className="pageContent">
        <div className="pageContentGuessGame">
          <Flags />
        </div>
      </div>

      <div className="pageFooter">
        <Footer />
      </div>
    </div>
  );
}

export default Home;
