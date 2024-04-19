import React from "react";
import { ChevronDoubleUpIcon } from "@heroicons/react/24/solid";

export const HomeBasePlay = (props) => {
  const { char, upgrade } = props;
  const stats = JSON.parse(char?.stats);
  const stats_progress = JSON.parse(char?.stats_progress);

  console.log("char", char);
  console.log("char stats", char?.stats, JSON.parse(char?.stats));


  return stats ? <div className="flex columns-2">
    {Object.keys(stats).map((stat) => {
      return <div key={stat} className='mb-2'>
      <label className='border-black border-solid border py-1 inline-block'>
        <span className='w-32 inline-block text-left pl-4'>{stat}:</span>
        <input value={`${stats[stat]} (${stats_progress[stat]})`} name={stat} disabled className='w-24 text-center' />
      </label>
    </div>
    })}
  </div> : <></>;
}
