import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { Context } from "../../context/context";
import './tabs.css'

function Tabs() {
    
  return (
    <div className="tabs-container row">
      <nav className="bg-dark">
        <ul className="nav">
          <li className="nav-item">
            <NavLink to="/dishes">Dishes</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to='/selecteddishes'>Selected Dishes</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Tabs;
