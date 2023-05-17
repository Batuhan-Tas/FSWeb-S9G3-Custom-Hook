import React, { useEffect } from "react";
import { useLocalStorage } from "../hooks/localStorageKullan";

const Navbar = (props) => {
  const toggleMode = (e) => {
    e.preventDefault();
    props.geceModuHandler();
  };

  return (
    <nav className="navbar">
      <h1>Kripto İzleyici</h1>
      <div className="dark-mode__toggle">
        <div
          onClick={toggleMode}
          className={props.geceModu ? "toggle toggled" : "toggle"}
        />
      </div>
    </nav>
  );
};

export default Navbar;
