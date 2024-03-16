import React from "react";
import { ChevronDoubleUpIcon } from "@heroicons/react/24/solid";

export const SkillsPlay = (props) => {
  const { char, upgrade } = props;
  const skills = JSON.parse(char?.skills);
  const skills_progress = JSON.parse(char?.skills_progress);

  console.log("char", char);
  console.log("char skills", char?.skills);
  console.log("char skills_progress", char?.skills_progress);

  return skills ? <div>
    {Object.keys(skills).map((skill) => {
      return <div key={skill} className='mb-2'>
      <label className='border-black border-solid border py-1 inline-block'>
        <span className='w-32 inline-block text-left pl-4 border-black border-solid border-r'>{skill}:</span>
        <input value={`${skills[skill]} (${skills_progress[skill]})`} name={skill} disabled className='w-24 text-center' />
      </label>
    </div>})}
  </div> : <></>;
}
