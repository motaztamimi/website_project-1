/** @format */

import React from 'react';
import './Opthion.css';
const Opthion = (props) => {
  const listOpthion = props.options.map((oop) => (
    <button key={oop.id} onClick={oop.handler} className='optionButton'>
      {oop.text}
    </button>
  ));

  return <div className='list-Opthion-Container'>{listOpthion} </div>;
};

export default Opthion;
