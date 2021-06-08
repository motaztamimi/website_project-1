/** @format */

import React from 'react';
import './map.css';
const Googlemap2 = () => {
  return (
    <div className='Mapdiv'>
      <div className='map'>
        <iframe
          width='500'
          height='500'
          frameBorder='0'
          scrolling='no'
          marginHeight='0'
          marginWidth='0'
          id='gmap_canvas'
          src='https://maps.google.com/maps?width=500&amp;height=500&amp;hl=en&amp;q=Kfar%20Shaul%20Mental%20Health%20Center%20Jerusalem%20+(%D7%9B%D7%A4%D7%A8%20%D7%A9%D7%90%D7%95%D7%9C)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed'></iframe>

        <script
          type='text/javascript'
          src='https://embedmaps.com/google-maps-authorization/script.js?id=ba9ebb3db40d537649e0320625a4ffbc3bece31a'></script>
      </div>
    </div>
  );
};

export default Googlemap2;
