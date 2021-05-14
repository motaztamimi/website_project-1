/** @format */

import React from 'react';
import './Opthion.css';
const Opthion = (props) => {
  const opthions = [
    {
      text: 'im first opthion',
      handler: props.actionProvider.listhandler,
      id: 1,
    },
    {
      text: 'im first second',
      handler: props.actionProvider.listhandler,
      id: 2,
    },
  ];

  const listOpthion = opthions.map((oop) => (
    <button key={oop.id} onClick={oop.handler} className='optionButton'>
      {oop.text}
    </button>
  ));

  return <div className='list-Opthion-Container'>{listOpthion} </div>;
};

export default Opthion;
