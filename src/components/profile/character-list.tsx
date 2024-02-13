import React, { useState, useEffect, useContext } from "react"
import { getChars } from "../../lib/api/api.ts";
import { StoreContext } from "../../lib/context/context.ts";

interface Char {
  name: string;
  id: string;
}

export const CharacterList = () => {
  const { store, setStore } = useContext(StoreContext);
  const [chars, setChars] = useState([]);

  const updateStore = (char) => {
    //@ts-ignore
    setStore({ ...store, char: char.name });
    console.log(store);
  }

  useEffect(() => {
    getChars()
    .then(res => {
      setChars(res?.data);
      console.log('get res', res?.data);
    })
    .catch(function (error) {
      // handle error
      console.log('get chars error', error);
    });
  }, []);

  return <div>
    {!!chars?.length && chars.map((char: Char) => {
      return <div key={char.id} onClick={() => updateStore(char)} className="cursor-pointer" >{char.name}</div>;
    })}
  </div>
}
