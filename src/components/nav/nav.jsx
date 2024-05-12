import { Link } from "wouter";
import { UserIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import { Profile } from "../profile/profile.tsx";

export const Nav = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const closeProfile = () => setIsProfileOpen(false);

  return <div className="flex justify-center mt-4">
    <Link href="/">
      <a className="pr-8 pl-8 pb-1">Homepage</a>
    </Link>
    <Link href="/char">
      <a className="pr-8 pl-8 pb-1">Character</a>
    </Link>
    <Link href="/generate">
      <a className="pr-8 pl-8 pb-1">Generate</a>
    </Link>
    <div className="absolute right-4">
      <UserIcon className="block h-6 cursor-pointer" onClick={() => setIsProfileOpen(!isProfileOpen)} />
      {isProfileOpen && <Profile close={closeProfile} />}
    </div>
  </div>
}
