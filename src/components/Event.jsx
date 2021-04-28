/** @format */

import React from 'react';
const Event = ({ event }) => {
  return (
    <div className='Event'>
      <h6>{event.date}</h6>
      <img className='eventImg' src={event.img} alt='' />
      <h3>{event.CardTitle}</h3>
      <h5>{event.body}</h5>
    </div>
  );
};

export default Event;
