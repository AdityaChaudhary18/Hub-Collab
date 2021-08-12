import "./signup.css";
import Card from "./../components/card.js";
import React, { useState } from "react";
import user from "./../assets/user.png";
import SignUpForm from "./signupForm";
import SkillForm from "./skillForm";
import { useForm } from "react-hook-form";

function SignUp() {
  const {
    handleSubmit
  } = useForm({ criteriaMode: "all" });
  const onSubmit = (data) => {
    console.log(data);
  };
  const [state, setState] = useState({
    selectedFile: user,
    name: "User Name",
    email: "email@email.com",
    tech: [],
    visibleButton: false,
  });

  const fileChangeHandler = (event) => {
    setState({
      ...state,
      selectedFile: URL.createObjectURL(event.target.files[0]),
    });
  };
  const registerButtonHandler = (event) => {
    setState({ ...state, visibleButton: true });
  };
  const nameChangeHandler = (event) => {
    setState({ ...state, name: event.target.value });
  };
  const techChangeHandler = (e) => {
    if (!state.tech.includes(e.target.value)) {
      setState({
        ...state,
        tech: state.tech.concat([e.target.value]),
      });
    } else {
      setState({
        ...state,
        tech: state.tech.filter((item) => item !== e.target.value),
      });
    }
  };

  return (
    <div className="container">
      <div className="form-container">
        <header>
          <h1 className="headerName">HubCollab</h1>
        </header>
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
          {!state.visibleButton && (
            <div>
              <SignUpForm
                onChangeName={nameChangeHandler}
                onChangeFile={fileChangeHandler}
                onClickButton={registerButtonHandler}
              />
              <button
                type="button"
                className="signUpButton continue"
                onClick={() => {
                  registerButtonHandler();
                }}
              >
                Continue
              </button>
              <br></br>
              <p>
                Already have an account?
                <span class="signInButton">
                  <button
                    id="back-btn"
                    hidden
                    type="button"
                    onClick={(event) => (window.location.href = "/")}
                  >
                    SIGN IN
                  </button>
                  <label htmlFor="back-btn">SIGN IN</label>
                </span>
              </p>
            </div>
          )}
          {state.visibleButton && <SkillForm onClick={techChangeHandler} />}
          <div className="cardContainer">
            <Card
              name={state.name}
              image={state.selectedFile}
              tech={state.tech}
            />
            {state.visibleButton && (
              <button
                type="submit"
                onClick={(event) => (window.location.href = "/")}
                className="registerButton"
              >
                Register
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
