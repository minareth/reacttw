import React from "react";
import { XCircleIcon } from "@heroicons/react/24/solid";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { useLogoutWithRedirect } from "../../lib/auth/auth.ts";

export const Profile = (props) => {
  const { close } = props;
  const { doLogout } = useLogoutWithRedirect();

  return <div className="absolute right-0 top-0 z-10 bg-stone-300 p-4 w-64">
    <div className="absolute right-2 top-2 h-6 w-6 cursor-pointer" onClick={() => close()}>
      <XMarkIcon />
    </div>
    <div className="inline-block cursor-pointer mb-4">Select character</div>
    <br />
    <div onClick={() => doLogout()} className="inline-block cursor-pointer">Log out</div>
  </div>
}
