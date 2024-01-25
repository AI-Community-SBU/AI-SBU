/** Code for the EBoard page of the website. The link to page is implemented in the Navbar.
 *  @author Pooja Ginjupalli
 */

import EBoardSection from "../components/EBoardSection/EBoardSection";
import TitleSection from "../components/TitleSection/TitleSection";
import Buffer from "../components/Buffer/Buffer";
import * as Constants from "../Constants/Constants";

const EBoard = () => {
  return (
    <>
      <TitleSection
        image="../assets/backgrounds/eboardBackground.jpg"
        title="Meet the Team!"
      />
      <Buffer color="rgb(54, 10, 54)" bColor="rgb(118, 36, 118)"></Buffer>
      <EBoardSection
        image="../assets/backgrounds/aboutusBackground.jpg"
        members={Constants.eboardMembers}
        title = "Our E-Board"
      />
      <Buffer color="rgb(54, 10, 54)" bColor="rgb(118, 36, 118)"></Buffer>
      <EBoardSection
        image="../assets/backgrounds/aboutusBackground.jpg"
        members={Constants.eboardAlumni}
        title = "AI Alumni"
      />
      <Buffer color="rgb(54, 10, 54)" bColor="rgb(118, 36, 118)"></Buffer>
    </>
  );
};

export default EBoard;
