/** Code for the Photo Gallery page of the website. The link to page is implemented in the Navbar.
 *  @author Pooja Ginjupalli
 */

import Buffer from "../components/Buffer/Buffer";
import TitleSection from "../components/TitleSection/TitleSection";
import PhotoSection from "../components/PhotoSection/PhotoSection";
import { photos } from "../Constants/Constants";

const PhotoGallery = () => {
  return (
    <>
      <TitleSection
        image="../assets/backgrounds/photoGalleryBackground.jpg"
        title="Our Photo Gallery!"
      />
      <Buffer color="rgb(54, 10, 54)" bColor="rgb(118, 36, 118)"></Buffer>
      <PhotoSection title="Our Photos" photos={photos} />
      <Buffer color="rgb(54, 10, 54)" bColor="rgb(118, 36, 118)" />
    </>
  );
};

export default PhotoGallery;
