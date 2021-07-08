import TextField from "./components/TextField.js";
import React from "react";
import "./signup.css";
import uploadButton from "./assets/uploadButton.png";
import { Link } from "react-router-dom";

function SignUpForm({ onChangeName, onChangeEmail, onChangeFile }) {
  return (
    <form className="form">
      <h2>Sign Up</h2>
      <TextField onChange={onChangeName} type={"text"} property={"Name"} />
      <br></br>
      <TextField onChange={onChangeEmail} type={"text"} property={"Email"} />
      <br></br>
      <TextField onChange={null} type={"password"} property={"Password"} />
      <br></br>
      <div>
        <h3> Upload Profile Picture </h3>

        <input
          id="inputImage"
          type="file"
          onChange={onChangeFile}
          accept="image/*"
          hidden
        />
        <label htmlFor="inputImage">
          <img src={uploadButton} class="uploadButton"></img>
        </label>
      </div>
      <br></br>
      <Link to="/sign-up-techstack">
        <button type="button" class="signUpButton">
          SIGN UP
        </button>
      </Link>
      <br></br>
      <p>
        Already have an account?
        <span class="signInButton">
          <Link to="/">SIGN IN</Link>
        </span>
      </p>
    </form>
  );
}

export default SignUpForm;
