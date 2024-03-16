import React from "react";
import { ChevronDoubleDownIcon } from "@heroicons/react/24/solid";

export const InventoryPlay = (props) => {
  const { char, upgrade } = props;
  const inventory = JSON.parse(char?.inventory);

  console.log("char", char);
  console.log("char inventory", char?.inventory);

  return inventory ? <div>
    {Object.keys(inventory).map((item) => {
      return <div key={item} className='mb-2'>
      <label className='border-black border-solid border py-1 inline-block'>
        <span className='w-32 inline-block text-left pl-4 border-black border-solid border-r'>{item}:</span>
        <input value={`${inventory[item]}`} name={item} disabled className='w-24 text-center' />
      </label>
    </div>})}
  </div> : <></>;
}
