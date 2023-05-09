import "./Navbar.css";
import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { user, isAuthenticated, loginWithRedirect, logout } = useAuth0();

  return (
    <>
      <header>
        <div className="brand">
          <a href="/BlogList">Kino </a>
        </div>
        <div>
          <a href="/Favs">Favs</a>
        </div>
        <div>
          <a href="/MustWatch">Must Watch</a>
        </div>
        <div>
          <a href="/">Login/Signup</a>
        </div>
        <div>
          <a href="/dashboard">Dashboard</a>
        </div>
        <div>
          {isAuthenticated ? (
            <button
              onClick={() => {
                logout();
              }}
            >
              Logout
            </button>
          ) : (
            <button
              onClick={() => {
                loginWithRedirect();
              }}
            >
              Login
            </button>
          )}
        </div>
      </header>
    </>
  );
};

export default Navbar;
