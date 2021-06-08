/** @format */
import useDataBase from '../hooks/useDataBase';
import React from 'react';
import '../style/Videos.css';
const Videos = () => {
  const videos_gallery =  useDataBase('Videos');
  return (
    <div className='videos_gal'>
      <h1> סרטונים</h1>
      <div className='videos_cont'>
        {videos_gallery.docs.map((element, index) => (
          <div className='video-container' key={index}>
            <div className='responsive-video'>
              <iframe
                src={element.VideoURL}
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
