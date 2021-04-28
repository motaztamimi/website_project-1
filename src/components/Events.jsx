/** @format */

import Event from './Event';
import '../style/Events.css';

const Events = ({ events }) => {
  return (
    <section className='EventsContainer'>
      <h2>אירועים</h2>
      <section className='Events'>
        {events.map((event) => {
          return <Event key={event.id} event={event} />;
        })}
      </section>
      <a href='http://' target='_blank' rel='noopener noreferrer'>
        {' '}
        עוד אירועים{'   >'}
      </a>
    </section>
  );
};

export default Events;
