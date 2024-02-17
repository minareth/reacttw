import React, { useContext } from "react";
import { TrashIcon } from "@heroicons/react/24/solid";
import { deleteChar } from "../../lib/api/api.ts";
import { StoreContext } from "../../lib/context/context.ts";

export const CharacterOperations = (props) => {
  const { char } = props;
  const { store, setStore } = useContext(StoreContext);

  const updateStore = (charData) => {
    //@ts-ignore
    setStore({ ...store, char: charData });
    console.log(store);
  }

  const executeDelete = () => {
    deleteChar(char?.id);
    updateStore(null);
  }

  console.log('CharacterOperations id', char?.id);

  return <div className='mb-2'>
    <div className="inline-block">Delete Character: </div>
    <TrashIcon onClick={() => executeDelete()} className='h-5 inline-block text-red-700 ml-5 mb-1 cursor-pointer' />
  </div>;
}
