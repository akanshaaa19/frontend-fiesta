import { NavLink } from "react-router-dom";
import Button from "../Button/Button";

import "./navigation.css";
import { Fragment, useState } from "react";

import AuthForm from "../Auth.jsx/AuthForm";
import Modal from "../Modal/Modal";
import { useDispatch, useSelector } from "react-redux";
import { authActions, uiActions } from "../../store";

function NavigationBar(props) {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.authStatus);
  return (
    <Fragment>
      <nav>
        <h1>{props.name}</h1>
        <ul>
          {props.navlinks.map((link) => {
            return (
              <NavLink activeClassName="active" to={link.link}>
                {link.title}
              </NavLink>
            );
          })}
        </ul>
        <div>
          {!isLoggedIn ? (
            <Button
              onClick={() => {
                dispatch(uiActions.toggleAuth(true));
              }}
              className="outline"
            >
              Log In
            </Button>
          ) : (
            <Button
              onClick={() => {
                dispatch(authActions.authStatus(false));
              }}
              className="outline"
            >
              Log Out
            </Button>
          )}
        </div>
      </nav>
    </Fragment>
  );
}

export default NavigationBar;
