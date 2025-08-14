import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  FaHome,
  FaBuilding,
  FaUser,
  FaSignOutAlt,
  FaHeart,
} from "react-icons/fa";
import logo from "../assets/logo.jpg";
import { NavLink, useNavigate } from 'react-router-dom';

const Sidebar = () => {
  const navigate = useNavigate();
  return (
    <div
      style={{
        width: "240px",
        height: "100vh",
        backgroundColor: "#ffffffff",
        color: "#5a4d9d",
        display: "flex",
        flexDirection: "column",
        position: "fixed",
        left: 0,
        top: 0,
        padding: "20px 0",
        boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",
      }}
    >
      {/* Logo */}
      <div className="mb-3 mx-2">
        {/* <h3 className='text-center text-bold'>REAL ESTATE</h3> */}
        <img src={logo} alt="realestate-logo" height="60px" width="100%" />
      </div>

      {/* Menu */}
      <div className="flex-grow-1">
        <ul className="nav flex-column px-3">
          <li className="nav-item mb-3">
            <NavLink to="/property-list">
            <a
              href="#"
              className="nav-link text-dark d-flex align-items-center gap-2"
            >
              <FaHome /> Dashboard
            </a>
            </NavLink>
          </li>
          <li className="nav-item mb-3">
            <a
              href="#"
              className="nav-link text-dark d-flex align-items-center gap-2"
            >
              <FaBuilding /> Properties
            </a>
          </li>
          <li className="nav-item mb-3">
            <NavLink to="/user-profile">
            <a
              href="#"
              className="nav-link text-dark d-flex align-items-center gap-2"
            >
              <FaUser /> Profile
            </a>
            </NavLink>
          </li>
          <li className="nav-item mb-3">
            <NavLink to="/favourites">
            <a
              href="#"
              className="nav-link text-dark d-flex align-items-center gap-2"
            >
              <FaHeart /> Favourites
            </a>
            </NavLink>
          </li>
        </ul>
      </div>

      {/* Logout Button at Bottom */}
      <div className="px-3">
        <button
          className="btn w-100 d-flex align-items-center justify-content-center gap-2"
          style={{
            backgroundColor: "#664a8dff",
            color: "#fff",
            borderRadius: "8px",
          }}
          onClick={() => {
            localStorage.clear();
            navigate('/login');
          }}
        >
          <FaSignOutAlt /> Logout
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
