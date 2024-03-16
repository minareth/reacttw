import { useEffect, useState } from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import { LoginButton } from './components/login-button';
import { Loading } from "./components/loading";
import { Button } from "./components/button";
import { useLocation } from "wouter";
import { StoreContext } from './lib/context/context.ts';
import { useLogoutWithRedirect } from './lib/auth/auth.ts';
import { AppWrapper } from './features/app-wrapper/app-wrapper.jsx';

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
      <AppWrapper />
    </StoreContext.Provider>
  ));
}

export default App;
