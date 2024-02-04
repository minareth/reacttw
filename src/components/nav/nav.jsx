import { Link } from "wouter";

export const Nav = () => {
  return <div className="flex justify-center">
    <Link href="/">
      <a className="pr-8 pl-8 pb-1 bg-stone-300">Homepage</a>
    </Link>
    <Link href="/char">
      <a className="pr-8 pl-8 pb-1 bg-stone-300">Character</a>
    </Link>
  </div>
}
