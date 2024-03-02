import React from "react";
import { PlayDropdown } from "../dropdown-play.tsx";

export const PlayBlock = (props) => {
  const { objectKey, updatePlay, state } = props;

  return <div className='child-flex-21 mb-10'>
    <PlayDropdown label={state[objectKey].label} objectKey={objectKey} updatePlay={updatePlay} playState={state} />
  </div>
}
