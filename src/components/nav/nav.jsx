import { Link } from "wouter";
import './nav.scss';

export const Nav = () => {
  return <div className="nav">
    <Link href="/">
      <a className="link">Homepage</a>
    </Link>
    <Link href="/char">
      <a className="link">Character</a>
    </Link>
  </div>
}