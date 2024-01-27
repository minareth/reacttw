import './App.css';
import { useAuth0 } from "@auth0/auth0-react";
import { LoginButton } from './components/login-button';
import { Loading } from "./components/loading";
import { Button } from "./components/button";
import { isLocal } from './lib/utils.ts';
import { Homepage } from './views/homepage/homepage.jsx';
import { Route } from "wouter";
import { Char } from "./views/char/char.jsx";

function App() {
  const { user, isAuthenticated, isLoading, error, logout } = useAuth0();
  console.log('app js', process.env.REACT_APP_XATA_API_KEY);
  const logoutWithRedirect = () =>
      logout({
        logoutParams: {
          returnTo: isLocal() ? process.env.REACT_APP_AUTH0_CALLBACK_DEV_URL : process.env.REACT_APP_AUTH0_CALLBACK_PROD_URL,
        }
      });

  if (error) {
    return <div>
      <p>Oops... {error.message}</p>
      <Button label={'user'} triggeredFunction={() => console.log('user', user)} />
    </div>;
  }

  if (isLoading) {
    return <Loading />;
  }
  console.log('User', user, isAuthenticated);
  if(!isAuthenticated && !user?.email && !isLoading) {
    return <LoginButton />;
  }

  // console.log('User', user, isAuthenticated);
  if(isAuthenticated && user?.email !== 'tekarimegraesh@gmail.com' && !isLoading) {
    return <div className={'no-rights'}>
      <div>Sorry this user doesn't have access rights.</div>
      <br/>
      <Button label={'Log out'} triggeredFunction={logoutWithRedirect} />
    </div>;
  }

  return (isAuthenticated && user?.email === 'tekarimegraesh@gmail.com' && !isLoading && (
    <div className="App">
      <Route path="/" component={Homepage} />
      <Route path="/char" component={Char} />
      <br />
      <button onClick={() => logoutWithRedirect()}>Log out</button>
    </div>
  ));
}

export default App;
