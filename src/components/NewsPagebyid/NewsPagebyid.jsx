/** @format */

import React from 'react';
import useDataBase from '../../hooks/useDataBase';
const NewsPagebyid = () => {
  let Nmews = useDataBase('News');

  const currentURL = window.location.href;
  let resa = currentURL.split('/');
  let newq = Nmews.docs.filter((neq) => neq.id === resa[4]);
  return <div>{currentURL} </div>;
};

export default NewsPagebyid;
