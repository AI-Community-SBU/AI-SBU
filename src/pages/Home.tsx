/** Code for the default Home page of the website. The link to page is implemented in the Navbar.
 *  @author Pooja Ginjupalli
 */

import TextSection from "../components/TextSection/TextSection";
import TitleSection from "../components/TitleSection/TitleSection";
import Buffer from "../components/Buffer/Buffer";
import EmbeddedVideo from "../components/EmbeddedVideo/EmbeddedVideo";
import EventSection from "../components/EventSection/EventSection";
import * as Constants from "../Constants/Constants";

const Home = () => {
  return (
    <>
      <TitleSection
        title="Welcome to the AI Community at Stony Brook University!"
        image="../AI-SBU/assets/backgrounds/mainBackground.jpg"
      ></TitleSection>
      <Buffer color="rgb(54, 10, 54)" bColor="rgb(118, 36, 118)"></Buffer>
      <TextSection
        title="About Us"
        paragraph="We are a student-run organization at Stony Brook University dedicated to educating our members and providing resources about all things AI. We provide a close community to encourage real-world discussion and build technical skills beyond what students learn from class in hopes they will carry this knowledge for their future aspirations!"
        backgroundColor="rgb(227, 186, 227)"
        titleColor="white"
      ></TextSection>
      <Buffer color="rgb(54, 10, 54)" bColor="rgb(118, 36, 118)"></Buffer>
      <TextSection
        title="What We Do"
        paragraph="We host workshops dealing with many areas of AI such as Neural Networks, Machine Learning, and Image Generation! In addition, we host social events to build community and guest lectures where professors and other people in the AI field talk about what they're currently are working on."
        backgroundColor="rgb(255, 231, 250)"
        titleColor="white"
        flexDirection="row-reverse"
      ></TextSection>
      <Buffer color="rgb(54, 10, 54)" bColor="rgb(118, 36, 118)"></Buffer>
      <EmbeddedVideo
        video="../assets/videos/crowdedRoom1.mp4"
        text="Get A Glimpse Into Our Events!"
      />
      <Buffer color="rgb(54, 10, 54)" bColor="rgb(118, 36, 118)"></Buffer>
      <EventSection
        title="Previous Events"
        eventList={Constants.previousEvents}
      ></EventSection>
      <Buffer color="rgb(54, 10, 54)" bColor="rgb(118, 36, 118)"></Buffer>
    </>
  );
};

export default Home;
