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
          id={details.id}
          src={details.src1}></iframe>{' '}
        <script type='text/javascript' src={details.src2}></script>
      </div>
    </div>
  );
};

export default Googlemap;
