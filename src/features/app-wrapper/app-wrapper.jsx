import { useContext } from 'react';
import { Homepage } from '../../views/homepage';
import { Char } from '../../views/char';
import { World } from '../../views/world';
import { Play } from '../../views/play';
import { Nav } from '../../components/nav/nav';
import { Route } from "wouter";
import { useLogoutWithRedirect } from '../../lib/auth/auth.ts';
import { StoreContext } from '../../lib/context/context.ts';
import { StartProfile } from './start-profile.jsx';

export const AppWrapper = () => {
  const { doLogout } = useLogoutWithRedirect();
  const { store } = useContext(StoreContext);

  if (!store?.char) {
    return <div className='min-h-full text-center max-w-4xl m-auto relative'>
      <div className='my-8'>{"Please select your character"}</div>
      <StartProfile />
    </div>;
  };

  return <div className="min-h-full text-center max-w-4xl m-auto relative">
    <div className="top">
      <Nav />
    </div>
    <div className="h-[calc(100vh_-_100px)] mt-4">
      <Route path="/homepage" component={Homepage} />
      <Route path="/char" component={Char} />
      <Route path="/world" component={World} />
      <Route path="/" component={Play} />
    </div>
    <div className="footer">
      <button className="pr-8 pl-8 pb-1 bg-stone-300" onClick={() => doLogout()}>Log out</button>
    </div>
  </div>
};
