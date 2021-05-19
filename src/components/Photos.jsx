/** @format */

import React from 'react';

import '../style/Photos.css';

import img1 from '../imges/1.jpg';
import img2 from '../imges/2.jpg';
import img3 from '../imges/3.jpg';
import img4 from '../imges/4.jpg';
import img5 from '../imges/5.jpg';
import img6 from '../imges/OIP.jpg';
import img7 from '../imges/7.jpg';
import img8 from '../imges/8.jpg';

const Photos = () => {
  const list = [
    { id: 1, img: img1, h: '#1' },
    { id: 2, img: img2, h: '#2' },
    { id: 3, img: img3, h: '#3' },
    { id: 4, img: img4, h: '#4' },
    { id: 5, img: img5, h: '#5' },
    { id: 6, img: img6, h: '#6' },
    { id: 7, img: img7, h: '#7' },
    { id: 8, img: img8, h: '#8' },
  ];

  return (
    <div className='photo_g'>
      <h1>גלריית תמונות</h1>
      <div className='photos-gal'>
        {list.map((element, index) => (
          <div className='Photosbox' key={index}>
            <a className='lightbox' href={element.h}>
              <img src={element.img} alt='' />
            </a>
            <div className='lightbox-target' id={element.id}>
              <img src={element.img} alt='' />
              <a className='lightbox-close' href='/#'></a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Photos;
