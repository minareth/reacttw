import logo from './logo.svg';
import './App.css';
import { useAuth0 } from "@auth0/auth0-react";
import { LoginButton } from './components/login-button';
import { Loading } from "./components/loading";
import {Button} from "./components/button";

function App() {
  const { user, isAuthenticated, isLoading, error, logout } = useAuth0();
  console.log('isLoading', isLoading, isAuthenticated);
  const logoutWithRedirect = () =>
      logout({
        logoutParams: {
          returnTo: process.env.REACT_APP_AUTH0_CALLBACK_URL,
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
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className='underline'>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button onClick={() => logoutWithRedirect()}>Log out</button>
      </header>
    </div>
  ));
}

export default App;
