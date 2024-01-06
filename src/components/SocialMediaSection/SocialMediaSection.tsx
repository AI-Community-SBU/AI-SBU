/** This file contains code for multiple HTML tags, only one of which is used outside this file.
 *  @author Pooja Ginjupalli
 */
import "./SocialMediaSection.css";

/** Code for the SocialMedia HTML tag which is only used in this file (similar to a private method in Java)
 *  Creates a card-like box displaying the social media and a button to the external site
 * 
 *  To create a <SocialMedia/>, you must pass an image, a background gradient, a title, name,
 *  the link to the social media, and animation specifications
 * 
 *  Background Gradient format: "linear-gradient(to bottom right, {color 1 - RGB Format}, {color 2 - RGB Format}, ..."
 *  Animation Specification Format: "{Time of animation in seconds}s"
 */
interface SocialMediaProp {
  icon: string;
  background: string;
  title: string;
  name: string;
  link: string;
  animation: string;
}

const SocialMedia = ({icon,background,title,name,link, animation}: SocialMediaProp) => {
    return (
    <div className="socialmedia" style={{ backgroundImage: background }}>
      <div className="socialmedia-icon" style = {{backgroundImage: icon, animationDuration: animation}} />
      <h3 className="socialmedia-title">{title}</h3>
      <button className="socialmedia-button">
        <a className="socialmedia-link" target="_blank" rel="noopener noreferrer" href={link}>
          {name}
        </a>
      </button>
    </div>
  );
};

/** Code for the SocialMediaSection HTML tag which is used outside this file
 *  Creates a named list of SocialMedia
 * 
 *  To create a <SocialMediaSection/>, you must pass an title, a background image, and an array of SocialMediaProps
 */
interface SocialMediaSectionProp {
  title: string;
  background: string,
  medias: SocialMediaProp[];
}

const SocialMediaSection = ({ title, background, medias }: SocialMediaSectionProp) => {
  return (
    <div className = "mediasection" style = {{backgroundImage: background}}>
      <h1 className = "mediasection-title"><strong>{title}</strong></h1>
      <ul className="mediasection-list">
        {/*To prevent repeat code, all items in the passed array of SocialMediaProps are mapped to a <li> tag*/}
        {medias.map((media, index) => (
          <li key={index}>
            <SocialMedia
              icon={media.icon}
              background={media.background}
              title={media.title}
              name={media.name}
              link={media.link}
              animation={media.animation}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialMediaSection;
