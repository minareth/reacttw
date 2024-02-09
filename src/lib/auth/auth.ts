import { isLocal } from "../utils.ts";
import { useAuth0 } from "@auth0/auth0-react";

export const useLogoutWithRedirect = () => {
  const { logout } = useAuth0();
  
  const doLogout = () => logout({
    logoutParams: {
      returnTo: isLocal() ? process.env.REACT_APP_AUTH0_CALLBACK_DEV_URL : process.env.REACT_APP_AUTH0_CALLBACK_PROD_URL,
    }
  });

  return { doLogout };
}
