import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { login } from "../../store/session";
import "./LoginForm.css";

const LoginForm = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.session.user);
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onLogin = async (e) => {
    e.preventDefault();
    const data = await dispatch(login(email, password));
    if (data.errors) {
      setErrors(data.errors);
    }
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  if (user) {
    return <Redirect to={`/users/${user.id}`} />;
  }

  return (
    <div className="loginform__container">
      <form className="loginform__actual" onSubmit={onLogin}>
        <div className="login__error-container">
          {errors.map((error) => (
            <div className="error-notification">{error}</div>
          ))}
        </div>
        <div>
          <div className="login-title">
            <h1>Login</h1>
          </div>

          <input
            className="login-inputs"
            name="email"
            type="text"
            placeholder="Email"
            value={email}
            onChange={updateEmail}
          />
        </div>
        <div>
          <input
            className="login-inputs"
            name="password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={updatePassword}
          />
        </div>
        <button className="login-submit" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
