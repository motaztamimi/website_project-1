/** @format */

import React from 'react';
import '../style/Videos.css';
const Videos = () => {
  const videos_gallery = [
    'https://www.youtube.com/embed/9jyK4NhXjgE',
    'https://www.youtube.com/embed/JuVHjhJlcyA',
    'https://www.youtube.com/embed/_I6YHmfUEy0',
    'https://www.youtube.com/embed/eL08QD3Kp1A',
    'https://www.youtube.com/embed/PxkoKDpopNk',
    'https://www.youtube.com/embed/4FmbhP4MVb0',
  ];
  return (
    <div className='videos_gal'>
      <h1> סרטונים</h1>
      <div className='videos_cont'>
        {videos_gallery.map((element, index) => (
          <div className='video-container' key={index}>
            <div className='responsive-video'>
              <iframe
                src={element}
                width='600'
                height='338'
                frameBorder='0'
                allowFullScreen
                title={index}></iframe>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Videos;
