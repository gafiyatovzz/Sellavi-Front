import React from "react";
import BoxCube from "./BoxCube";
import BoxSelection from "./BoxSelection";

const BoxWindow = (props) => {
  return (
    <div className='constructor__window'>
      <BoxCube/>
      <BoxSelection/>
    </div>
  )
};

export default BoxWindow;