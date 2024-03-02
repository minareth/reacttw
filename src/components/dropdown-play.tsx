import React, { useState } from "react"

export const PlayDropdown = (props) => {
  const { label, objectKey, updatePlay, playState } = props;
  const [ isListShown, setIsListShown ] = useState(false);

  return <div>
    <div onClick={() => setIsListShown(!isListShown)} className="p-2 border-black border-solid border inline-block cursor-pointer rounded">{ label }</div>
    <br />
    {isListShown && <div className="border-black border-solid border inline-block rounded mt-4">
      {playState[objectKey].actions.map((item) => {
        return <div key={item.name + label} 
        onClick={() => {
          let actionsObject = [...playState[objectKey].actions];
          actionsObject.map((action) => {
            action.active = false;
            return action;
          });
          actionsObject.find((action) => action.name === item.name).active = true;
          const objectValue = {...playState[objectKey], actions: actionsObject};
          updatePlay(objectKey, objectValue);
          setIsListShown(false);
        }}
        className="p-2 cursor-pointer hover:bg-blue-200 rounded">{item.name}</div>;
      })}
    </div>}
    <br />
    <div className="flex flex-col items-center">
      <div className="p-2 border-black border-solid border inline-block rounded w-fit min-w-[100px] bg-slate-400">{ playState[objectKey].actions.find((action) => action.active === true).name }</div>
    </div>
  </div>
}
