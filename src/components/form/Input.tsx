import React from 'react';

interface InputProps {
  title: string,
  handleWeight: (arg0: any) => void,
  weight: number
}

const Input = ({title, handleWeight, weight}: InputProps) => {

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