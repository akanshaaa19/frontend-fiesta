import { useState } from "react";
import "./auth.css";
import Button from "../Button/Button";
import { useDispatch } from "react-redux";
import { authActions, uiActions } from "../../store";

function AuthForm() {
  const [isLogIn, setIsLogIn] = useState(true);
  const dispatch = useDispatch();
  return (
    <div className="auth">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(authActions.authStatus(true));
          dispatch(uiActions.toggleAuth(false))
        }}
      >
        {isLogIn ? <h1>Log In</h1> : <h1>Sign Up</h1>}
        {!isLogIn && <input placeholder="Name" type="text" />}
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <Button type="submit" className="filled">
          {isLogIn ? "Log In" : "Sign Up"}
        </Button>
        {isLogIn ? (
          <p>
            Don't have an account?{" "}
            <span
              onClick={() => {
                setIsLogIn(false);
              }}
            >
              Sign Up
            </span>
          </p>
        ) : (
          <p>
            Already have an account?{" "}
            <span
              onClick={() => {
                setIsLogIn(true);
              }}
            >
              Log In
            </span>
          </p>
        )}
      </form>
    </div>
  );
}

export default AuthForm;
