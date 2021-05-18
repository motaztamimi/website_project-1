/** @format */

import React from 'react';
const Event = ({ newss }) => {
  const deletePhoto = () => {};
  return (
    <div className='Event'>
      <input
        className='DeleteButton'
        type='button'
        value='X'
        onClick={() => {
          deletePhoto();
        }}
      />
      <img className='eventImg' src={newss.NewsImage} alt='' />
      <div>
        <h2>{newss.NewsTitle}</h2>
        <h5>{newss.NewsSubTitle}</h5>
      </div>
    </div>
  );
};

export default Event;
