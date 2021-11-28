import React from "react";
import { withRouter } from "react-router-dom";

const parseJwt = (token) => {
  try {
    return JSON.parse(atob(token.split(".")[1]));
  } catch (e) {
    return null;
  }
};

const AuthVerify = (props) => {
  props.history.listen(() => {
    const user = JSON.parse(localStorage.getItem("user"));

    if (user) {
      const decodedJwt = parseJwt(user.accessToken);

      if (decodedJwt.exp * 1000 < Date.now()) {
        props.logOut();
      }
    }
  });

  return (
    <a className={
      "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
    }>Logout</a>
  );
};

export default withRouter(AuthVerify);