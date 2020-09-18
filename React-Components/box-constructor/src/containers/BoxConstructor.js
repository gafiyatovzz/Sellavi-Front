import React from "react";
import BoxRange from "../components/BoxRange";
import BoxWindow from "../components/BoxWindow";

const BoxConstructor = (props) => {
  return (
    <div className='constructor'>
      <h2 className='constructor__title'>Какой объем требуется?</h2>
      <BoxRange/>
      <BoxWindow/>
    </div>
  );
};

export default BoxConstructor;