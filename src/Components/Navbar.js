import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
   <>
   <nav className="navbar navbar-expand-lg navbar-light navbar-light shadow-sm p-3 mb-3 bg-body rounded" style={{fontWeight:'bolder'}}>
        <NavLink className="navbar-brand" to="/">Navbar</NavLink>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-5">
            <li className="nav-item active ms-3">
              <NavLink className="nav-link" to="/">Home</NavLink>
            </li>
            <li className="nav-item ms-3">
              <NavLink className="nav-link" to="/contact">Contact</NavLink>
            </li>
            <li className="nav-item ms-3">
              <NavLink className="nav-link" to="/about">About</NavLink>
            </li>

          </ul>
        </div>
      </nav>
   </>
  )
};
export default Navbar;
