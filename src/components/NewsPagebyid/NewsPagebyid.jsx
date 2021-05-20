/** @format */

import React, { useEffect, useState } from 'react';
import { dataBase } from '../../config/firebase';
import useDataBase from '../../hooks/useDataBase';
const NewsPagebyid = () => {
  const qq = useDataBase('Research');
  console.log(qq);
  const collectionRef = dataBase.collection('News');
  const [news, setnews] = useState(undefined);
  const currentURL = window.location.href;
  let resa = currentURL.split('/');
  useEffect(() => {
    collectionRef
      .doc(resa[4])
      .get()
      .then((item) => {
        setnews(item.data());
        console.log(item.data());
      });
  }, []);
  return (
    <div className='NewsPageContainerId'>
      <h2>{news && news.NewsTitle}</h2>
    </div>
  );
};

export default NewsPagebyid;
