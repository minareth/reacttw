import React, { useState } from "react";
import { ChevronDoubleUpIcon } from "@heroicons/react/24/solid";
import { ChevronDoubleDownIcon } from "@heroicons/react/24/solid";
import { Button } from "../button";
import { saveSecondary } from "../../lib/api/api.ts";

export const Secondary = (props) => {
  const { char } = props;
  const [secondary, setSecondary] = useState(JSON.parse(char?.secondary));

  const increase = (stat) => {
    let updatedValue = parseInt(secondary[stat]) + 1;
    setSecondary({...secondary, [stat]: updatedValue});
  }

  const decrease = (stat) => {
    let updatedValue = parseInt(secondary[stat]) - 1;
    setSecondary({...secondary, [stat]: updatedValue});
  }

  const save = () => {
    saveSecondary(char.id, JSON.stringify(secondary));
  }

  return secondary 
  ? <div>
    {Object.keys(secondary).map((stat) => {
      return <div key={stat} className='mb-2'>
        <label className='border-black border-solid border py-1 inline-block'>
          <span className='w-32 inline-block text-left pl-4 border-black border-solid border-r'>{stat}:</span>
          <input value={`${secondary[stat]}`} name={stat} disabled className='w-24 text-center' />
        </label>
        <ChevronDoubleUpIcon onClick={() => increase(stat)} className='h-5 inline-block text-green-700 ml-5 mb-2 cursor-pointer' />
        <ChevronDoubleDownIcon onClick={() => decrease(stat)} className='h-5 inline-block text-red-700 ml-5 mb-2 cursor-pointer' />
    </div>
    })}
    <br />
    <Button label={'Save'} triggeredFunction={save} />
  </div> : <></>;
}
