import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import LogoutButton from "./auth/LogoutButton";
import { login } from "../store/session";
import CitySearch from "./CitySearch";
import "./NavCss/Navbar.css";

const NavBar = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.session.user);
  const demoLogin = () => dispatch(login("demo@aa.io", "password"));

  if (!user) {
    return (
      <nav className="no-user">
        <div className="nav-div">
          <div>
            <NavLink
              style={{
                fontFamily: "Quicksand",
                fontSize: "20px",
                textDecoration: "none",
                color: "#FF9505",
              }}
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
              style={{
                textDecoration: "none",
                color: "#FF9505",
                fontSize: "20px",
              }}
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
      <nav className="logged-in">
        <div className="nav-div">
          <div>
            <NavLink
              style={{
                fontFamily: "Quicksand",
                fontSize: "20px",
                textDecoration: "none",
                color: "#FF9505",
              }}
              to="/"
              exact={true}
              activeClassName="active"
            >
              CleanFade
            </NavLink>
          </div>
          <CitySearch />
          <div
            className="navbar__logout"
            style={{
              display: "Flex",
              flexDirection: "row",
              alignItems: "baseline",
              justifyContent: "space-around",
              fontFamily: "Quicksand",
              color: "#FF9505",
            }}
          >
            <div style={{ paddingRight: "15px" }}>
              Welcome, {user.firstname}
            </div>
            <LogoutButton />
          </div>
        </div>
      </nav>
    );
  }
};

export default NavBar;
