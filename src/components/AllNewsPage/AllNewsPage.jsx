/** @format */

import News from '../News';
import useDataBase from '../../hooks/useDataBase';
import React from 'react';
import './AllNewPage.css';
const AllNewsPage = () => {
  let Nmews = useDataBase('News');
  return (
    <div className='ALLnewslistcontainer'>
      <News News={Nmews.docs} howmany={false} />
    </div>
  );
};

export default AllNewsPage;
