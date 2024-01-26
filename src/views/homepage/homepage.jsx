import { getXataClient } from '../../xata.ts'
import React, { useEffect, useState } from 'react';

export const Homepage = () => {
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
      {"Homepage"}
      {JSON.stringify(times)}
    </div>;
}
