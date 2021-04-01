import React from 'react'
import img from '../imges/event1.jpg'
const Event = ({event}) => {
    return (
     
        <div className="Event">
        <h6>{event.date}</h6>
            <img className="eventimg" src={event.img} alt=""/>
            <h3>{event.CardTitle}</h3>
            <h5>{event.body}</h5>
        </div>
      
    )
}

export default Event
