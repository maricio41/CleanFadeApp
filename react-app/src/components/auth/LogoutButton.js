import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../store/session";

const LogoutButton = () => {
  const dispatch = useDispatch();
  const onLogout = async (e) => {
    await dispatch(logout());
  };

  return <button style={{fontSize:"20px", fontWeight: "bold", marginRight:"10px", height: "35px", width: "75px"}} onClick={onLogout}>Logout</button>;
};

export default LogoutButton;
