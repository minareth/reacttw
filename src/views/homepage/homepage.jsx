import { getXataClient } from '../../xata.ts'
import React, { useEffect, useState } from 'react';
import { useAuth0 } from "@auth0/auth0-react";

export const Homepage = () => {
  const { user } = useAuth0();
  const [times, setTimes] = useState([]);

  useEffect(() => {
    async function XataCheck () {
      let data = await getXataClient().db['time-slots'].getPaginated();
      console.log('data', data?.records);
      if (data?.records?.length) setTimes(data?.records);
    }
    
    XataCheck();
  }, []);

  return <div className="homepage">
      {`Welcome ${user?.given_name}`}
    </div>;
}
