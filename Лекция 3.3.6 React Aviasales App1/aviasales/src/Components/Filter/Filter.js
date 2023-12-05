import React from "react";

import { Checkbox } from 'antd';

import './Filter.scss'


const Filter = function () {


    const options = [
      { label: 'Без пересадок', value: 'Без пересадок' },
      { label: '1 пересадка', value: '1 пересадка' },
      { label: '2 пересадки', value: '2 пересадки' },
      { label: '3 пересадки', value: '3 пересадки' },
      { label: '4 пересадки', value: '4 пересадки' },
    ];
    
     

    return (
        <div className="filter">
            <div className="filter__title">
            Количество пересадок
            </div>

            <div className="filter__options">
            <Checkbox.Group options={options} onChange={onChange} />
            </div>
        </div>
    )
}

const onChange = (checkedValues) => {
    console.log('checked = ', checkedValues);
  };

export {Filter}