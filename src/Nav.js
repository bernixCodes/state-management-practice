import React, { useContext } from "react";
import style from "./Nav.module.css";
import { MovieContext } from "./MovieContext";

function Nav() {
  const [movies] = useContext(MovieContext);
  return (
    <div className={style.nav}>
      <h4>Bernie</h4>
      <p>List of Movies :{movies.length}</p>
    </div>
  );
}

export default Nav;
