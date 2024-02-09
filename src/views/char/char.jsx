import { useEffect, useState } from 'react';
import { ChevronDoubleUpIcon } from "@heroicons/react/24/solid";
import { getChars, postChars } from "../../lib/api/api.ts";

export const Char = () => {
  const [chars, setChars] = useState([]);

  useEffect(() => {
    getChars()
    .then(res => {
      setChars(res?.data?.chars?.records);
      console.log('get res', chars);
    })  
    .catch(function (error) {
        // handle error
        console.log('get chars error', error);
    });

    postChars('post chars data');
  }, []);

  return <div className="char">
    Char
    <br />
    {chars[0]?.name}
    <br />
    {"Primary Stats"}
    <br />
    {/* {JSON.stringify(chars[0]?.stats)} */}
    <br />
    {!!chars?.length && !!Object.keys(chars[0]?.stats).length && Object.keys(chars[0]?.stats).map((item) => {
      console.log("item", item);
      return <div key={item} className='mb-2'>
        <label className='border-black border-solid border py-1 inline-block'>
          <span className='w-32 inline-block text-left pl-4 border-black border-solid border-r'>{item}:</span>
          <input value={chars[0]?.stats[item]} name={item} disabled className='w-24 text-center' />
        </label>
        <ChevronDoubleUpIcon className='h-5 inline-block text-green-700 ml-5 mb-2 cursor-pointer' />
      </div>;
    })}
  </div>
}
