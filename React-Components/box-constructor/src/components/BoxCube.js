import React from "react";

const BoxCube = (props) => {
  const styles = {
    fontSize: Number(props.volume) / 3,
  }

  return (
    <div className='constructor__cube-container'>
      <div className='constructor__cube' style={styles}>
        <div className="constructor__cube-side cube-side--back">
          <span className='constructor__cube-size'>{props.volume} м<sup>3</sup></span>
        </div>
        <div className="constructor__cube-side cube-side--left">
          <span className='constructor__cube-size'>{props.volume} м<sup>3</sup></span>
        </div>
        <div className="constructor__cube-side cube-side--right">
          <span className='constructor__cube-size'>{props.volume} м<sup>3</sup></span>
        </div>
        <div className="constructor__cube-side cube-side--top"></div>
        <div className="constructor__cube-side cube-side--front">
          <span className='constructor__cube-size'>{props.volume} м<sup>3</sup></span>
        </div>
      </div>
    </div>
  )
};

export default BoxCube;