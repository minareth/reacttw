import React from "react";
import { ChevronDoubleUpIcon } from "@heroicons/react/24/solid";

export const ReputationPlay = (props) => {
  const { char, upgrade } = props;
  const reputation = JSON.parse(char?.reputation);
  const reputation_progress = JSON.parse(char?.reputation_progress);

  console.log("char", char);
  console.log("char skills", char?.reputation);
  console.log("char skills_progress", char?.reputation_progress);

  return reputation ? <div>
    {Object.keys(reputation).map((rep) => {
      return <div key={rep} className='mb-2'>
      <label className='border-black border-solid border py-1 inline-block'>
        <span className='w-32 inline-block text-left pl-4 border-black border-solid border-r'>{rep}:</span>
        <input value={`${reputation[rep]} (${reputation_progress[rep]})`} name={rep} disabled className='w-24 text-center' />
      </label>
    </div>})}
  </div> : <></>;
}
