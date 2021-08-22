import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useHistory } from "react-router-dom";
import { signUp } from "../../store/session";
import "./SignUpForm.css";

const SignUpForm = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const user = useSelector((state) => state.session.user);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [age, setAge] = useState("");
  const [avatarUrl, setAvatarUrl] = useState("");
  const [preferredHairStyle, setPreferredHairStyle] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  if (user) {
    return <Redirect to="/" />;
  }

  const onSignUp = async (e) => {
    e.preventDefault();
    if (password === repeatPassword) {
      await dispatch(
        signUp({
          username,
          email,
          password,
          firstname,
          lastname,
          age,
          avatarUrl,
          preferredHairStyle,
        })
      );
    }
  };

  const updateUsername = (e) => {
    setUsername(e.target.value);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const updateRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
  };
  const updateFirstName = (e) => {
    setFirstname(e.target.value);
  };
  const updateLastName = (e) => {
    setLastname(e.target.value);
  };
  const updateAge = (e) => {
    setAge(e.target.value);
  };
  const updateAvatarUrl = (e) => {
    setAvatarUrl(e.target.value);
  };
  const updatePreferredHairStyle = (e) => {
    setPreferredHairStyle(e.target.value);
  };

  return (
    <div className="form__container">
      <form className="signup-form" onSubmit={onSignUp}>
        <h2>SIGN-UP FORM</h2>
        <div>
          <input
            className="signup-input"
            placeHolder="Username"
            type="text"
            name="username"
            onChange={updateUsername}
            value={username}
          ></input>
        </div>
        <div>
          <input
            className="signup-input"
            placeHolder="Email"
            type="text"
            name="email"
            onChange={updateEmail}
            value={email}
          ></input>
        </div>
        <div>
          <input
            className="signup-input"
            placeHolder="Enter Password"
            type="password"
            name="password"
            onChange={updatePassword}
            value={password}
          ></input>
        </div>
        <div>
          <input
            className="signup-input"
            placeHolder="Repeat Password"
            type="password"
            name="repeat_password"
            onChange={updateRepeatPassword}
            value={repeatPassword}
            required={true}
          ></input>
        </div>
        <div>
          <input
            className="signup-input"
            placeHolder="First Name"
            type="text"
            name="firstname"
            onChange={updateFirstName}
            value={firstname}
            required={false}
          ></input>
        </div>
        <div>
          <input
            className="signup-input"
            placeHolder="Last Name"
            type="text"
            name="lastname"
            onChange={updateLastName}
            value={lastname}
            required={false}
          ></input>
        </div>
        <div>
          <input
            className="signup-input"
            placeHolder="Age"
            type="number"
            name="age"
            onChange={updateAge}
            value={age}
            required={false}
          ></input>
        </div>
        <div>
          <input
            className="signup-input"
            placeHolder="AvatarUrl"
            type="text"
            name="avatarUrl"
            onChange={updateAvatarUrl}
            value={avatarUrl}
            required={false}
          ></input>
        </div>
        <div>
          <input
            className="signup-input"
            placeHolder="Preferred Hair-Style"
            type="text"
            name="preferredHairStyle"
            onChange={updatePreferredHairStyle}
            value={preferredHairStyle}
            required={false}
          ></input>
        </div>
        <button id="signup-submit" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default SignUpForm;
