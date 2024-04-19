// // not used in the project currently
// import React, { useContext, useEffect } from 'react';
// import { useAuth0 } from "@auth0/auth0-react";
// import { StoreContext } from '../lib/context/context.ts';

// export const Homepage = () => {
//   const { user } = useAuth0();
//   const { store } = useContext(StoreContext);

//   useEffect(() => {
//     console.log('store', store);
//   }, [store]);

//   return <div className="homepage">
//       {`Welcome ${user?.given_name}`}
//       <br />
//       <br />
//       {store?.char ? `Your selected character is -- ${store?.char?.name}` : `Please select your character in the Profile menu on top-right`}
//     </div>;
// }
