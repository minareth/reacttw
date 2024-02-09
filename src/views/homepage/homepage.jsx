import React, { useContext, useEffect } from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import { StoreContext } from '../../lib/context/context.ts';

export const Homepage = () => {
  const { user } = useAuth0();
  const store = useContext(StoreContext);

  useEffect(() => {
    console.log('store', store);
  }, []);

  return <div className="homepage">
      {`Welcome ${user?.given_name}`}
      <br />
      {store?.chars ? `Your selected char is ${user?.given_name}` : `Please select your char in the Profile menu on top-right`}
    </div>;
}
