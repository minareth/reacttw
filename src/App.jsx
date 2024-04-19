import { useEffect, useState } from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import { LoginButton } from './components/login-button';
import { Loading } from "./components/loading";
import { Button } from "./components/button";
import { Homepage } from './views/homepage.jsx';
import { Route, useLocation } from "wouter";
import { Char } from "./views/char.jsx";
import { Nav } from './components/nav/nav.jsx';
import { StoreContext } from './lib/context/context.ts';
import { useLogoutWithRedirect } from './lib/auth/auth.ts';
import { World } from './views/world.jsx';
import { Play } from './views/play.jsx';
 
function App() {
  const { user, isAuthenticated, isLoading, error } = useAuth0(); 
  const { doLogout } = useLogoutWithRedirect();
  const [store, setStore] = useState({ char: null });
  const value = { store, setStore };
  const [location, setLocation] = useLocation();

  useEffect(() => {
    console.log('location', location);
    if (location !== '/') setLocation('/');
  }, []);

  if (error) {
    return <div>
      <p>Oops... {error.message}</p>
      <br />
      <Button label={'user'} triggeredFunction={() => console.log('user', user)} />
      <br />
      <Button label={'Log out'} triggeredFunction={doLogout} />
    </div>;
  }

  if (isLoading) {
    return <div className="min-h-full text-center flex items-center justify-center flex-col">
      <Loading />
      <div className='mt-5'>
        <Button label={'Log out'} triggeredFunction={doLogout} />
      </div>
    </div>;
  }
  console.log('User', user, isAuthenticated);
  if(!isAuthenticated && !user?.email && !isLoading) {
    return <div className="min-h-full text-center flex items-center justify-center">
      <LoginButton />
    </div>;
  }

  // console.log('User', user, isAuthenticated);
  if(isAuthenticated && user?.email !== 'tekarimegraesh@gmail.com' && !isLoading) {
    return <div className={'no-rights'}>
      <div>Sorry this user doesn't have access rights.</div>
      <br/>
      <Button label={'Log out'} triggeredFunction={doLogout} />
    </div>;
  }

  return (isAuthenticated && user?.email === 'tekarimegraesh@gmail.com' && !isLoading && (
    <StoreContext.Provider value={value}>
      <div className="min-h-full text-center max-w-4xl m-auto relative">
        <div className="top">
          <Nav />
        </div>
        <div className="h-[calc(100vh_-_100px)] mt-4">
          <Route path="/" component={Homepage} />
          <Route path="/char" component={Char} />
          <Route path="/world" component={World} />
          <Route path="/play" component={Play} />
        </div>
        <div className="footer">
          <button className="pr-8 pl-8 pb-1 bg-stone-300" onClick={() => doLogout()}>Log out</button>
        </div>
      </div>
    </StoreContext.Provider>
  ));
}

export default App;
