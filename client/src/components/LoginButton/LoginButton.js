import React from "react";
import {useAuth0} from "@auth0/auth0-react";

import "../../Pages/HomePage/HomePage.css";

export default function LoginButton() {
  const {loginWithRedirect} = useAuth0();

  return (
    <button className="btn" onClick={() => loginWithRedirect()}>
      Log In
    </button>
  );
}
