import React from 'react';
import '../css/info.css';

const Info = ({showResults, grandTotal, requirements}) => {
  return (
    <div className="info">
      <div className="info-content">
        <div className="card">
          <h6 className="card-title">Total grand</h6> 
          <span className="gram">{grandTotal}g</span>
        </div>
        {showResults && (
          requirements.map(requirement => (
            <div className="card">
              <h6 className="card-title">{requirement.name}</h6> 
              <Gram grandTotal={grandTotal} percentage={requirement.percentage} />
            </div>
          ))
        )}
      </div>
    </div>
  )
}

const Gram = ({grandTotal, percentage}) => {
  const value = (grandTotal / 100) * percentage;
  return (
    <span className="gram">{Math.round(value*100) / 100}g</span>
  )
}

export default Info;