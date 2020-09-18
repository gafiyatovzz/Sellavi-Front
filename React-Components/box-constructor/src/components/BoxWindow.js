import React from "react";
import BoxCube from "./BoxCube";
import BoxSelection from "./BoxSelection";

const BoxWindow = (props) => {
  return (
    <div className='constructor__window'>
      <span>{props.volume}</span>
      <BoxCube volume={props.volume}/>
      <BoxSelection/>
    </div>
  )
};

export default BoxWindow;