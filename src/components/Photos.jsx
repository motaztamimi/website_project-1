import React from 'react';

import '../style/Photos.css';

import useDataBase from '../hooks/useDataBase';

const Photos = () => {
  const list = useDataBase('GalleryImges');

  return (
    <div className='photo_g'>
      <h1>גלריית תמונות</h1>
      <div className='photos-gal'>
        {list.docs.map((element, index) => (
          <div key={index}>
            <a className='lightbox' href={`#${index}`}>
              <img src={element.url} alt='' />
            </a>
            <div className='lightbox-target' id={index}>
              <img src={element.url} alt='' />
              <a className='lightbox-close' href='#'></a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Photos;
