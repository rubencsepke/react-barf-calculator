import React, {useState} from 'react';

const Input = ({title, handleWeight, weight}) => {

  return (
    <div className="input-block">
      <label htmlFor="">{title}:</label>
      <div className="input-field">
        <input type="number" placeholder="0" value={weight} onChange={handleWeight}/>
        <span>Kg</span>
      </div>
    </div>
  )
}

export default Input;