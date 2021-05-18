import React from 'react';
import img1 from '../imges/1.jpg';
import img2 from '../imges/2.jpg';

import '../style/Gallery.css';
const gallery = () => {
  return (
    <div className='galleryContainer'>
      <h2 id='m6'> גלריה</h2>
      <div className='gallery_row'>
        <div className='photo'>
          <img src={img1} alt='Avatar' />
          <div className='overlay'>
            <div className='text'>תמונות</div>
          </div>
        </div>
        <div className='video'>
          <img src={img2} alt='Avatar' />
          <div className='overlay'>
            <div className='text'>סרטונים</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default gallery;
