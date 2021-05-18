/** @format */

import React from 'react';

import Options from '../Opthion/Opthion';

const GeneralOptions = (props) => {
  const opthions = [
    {
      text: 'im first opthion',
      handler: props.actionProvider.erorhandler,
      id: 1,
    },
    {
      text: 'im first second',
      handler: props.actionProvider.listhandler,
      id: 2,
    },
  ];
  return <Options options={opthions} {...props} />;
};

export default GeneralOptions;
