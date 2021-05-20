/** @format */

import React from 'react';
import { useHistory } from 'react-router-dom';
import img1 from '../imges/1.jpg';
import img2 from '../imges/2.jpg';

import '../style/Gallery.css';
const Gallery = () => {
  const history = useHistory();

  return (
    <div className='galleryContainer'>
      <h2 id='m6'> גלריה</h2>
      <div className='gallery_row'>
        <div
          className='photo'
          onClick={() => {
            history.push('/Gallery');
          }}>
          <img src={img1} alt='Avatar' />
          <div className='overlay'>
            <div className='text'>תמונות</div>
          </div>
        </div>
        <div
          className='video'
          onClick={() => {
            history.push('/Videos');
          }}>
          <img src={img2} alt='Avatar' />
          <div className='overlay'>
            <div className='text'>סרטונים</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
