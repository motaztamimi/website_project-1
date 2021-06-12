/** @format */

import React, { useEffect, useState } from 'react';
import { dataBase } from '../../config/firebase';
import './NewsPagebyid.css';
const NewsPagebyid = () => {
  const [news, setnews] = useState(undefined);
  const currentURL = window.location.href;
  const [resa] = useState(currentURL.split('/'));
  useEffect(() => {
    dataBase
      .collection('News')
      .doc(resa[4])
      .get()
      .then((item) => {
        setnews(item.data());
      });
  }, [resa]);
  return (
    <div className='NewsPageContainerId'>
      <h2>{news && news.NewsTitle}</h2>
      <h3> {news && news.NewsSubTitle}</h3>
      <div className='hrdiv'></div>
      <div>
        <img src={news && news.NewsImage} alt='' />
      </div>
      <div className='newsBody'> {news && news.NewsBody}</div>
    </div>
  );
};

export default NewsPagebyid;
