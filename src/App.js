import React, {useState} from 'react';
import Sidebar from './components/Sidebar';
import Info from './components/Info';
import Input from './components/form/Input'
import Select from './components/form/Select'

import './css/app.css';

import petTypes from './data/petTypes.json';
import dailyActivities from './data/dailyActivities.json';
import requirements from './data/requirements.json';

const App = () => {

  const [selectedPetType, setSelectedPetType] = useState('Please Choose');
  const [weight, setWeight] = useState();
  const [selectedDailyActivity, setSelectedDailyActivity] = useState('Please Choose');
  const [selectedDailyActivityPercentage, setSelectedDailyActivityPercentage] = useState(0);
  const [grandTotal, setGrandTotal] = useState(0);
  const [showResults, setShowResults] = useState(false);

  const handleSelectedPetType = (name) => {
    setSelectedPetType(name);
    setShowResults(false);
  }

  const handleWeight = (e) => {
    setWeight(e.target.value);
    setShowResults(false);
  }

  const handleSelectedDailyActivity = (name, percentage='') => {
    setSelectedDailyActivity(name);
    setSelectedDailyActivityPercentage(percentage)
    setShowResults(false);
  }

  const calculate = (e) => {
    e.preventDefault();
    setGrandTotal(((selectedDailyActivityPercentage/100) * weight) * 1000);
    setShowResults(true);
  }

  return (
    <div className="container">
      <Sidebar>
        <h1 className="title">Barf Calculator</h1>
        <form onSubmit={calculate}>
          <Select title="Pet type" data={petTypes} handleSelected={handleSelectedPetType} type="single" selectedValue={selectedPetType} />
          <Input title="Pet weight" weight={weight} handleWeight={handleWeight} />
          <Select title="Daily Activity" data={dailyActivities} handleSelected={handleSelectedDailyActivity} type="multi" selectedValue={selectedDailyActivity} />
          <button type="submit" className="submit">Calculate raw feeding</button>
        </form>
      </Sidebar>
      <Info showResults={showResults} grandTotal={grandTotal} requirements={requirements} selectedPetType={selectedPetType} />
    </div>
  );
}

export default App;
