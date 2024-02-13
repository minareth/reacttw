import { useEffect, useState, useContext } from 'react';
import { getChars } from "../../lib/api/api.ts";
import { StoreContext } from '../../lib/context/context.ts';
import { Stats } from '../../components/stats/stats.tsx';

export const Char = () => {
  // const [chars, setChars] = useState([]);
  const { store } = useContext(StoreContext);

  // useEffect(() => {
  //   getChars()
  //   .then(res => {
  //     setChars(res?.data);
  //     console.log('get res', chars, res);
  //   })  
  //   .catch(function (error) {
  //       // handle error
  //       console.log('get chars error', error);
  //   });

  //   // postChars('post chars data');
  // }, []);

  return <div className="char">
    {store?.char?.name}
    <br />
    {store?.char && "Primary Stats"}
    <br />
    {/* {JSON.stringify(chars[0]?.stats)} */}
    <br />
    {store?.char && <Stats char={store?.char} />}
    {!store?.char && <div>{"Character is not selected"}</div>}
  </div>
}
