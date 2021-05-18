/** @format */

import Event from './Event';
import '../style/Events.css';

const Events = ({ news }) => {
  return (
    <section className='EventsContainer'>
      <section className='Events'>
        {news.map((newa) => {
          return <Event key={newa.id} newss={newa} />;
        })}
      </section>
    </section>
  );
};

export default Events;
