/** Code for the TitleSection HTML tag - Creates an instance of a section 
 *  with an image background and text over it, acting as the title for that page
 * 
 *  When adding/creating this tag, you must give it a background image and a title
 * @author Pooja Ginjupalli
 */

import Typewriter from "typewriter-effect";
import "./TitleSection.css";

interface TitleSectionProp {
  image: string;
  title: string;
}

const TitleSection = ({ image, title }: TitleSectionProp) => {
  const background = {
    backgroundImage: "url(" + image + ")",
  };

  return (
    <div className="mainBackground" style={background}>
      <p className="title">
        <strong>
          {/*Responsible for the typewriter effect in every TitleSection for each page*/}
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString(title)
                .pauseFor(1000)
                .start();
            }}
          />
        </strong>
      </p>
    </div>
  );
};

export default TitleSection;
