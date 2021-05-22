/** @format */

import React from 'react';

import Options from '../Opthion/Opthion';

const GeneralOptions = (props) => {
  const opthions = [
    {
      text: 'מי אתם',
      handler: props.actionProvider.erorhandler,
      id: 1,
    },
    {
      text: 'במה האתר יכול לעזור לי',
      handler: props.actionProvider.listhandler,
      id: 2,
    },
    {
      text: ' מה ההבדל בין האתר הישן לחדש',
      handler: props.actionProvider.listhandler,
      id: 3,
    },
  ];
  return <Options options={opthions} {...props} />;
};

export default GeneralOptions;
