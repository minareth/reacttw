import React, { useState } from "react";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import { useLogoutWithRedirect } from "../../lib/auth/auth.ts";
import { CreateChar } from "../../components/create-char/create-char.tsx";
import { Loading } from "../../components/loading.jsx";
import { StartCharacterList } from "./start-character-list.tsx";

const PROFILE_CONTENT_TYPES = {
  "DEFAULT": "default",
  "CHARS": "chars",
}

export const StartProfile = () => {
  const { doLogout } = useLogoutWithRedirect();
  const [profileContent, setProfileContent] = useState(PROFILE_CONTENT_TYPES.DEFAULT);
  const [isLoading, setIsLoading] = useState(false);

  return <div className="bg-stone-300 p-4 w-64 mx-auto">
    {profileContent === PROFILE_CONTENT_TYPES.DEFAULT && <>
      <div onClick={() => setProfileContent(PROFILE_CONTENT_TYPES.CHARS)} className="inline-block cursor-pointer mb-4">Select character</div>
      <br />
      <div onClick={() => doLogout()} className="inline-block cursor-pointer">Log out</div>
    </>}
    {profileContent === PROFILE_CONTENT_TYPES.CHARS && <>
      <div className="inline-block mb-4">Character list</div>
      {isLoading ? <Loading /> : <StartCharacterList />}
      <br />
      <CreateChar setLoading={setIsLoading} />
    </>}
  </div>
}
