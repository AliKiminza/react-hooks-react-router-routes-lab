import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
  <div>
    <NavLink exact to="/">Home</NavLink>
    <NavLink to="/Actors">Actors</NavLink>
    <NavLink to="/Directors">Directors</NavLink>
    <NavLink to="/Movies">Movies</NavLink>
  </div>);
}

export default NavBar;
