import React from "react";
import { ChevronDoubleUpIcon } from "@heroicons/react/24/solid";
import { ChevronDoubleDownIcon } from "@heroicons/react/24/solid";

export const Reputation = (props) => {
  const { char, upgrade, downgrade } = props;
  const reputation = JSON.parse(char?.reputation);
  const reputation_progress = JSON.parse(char?.reputation_progress);

  console.log("char", char);
  console.log("char skills", char?.reputation);
  console.log("char skills_progress", char?.reputation_progress);
  console.log("upgrade", upgrade);
  console.log("downgrade", downgrade);

  return reputation ? <div>
    {Object.keys(reputation).map((rep) => {
      return <div key={rep} className='mb-2'>
      <label className='border-black border-solid border py-1 inline-block'>
        <span className='w-32 inline-block text-left pl-4 border-black border-solid border-r'>{rep}:</span>
        <input value={`${reputation[rep]} (${reputation_progress[rep]})`} name={rep} disabled className='w-24 text-center' />
      </label>
      <ChevronDoubleUpIcon onClick={() => upgrade(char.id, 'reputation', rep)} className='h-5 inline-block text-blue-700 ml-5 mb-2 cursor-pointer' />
      <ChevronDoubleDownIcon onClick={() => downgrade(char.id, 'reputation', rep)} className='h-5 inline-block text-red-700 ml-5 mb-2 cursor-pointer' />
    </div>})}
    <br />
    <div className="cursor-pointer">Add Reputation Type</div>
  </div> : <></>;
}
