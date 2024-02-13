import React from "react";
import { newChar } from "../../lib/api/api.ts";

export const CreateChar = (props) => {
  const { setLoading } = props;

  const createChar = () => {
    setLoading(true);
    newChar()
    .then(res => {
      console.log('newChar res', res);
      setLoading(false);
    })  
    .catch(function (error) {
        // handle error
        console.log('newChar error', error);
        setLoading(false);
    });
  }

  return <div className="cursor-pointer">
    <div onClick={() => createChar()}>Create new character</div>
  </div>;
}
