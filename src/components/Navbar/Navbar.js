import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [hamburger, setHamburger] = React.useState(false);

  const hamburgerHandler = () => {
    setHamburger(!hamburger);
  };

  return (
    <div className="navbar">
      <div className="logo">{/* <img src="" alt="logo" /> */}</div>
      <button
        className={
          "hamburger hamburger--spin" + (hamburger ? " is-active" : "")
        }
        type="button"
        onClick={hamburgerHandler}
      >
        <span className="hamburger-box">
          <span className="hamburger-inner"></span>
        </span>
      </button>

      <div className="nav" style={hamburger ? { display: "block" } : null}>
        <Link
          to="/flag"
          onClick={(e) => (hamburger ? setHamburger((a) => !a) : null)}
        >
          <div>
            <span>Flag</span>
          </div>
        </Link>

        <Link
          to="/r&m"
          onClick={(e) => (hamburger ? setHamburger((a) => !a) : null)}
        >
          <div>
            <span>Rick and Morty</span>
          </div>
        </Link>

        <Link
          to="/pokemon"
          onClick={(e) => (hamburger ? setHamburger((a) => !a) : null)}
        >
          <div>
            <span>Pokemon</span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
