/** This file contains code for multiple HTML tags, only one of which is used outside this file.
 *  @author Pooja Ginjupalli
 */
import "./WorkshopSection.css";

type WorkshopProp = {
  name: string,
  image: string,
  caption: string,
  description: string,
  signuplink?: string,
};

/** Code for the Workshop HTML tag which is only used in this file (similar to a private method in Java)
 *  Creates a card-like box displaying the information for one of our club's workshops.
 * 
 *  To create an <Workshop/>, you must pass properties for a WorkshopProp shown above
 */
const Workshop = (workshop: WorkshopProp) => {
  return <div className="workshop">
    <div className="workshop-image-wrapper" style = {{backgroundImage: workshop.image}}>
      <h2 className="workshop-name-over">{workshop.name}</h2>
    </div>
    <div className="workshop-text">
        <div className="workshop-titles">
            <h2 className="workshop-name">{workshop.name}</h2>
            <h3 className="workshop-caption">{workshop.caption}</h3>
            {(workshop.signuplink && workshop.signuplink != "") && <h5 className="workshop-link"><a href = {workshop.signuplink} target="_blank">Sign Up Now!</a></h5>}
        </div>
        <p className="workshop-description">{workshop.description}</p>
    </div>

  </div>;
};

type WorkshopSectionProp = {
  title: string,
  backgroundImage?: string,
  backgroundColor?: string,
  workshops: WorkshopProp[],
  errorMessage: string,
}

/** Code for the WorkshopSection HTML tag which is used outside this file
 *  Creates a list of workshops.
 * 
 *  To create an <WorkshopSection/>, you must pass properties for a WorkshopSectionProp shown above
 */
const WorkshopSection = (workshopSection: WorkshopSectionProp) => {
  return (
    <div className = "workshopsection-background" style = {{backgroundColor: workshopSection.backgroundColor, backgroundImage: workshopSection.backgroundImage}}>
      <h1 className="workshopsection-title">{workshopSection.title}</h1>
      <ul className="workshopsection-list">
        {workshopSection.workshops.map((workshop, index) => <li key={index}><Workshop name = {workshop.name} caption={workshop.caption} description={workshop.description} image = {workshop.image} signuplink={workshop.signuplink}/></li>)}
      </ul>
    </div>
  );
};

export default WorkshopSection;
