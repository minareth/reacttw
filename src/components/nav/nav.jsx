import { Link } from "wouter";
import { UserIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import { Profile } from "../profile/profile.tsx";

export const Nav = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const closeProfile = () => setIsProfileOpen(false);

  return <div className="flex justify-center mt-4">
    <Link href="/">
      <a className="pr-8 pl-8 pb-1 bg-stone-300">Play</a>
    </Link>
    <Link href="/world">
      <a className="pr-8 pl-8 pb-1 bg-stone-300">World</a>
    </Link>
    <div className="absolute right-4">
      <UserIcon className="block h-6 cursor-pointer" onClick={() => setIsProfileOpen(!isProfileOpen)} />
      {isProfileOpen && <Profile close={closeProfile} />}
    </div>
  </div>
}
