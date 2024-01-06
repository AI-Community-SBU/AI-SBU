/** This file contains code for multiple HTML tags, only one of which is used outside this file.
 *  @author Pooja Ginjupalli
 */
import "./EventSection.css"

/** Code for the EventCard HTML tag which is only used in this file (similar to a private method in Java)
 *  Creates a card-like box displaying the flyer for an event, the name, date, and small description.
 * 
 *  To create an <EventCard/>, you must pass and image (flyer), the title, date, and description
 */
interface EventProp {
  image: string,
  title: string,
  date: string,
  description: string
};

const EventCard = ({image, title, date, description} : EventProp) => {
  const widthStyle = {
    width: "18rem",
  };

  return (
    <div className="eventcard" style={widthStyle}>
      <img src={image} className="eventcard-image"/>
      <div className="eventcard-text">
        <h4 className="eventcard-title"><strong>{title}</strong></h4>
        <h5 className = "eventcard-date"><strong>{date}</strong></h5>
        <p className="eventcard-description">
          {description}
        </p>
      </div>
    </div>
  );
};

/** Code for the EventList HTML tag which is only used in this file (similar to a private method in Java)
 *  Creates a list of EventCards when given a list of EventProps.
 * 
 *  To create an <EventList/>, you must pass an array of EventCards
 */
interface EventListProp {
  eventList: EventProp[]
};

const EventList = ({ eventList }: EventListProp) => {
    return (
    <ul className="events">
      {/*To prevent repeat code, all items in the passed array of EventProps are mapped to a <li> tag*/}
      {eventList.map((event, index) => (
        <li>
          <EventCard
            key={index}
            image={event.image}
            title={event.title}
            date={event.date}
            description={event.description}
          ></EventCard>
        </li>
      ))}
    </ul>
  );
};

/** Code for the EventSection HTML tag which is what is actually used outside this file
 *  Creates a named section with an EventList and an image background
 * 
 *  To create an <EventSection/>, you must pass a title, an array of EventProps, and a background image
 */
interface EventSectionProp {
  title: string,
  eventList: EventProp[],
  background?: string,
  errorMessage?: string
}

const EventSection = ({title, eventList, background, errorMessage}: EventSectionProp) => {
  return (
    <div className = "events-background" style = {{backgroundImage: background}}>
        <h1 className = "events-title"><strong>{title}</strong></h1>
        {eventList.length > 0 
          ? <EventList eventList={eventList}></EventList> 
          : <h3 className="events-errormessage"><strong>{errorMessage}</strong></h3>}
    </div>
  )
}

export default EventSection;