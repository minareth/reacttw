import React from "react";
import { ChevronDoubleUpIcon } from "@heroicons/react/24/solid";

export const Books = (props) => {
  const { char, upgrade } = props;
  const property = JSON.parse(char?.property);

  console.log("char", char);
  console.log("char property", char?.property);

  return property ? <div>
    {Object.keys(property).map((prop) => {
      return <div key={prop} className='mb-2'>
      <label className='border-black border-solid border py-1 inline-block'>
        <span className='w-32 inline-block text-left pl-4 border-black border-solid border-r'>{prop}:</span>
        <input value={`${property[prop]}`} name={prop} disabled className='w-64 text-center' />
      </label>
      <ChevronDoubleUpIcon onClick={() => upgrade(char.id, 'skills', prop)} className='h-5 inline-block text-blue-700 ml-5 mb-2 cursor-pointer' />
    </div>})}
    <br />
    <div className="cursor-pointer">Add Property Type</div>
  </div> : <></>;
}
