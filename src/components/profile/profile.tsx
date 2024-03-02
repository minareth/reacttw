import React, { useState, useEffect } from "react";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import { useLogoutWithRedirect } from "../../lib/auth/auth.ts";
import { CharacterList } from "./character-list.tsx";
import { CreateChar } from "../create-char/create-char.tsx";
import { Loading } from "../loading.jsx";

const PROFILE_CONTENT_TYPES = {
  "DEFAULT": "default",
  "CHARS": "chars",
}

export const Profile = (props) => {
  const { close } = props;
  const { doLogout } = useLogoutWithRedirect();
  const [profileContent, setProfileContent] = useState(PROFILE_CONTENT_TYPES.DEFAULT);
  const [isLoading, setIsLoading] = useState(false);

  return <div className="absolute right-0 top-0 z-10 bg-stone-300 p-4 w-64">
    <div className="absolute right-2 top-2 h-6 w-6 cursor-pointer" onClick={() => close()}>
      <XMarkIcon />
    </div>
    {profileContent !== PROFILE_CONTENT_TYPES.DEFAULT && <div className="absolute left-2 top-2 h-6 w-6 cursor-pointer" onClick={() => setProfileContent(PROFILE_CONTENT_TYPES.DEFAULT)}>
      <ArrowLeftIcon />
    </div>}
    {profileContent === PROFILE_CONTENT_TYPES.DEFAULT && <>
      <div onClick={() => setProfileContent(PROFILE_CONTENT_TYPES.CHARS)} className="inline-block cursor-pointer mb-4">Select character</div>
      <br />
      <div onClick={() => doLogout()} className="inline-block cursor-pointer">Log out</div>
    </>}
    {profileContent === PROFILE_CONTENT_TYPES.CHARS && <>
      <div className="inline-block mb-4">Character list</div>
      {isLoading ? <Loading /> : <CharacterList closeProfile={close} />}
      <br />
      <CreateChar setLoading={setIsLoading} />
    </>}
  </div>
}
