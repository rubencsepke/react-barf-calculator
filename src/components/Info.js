import React from 'react';
import '../css/info.css';

const Info = ({showResults, grandTotal, requirements, selectedPetType}) => {
  return (
    <div className="info">
      {showResults && (
        <div className="info-content">
          <div className="card">
            <h6 className="card-title">Total grand</h6> 
            <span className="gram">{grandTotal}g</span>
          </div>
          {requirements.map(requirement => {
            const {dog, puppy} = requirement.percentage;
            return (
              <div className="card">
                <h6 className="card-title">{requirement.name}</h6> 
                <Gram grandTotal={grandTotal} percentage={selectedPetType === "Dog" ? dog : puppy} />
              </div>
            )
          })}
        </div>
      )}
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