import React from "react";
import loading from "../assets/loading.svg";
import './loading.css';

export const Loading = () => (
  <div className="spinner">
    <div className={'spinner-inner'}>
        <img src={loading} alt="Loading" />
    </div>
    <br/>
    <div>This may take a moment ...</div>
  </div>
);

