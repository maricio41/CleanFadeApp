import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { signUp } from "../../store/session";
import "./SignUpForm.css"

const SignUpForm = () => {
  const dispatch = useDispatch();
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

  const onSignUp = async (e) => {
    e.preventDefault();
    if (password === repeatPassword) {
      console.log(age);
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
        }
        )
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

  if (user) {
    return <Redirect to="/" />;
  }

  return (
    <div className="form__container">
      <h2>Sign on up!</h2>
      <form onSubmit={onSignUp}>
        <div>
          <label>User Name</label>
          <input
            type="text"
            name="username"
            onChange={updateUsername}
            value={username}
          ></input>
        </div>
        <div>
          <label>Email</label>
          <input
            type="text"
            name="email"
            onChange={updateEmail}
            value={email}
          ></input>
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            name="password"
            onChange={updatePassword}
            value={password}
          ></input>
        </div>
        <div>
          <label>Repeat Password</label>
          <input
            type="password"
            name="repeat_password"
            onChange={updateRepeatPassword}
            value={repeatPassword}
            required={true}
          ></input>
        </div>
        <div>
          <label>First Name</label>
          <input
            type="text"
            name="firstname"
            onChange={updateFirstName}
            value={firstname}
            required={false}
          ></input>
        </div>
        <div>
          <label>Last Name</label>
          <input
            type="text"
            name="lastname"
            onChange={updateLastName}
            value={lastname}
            required={false}
          ></input>
        </div>
        <div>
          <label>Age</label>
          <input
            type="number"
            name="age"
            onChange={updateAge}
            value={age}
            required={false}
          ></input>
        </div>
        <div>
          <label>Avatar Url</label>
          <input
            type="text"
            name="avatarUrl"
            onChange={updateAvatarUrl}
            value={avatarUrl}
            required={false}
          ></input>
        </div>
        <div>
          <label>Preferred Hair Style</label>
          <input
            type="text"
            name="preferredHairStyle"
            onChange={updatePreferredHairStyle}
            value={preferredHairStyle}
            required={false}
          ></input>
        </div>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUpForm;
