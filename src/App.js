import React, {useState, useEffect} from 'react';
import Sidebar from './components/Sidebar';
import Info from './components/Info';
import Input from './components/form/Input'
import Select from './components/form/Select'

import './css/app.css';

const App = () => {

  const [petTypes, setPetTypes] = useState([]);
  const [selectedPetType, setSelectedPetType] = useState('Please Choose');
  const [weight, setWeight] = useState();
  const [dailyActivity, setDailyActivity] = useState([]);
  const [selectedDailyActivity, setSelectedDailyActivity] = useState('Please Choose');
  const [selectedDailyActivityId, setSelectedDailyActivityId] = useState(0);

  const fetchPetTypes = () => {
    setPetTypes([
      {id: 1, name: 'Puppy'},
      {id: 2, name: 'Dog'},
      {id: 3, name: 'Kitten'},
      {id: 4, name: 'Cat'}
    ]);
  }

  const fetchDailyActivities = () => {
    setDailyActivity([
      {id: 1, percentage: 1.5, name: 'Sedentary'},
      {id: 2, percentage: 2, name: 'Low Activity'},
      {id: 3, percentage: 2.5, name: 'Moderate Activity'},
      {id: 4, percentage: 3, name: 'Active, Normal Intensity'},
      {id: 5, percentage: 3.5, name: 'Active, Moderate Intensity'},
      {id: 6, percentage: 4, name: 'Active, High Intensity'},
    ]);
  }
  const handleSelectedPetType = (name) => {
    setSelectedPetType(name);
  }

  const handleWeight = (e) => {
    setWeight(e.target.value)
  }

  const handleSelectedDailyActivity = (name) => {
    setSelectedDailyActivity(name);
  }

  const calculate = () => {

  }

  useEffect(() => {
    fetchPetTypes();
    fetchDailyActivities();
  }, []);

  return (
    <div className="container">
      <Sidebar>
        <h1 className="title">Barf Calculator</h1>
        <form action="">
          <Select title="Pet type" data={petTypes} handleSelected={handleSelectedPetType} type="single" selectedValue={selectedPetType} />
          <Input title="Pet weight" weight={weight} handleWeight={handleWeight} />
          <Select title="Daily Activity" data={dailyActivity} handleSelected={handleSelectedDailyActivity} type="multi" selectedValue={selectedDailyActivity} />
          <button type="submit" className="submit" onClick={() => calculate()}>Calculate raw feeding</button>
        </form>
      </Sidebar>
      <Info />
    </div>
  );
}

export default App;
