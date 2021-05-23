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
          src='https://maps.google.com/maps?width=500&amp;height=500&amp;hl=en&amp;q=abu%20tor%20jerusalem+()&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed'></iframe>{' '}
        <script type='text/javascript' src={details.src2}></script>
      </div>
    </div>
  );
};

export default Googlemap;
