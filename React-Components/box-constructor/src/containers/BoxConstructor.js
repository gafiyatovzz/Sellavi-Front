import React from "react";
import BoxRange from "../components/BoxRange";
import BoxWindow from "../components/BoxWindow";

const BoxConstructor = (props) => {
  return (
    <div className='constructor'>
      <h2 className='constructor__title'>Какой объем требуется?</h2>
      <BoxRange changeVolume={props.changeVolume} volume={props.volume}/>
      <BoxWindow volume={props.volume}/>
    </div>
  );
};

export default BoxConstructor;