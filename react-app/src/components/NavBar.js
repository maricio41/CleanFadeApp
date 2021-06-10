import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import LogoutButton from "./auth/LogoutButton";
import { login } from "../store/session";
import "./NavCss/Navbar.css"

const NavBar = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.session.user);
  const demoLogin = () => dispatch(login("demo@aa.io", "password"));

  if (!user) {
    return (
      <nav
        style={{
          border: "1px solid rgba(0, 0, 0, 0.25)",
          backgroundColor: "#353531",
          height: "40px",
          fontFamily: "cursive",
          fontSize:"25px",
          color: "#FF9505",
          padding: "2px 10px 2px 10px"
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <div>
            <NavLink
              style={{ fontFamily: "cursive", fontSize:"25px", textDecoration: "none", color: "#FF9505" }}
              to="/"
              exact={true}
              activeClassName="active"
              className="navbar__logo"
            >
              CleanFade
            </NavLink>
          </div>
          <div>
            <NavLink
              style={{ textDecoration: "none", color: "#FF9505", fontSize: "25px" }}
              to="/login"
              exact={true}
              activeClassName="active"
            >
              Login
            </NavLink>
          </div>
          <div>
            <NavLink
              style={{ textDecoration: "none", color: "#FF9505" }}
              to="/sign-up"
              exact={true}
              activeClassName="active"
            >
              Sign Up
            </NavLink>
          </div>
          <div>
            <NavLink
              onClick={demoLogin}
              style={{ textDecoration: "none", color: "#FF9505" }}
              to="/"
              exact={true}
              activeClassName="active-login"
            >
              Demo
            </NavLink>
          </div>
        </div>
      </nav>
    );
  } else {
    return (
      <nav
        style={{
          border: "1px solid rgba(0, 0, 0, 0.25)",
          backgroundColor: "#242f40",
          height: "40px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
         <div>
            <NavLink
              style={{ fontFamily: "cursive", fontSize:"25px", textDecoration: "none", color: "#FF9505" }}
              to="/"
              exact={true}
              activeClassName="active"
            >
              CleanFade
            </NavLink>
          </div>
          <div className="navbar__logout" >
            <LogoutButton />
          </div>
        </div>
      </nav>
    );
  }
};

export default NavBar;
