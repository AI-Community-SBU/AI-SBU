/** This file contains code for multiple HTML tags, only one of which is used outside this file.
 *  @author Pooja Ginjupalli
 */
import "./EBoardSection.css"

interface EBoardProp {
    image: string,
    name: string,
    role: string,
    link?: string,
}

/** Code for the EBoard HTML tag which is only used inside this file (similar to a private method in Java)
 *  Creates a transparent card-like box which showcases an EBoard member
 * 
 *  To create an <EBoard/>, you must pass an image, a name, and the role
 */
const EBoard = ({image, name, role, link}: EBoardProp) => {
  return (
    <div className = "eboard-member">
      <img className = "eboard-photo" src = {image}/>
      <h2 className = "eboard-name"><strong>{name}</strong></h2>
      <h3 className = "eboard-role">{role}</h3>
      {(link != undefined) ? <h3 className = "eboard-link"><a style = {{color: "black"}} href = {link} target = "_blank" rel = "noreferrer noopener">See them now!</a></h3> : null}
      
    </div>
  )
}

/** Code for the EBoardSection HTML tag which is what is actually used outside this file
 *  Creates a named section with a list of <EBoard/> members
 * 
 *  To create an <EventSection/>, you must pass a title, an array of EventProps, and a background image
 */
interface EBoardSectionProp {
    members: EBoardProp[],
    image: string,
    title: string,
}

const EBoardSection = ({members, image, title}: EBoardSectionProp) => {
  const backgroundStyle = {
    backgroundImage: "url(" + image + ")"
  }
  
  return (
    <div className = "eboard-section" style={backgroundStyle}>
      <h1 className = "eboard-title"><strong>{title}</strong></h1>
      <ul className = "eboard-list">
          {/*To prevent repeat code, all items in the passed array of EBoardProps are mapped to a <li> tag*/}
          {members.map((member, index) => <EBoard key = {index} image = {member.image} name = {member.name} role = {member.role} link = {member.link}/>)}
      </ul>
    </div>
  )
}

export default EBoardSection;