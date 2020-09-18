import React from "react";

const BoxRange = (props) => {
  return (
    <div>
      <input min="0" max="100" value={props.volume} onChange={props.changeVolume} type="range"/>
    </div>
  )
};

export default BoxRange;