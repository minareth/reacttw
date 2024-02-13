import React from "react";
import { ChevronDoubleUpIcon } from "@heroicons/react/24/solid";

export const Stats = (props) => {
  const { char } = props;
  const stats = JSON.parse(char?.stats);

  console.log("char", char);
  console.log("char stats", char?.stats, JSON.parse(char?.stats));


  return stats ? Object.keys(stats).map((stat) => {
    return <div key={stat} className='mb-2'>
    <label className='border-black border-solid border py-1 inline-block'>
      <span className='w-32 inline-block text-left pl-4 border-black border-solid border-r'>{stat}:</span>
      <input value={stats[stat]} name={stat} disabled className='w-24 text-center' />
    </label>
    <ChevronDoubleUpIcon className='h-5 inline-block text-green-700 ml-5 mb-2 cursor-pointer' />
  </div>
  }) : <></>;
}
