import React from "react";
import { PlayDropdown } from "../dropdown-play.tsx";

export const PlayBlock = (props) => {
  const { objectKey, updatePlay, state } = props;

  return <div className='mb-10 inline-block mx-2'>
    <PlayDropdown label={state[objectKey].label} objectKey={objectKey} updatePlay={updatePlay} playState={state} />
  </div>
}
