import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import {Button} from "./button";

export const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
  <div>
    <Button label={'Log In'} triggeredFunction={loginWithRedirect} />
  </div>);
};
