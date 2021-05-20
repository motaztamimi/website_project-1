/** @format */

import React from 'react';
import './map.css';
const Googlemap = () => {
  return (
    <div>
      <iframe
        className='map'
        width='600'
        height='500'
        frameborder='0'
        scrolling='no'
        marginheight='0'
        src='https://maps.google.com/maps?width=600&amp;height=500&amp;hl=en&amp;q=abu%20tor%20jerusalem+(%D7%9B%D7%A4%D7%A8%20%D7%A9%D7%90%D7%95%D7%9C)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed'
        marginwidth='0'
        id='gmap_canvas'></iframe>
      <script
        type='text/javascript'
        src='https://embedmaps.com/google-maps-authorization/script.js?id=f8e6d2568fc662fc8e904337b9b77cad2523a221'></script>
    </div>
  );
};

export default Googlemap;
