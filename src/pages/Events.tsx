/** Code for the Events page of the website. The link to page is implemented in the Navbar.
 *  @author Pooja Ginjupalli
 */

import EventSection from "../components/EventSection/EventSection"
import TitleSection from "../components/TitleSection/TitleSection"
import Buffer from "../components/Buffer/Buffer"
import * as Constants from "../Constants.tsx"
import WorkshopSection from "../components/WorkshopSection/WorkshopSection.tsx"

const Events = () => {
  
  return (
    <>
    <TitleSection image="../src/assets/backgrounds/eventsBackground.jpg" title="Our Events!"/>
    <Buffer color = "rgb(54, 10, 54)" bColor="rgb(118, 36, 118)"></Buffer>
    <EventSection title = "Upcoming Events" eventList={Constants.upcomingEvents} errorMessage="Sorry! We currently don't have any events soon. Check back during the Spring 2024 Semester or connect with us online for any updates!"></EventSection>
    <Buffer color = "rgb(54, 10, 54)" bColor="rgb(118, 36, 118)"></Buffer>
    <WorkshopSection title = "Our Workshops" workshops={Constants.workshops} errorMessage="Looks like we don't have any active workshops! Check our discord for more details and the latest updates!"/>
    <Buffer color = "rgb(54, 10, 54)" bColor="rgb(118, 36, 118)"></Buffer>
    <EventSection title = "Previous Events" eventList={Constants.previousEvents} errorMessage="Looks like we don't have any previous events. Try checking our Instagram or joining our discord for more information!"></EventSection>
    <Buffer color = "rgb(54, 10, 54)" bColor="rgb(118, 36, 118)"></Buffer>
    </>
  )
}

export default Events