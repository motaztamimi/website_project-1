import React from 'react';
import LineInResearchPage from './LineInResearchPage';
import '../../style/AllResearchs.css';

function AllResearchs() {
  return (
    <div>
      <h1 id='title'>מחקרים</h1>
      <div className='container'>
        <LineInResearchPage name='שלום רב זה אחד המחקרים' />
        <LineInResearchPage name='שלום רב זה אחד המחקרים' />
        <LineInResearchPage name='שלום רב זה אחד המחקרים' />
        <LineInResearchPage name='שלום רב זה אחד המחקרים' />
      </div>
    </div>
  );
}

export default AllResearchs;
