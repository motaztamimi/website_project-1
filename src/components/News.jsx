/** @format */

import NewsCard from './NewsCard';
import React from 'react';
import '../style/News.css';
const News = ({ News, howmany }) => {
  let max = 0;
  if (News.length >= 3) {
    max = 3;
  } else {
    max = News.length;
  }
  function getNews() {
    if (howmany) {
      return News.slice(0, max);
    } else {
      return News;
    }
  }

  return (
    <section className='News'>
      <h2 id='m5'>חדשות</h2>
      <section className='NewsContainer'>
        {getNews().map((news) => {
          return (
            <React.Fragment key={news.id + 100}>
              <NewsCard news={news} key={news.id} />
            </React.Fragment>
          );
        })}
        {howmany && (
          <a href='/NewsList' id='moreNews'>
            {' '}
            עוד חדשות{'   >'}
          </a>
        )}
      </section>
    </section>
  );
};

export default News;
