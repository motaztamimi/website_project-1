import React from 'react';
import '../style/Videos.css';
const Videos = () => {
  const videos_gallery = [
    'https://www.youtube.com/embed/6v2L2UGZJAM?rel=0&amp;showinfo=0',
    'https://www.youtube.com/embed/6v2L2UGZJAM?rel=0&amp;showinfo=0',
    'https://www.youtube.com/embed/6v2L2UGZJAM?rel=0&amp;showinfo=0',
    'https://www.youtube.com/embed/6v2L2UGZJAM?rel=0&amp;showinfo=0',
    'https://www.youtube.com/embed/6v2L2UGZJAM?rel=0&amp;showinfo=0',
    'https://www.youtube.com/embed/6v2L2UGZJAM?rel=0&amp;showinfo=0',
  ];
  return (
    <div className='videos_gal'>
      <h1>גלריית סרטונים</h1>
      <div className='videos_cont'>
        {videos_gallery.map((element) => (
          <div class='video-container'>
            <div class='responsive-video'>
              <iframe
                src={element}
                width='600'
                height='338'
                frameborder='0'
                webkitAllowFullScreen
                mozallowfullscreen
                allowFullScreen></iframe>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Videos;
