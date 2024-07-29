import React, {useState} from 'react';
import { DailyActivities } from '../../model/daily-activities.model';
import { PetTypes } from '../../model/pet-types.model';
import { SelectTypeKeys } from '../../model/select-type';

interface SelectProps {
  title: string,
  handleSelected: (arg0: string, arg1?: number) => void,
  selectedValue: string,
  type: SelectTypeKeys,
  data: PetTypes[] | DailyActivities[],
}

const Select = ({title, handleSelected, selectedValue, type, data}: SelectProps) => {

  const [activeClass, setActiveClass] = useState('');

  const openList = () => {
    activeClass === 'show-list' ? setActiveClass('') : setActiveClass('show-list');
  }

  return (
    <div className="input-block">
      <label htmlFor="">{title}:</label>
      <div onClick={() => openList()} className="select-container">
        <div className="selected-item">{selectedValue}</div>
        <ul className={`select-options ${activeClass}`}>
          <li className="select-option" onClick={() => handleSelected('Please Choose')} key='0'><div>Please Choose</div></li>
          <Options optionType={type} options={data} handleSelected={handleSelected} />
        </ul>
      </div>
    </div>
  )
}

interface OptionsProps {
  optionType: SelectTypeKeys,
  options: PetTypes[] | DailyActivities[],
  handleSelected: (arg0: string, arg1?: number) => any
}

const Options = ({optionType, options, handleSelected}: OptionsProps) => {
  let data: JSX.Element[] = [];
  if(optionType === "single") {
    data = options.map(option => (
      <li className="select-option" onClick={() => handleSelected(option.name)} key={option.id}>
        <div>{option.name}</div>
      </li>
    ))
  } else if (optionType === "multi") {
    data = options.map(option => (
      'percentage' in option ? (
        <li className="select-option" onClick={() => handleSelected(option.name, option.percentage)} key={option.id}>
          <div>
            {option.name}
          </div>
        </li>
      ) : (
        <li className="select-option" onClick={() => handleSelected(option.name)} key={option.id}>
          <div>
            {option.name}
          </div>
        </li>
      )
    ))
  }
  return <>{data}</>;
}

export default Select;