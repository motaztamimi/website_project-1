/** @format */

import React from 'react';
import './map.css';
const Googlemap = () => {
  return (
    <div className='Mapdiv'>
      <div className='map'>
        <iframe
          width='300'
          height='300'
          frameBorder='0'
          scrolling='no'
          marginHeight='0'
          marginWidth='0'
          id='gmap_canvas'
          src='https://maps.google.com/maps?width=300&amp;height=300&amp;hl=en&amp;q=%D7%90%D7%91%D7%95%20%D7%98%D7%95%D7%A8%20jerusalem+(%D7%90%D7%99%D7%AA%D7%A0%D7%99%D7%9D)&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed'></iframe>{' '}
        <script
          type='text/javascript'
          src='https://embedmaps.com/google-maps-authorization/script.js?id=6d659dd929144d4ee0d54063c835823f43d245cf'></script>
      </div>
    </div>
  );
};

export default Googlemap;
