/** @format */

import React from 'react';
import './map.css';
const Googlemap = ({ details }) => {
  return (
    <div className='Mapdiv'>
      <div className='map'>
        <iframe
          width={details.width}
          height={details.height}
          frameBorder='0'
          scrolling='no'
          marginHeight='0'
          marginWidth='0'
          id='gmap_canvas'
          src='https://maps.google.com/maps?width=500&amp;height=500&amp;hl=en&amp;q=%D7%91%D7%99%D7%AA%20%D7%97%D7%95%D7%9C%D7%99%D7%9D%20%D7%90%D7%99%D7%AA%D7%A0%D7%99%D7%9D%20Jerusalem%20+(%D7%91%D7%99%D7%AA%20%D7%97%D7%95%D7%9C%D7%99%D7%9D%20%D7%90%D7%99%D7%AA%D7%A0%D7%99%D7%9D)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed'></iframe>

        <script
          type='text/javascript'
          src='https://embedmaps.com/google-maps-authorization/script.js?id=9c7ea40008e7186df49ba8c49aaa32b3c5ae3f76'></script>
      </div>
    </div>
  );
};

export default Googlemap;
