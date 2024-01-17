import React from 'react';
import '../css/info.css';
import { Requirements } from '../model/requirements.model';

interface InfoProps {
  showResults: boolean,
  grandTotal: number,
  requirements: Requirements[],
  selectedPetType: string
}

interface GramProps {
  grandTotal: number,
  percentage: number
}

const Info = ({showResults, grandTotal, requirements, selectedPetType}: InfoProps) => {
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

const Gram = ({grandTotal, percentage}: GramProps) => {
  const value = (grandTotal / 100) * percentage;
  return (
    <span className="gram">{Math.round(value*100) / 100}g</span>
  )
}

export default Info;