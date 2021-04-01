
import Event from "./Event"



const Events = ({events}) => {
    return (
    
  <section className="EventsContainer">
<h2 >אירועים</h2>
      <section className="Events">
        
     
     {events.map((event)=>{
         return <Event key={event.id} 
            event={event}
             />
        })}

    </section>
    </section>
    )
}

export default Events
