/** Code for the ConnectWithUs page of the website. The link to page is implemented in the Navbar.
 *  @author Pooja Ginjupalli
 */

import SocialMediaSection from "../components/SocialMediaSection/SocialMediaSection";
import TitleSection from "../components/TitleSection/TitleSection";
import Buffer from "../components/Buffer/Buffer";
import * as Constants from "../Constants";

const ConnectWithUs = () => {

  return (
    <>
      <TitleSection
        image="../assets/backgrounds/connectBackground.jpg"
        title="Connect With Us!"
      />
      <Buffer color = "rgb(54, 10, 54)" bColor="rgb(118, 36, 118)"></Buffer>
      <SocialMediaSection medias={Constants.medias} title = "Find Us Online" background="url(/src/assets/backgrounds/aboutUsBackground.jpg)"/>
      <Buffer color = "rgb(54, 10, 54)" bColor="rgb(118, 36, 118)"></Buffer>
    </>
  );
};

export default ConnectWithUs;
