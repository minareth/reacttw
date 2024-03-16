import React from "react";
import { ChevronDoubleUpIcon } from "@heroicons/react/24/solid";

export const EquipmentPlay = (props) => {
  const { char, upgrade } = props;
  const equipment = JSON.parse(char?.equipment);

  console.log("char", char);
  console.log("char skills", char?.equipment);

  return equipment ? <div>
    {Object.keys(equipment).map((item) => {
      return <div key={item} className='mb-2'>
      <label className='border-black border-solid border py-1 inline-block'>
        <span className='w-32 inline-block text-left pl-4 border-black border-solid border-r'>{item}:</span>
        <input value={`${equipment[item]}`} name={item} disabled className='w-64 text-center' />
      </label>
    </div>})}
  </div> : <></>;
}
