/** Code for the Latest News page of the website. The link to page is implemented in the Navbar.
 *  This page is never really updated as there is no real use for it. Any resources we want to give to out students
 *  are usually done in the Discord Server. In fact, recruiters/rponsers don't really need these resources.
 *     If the rest of board is in agreement, this page can be deleted
 *  @author Pooja Ginjupalli
 */

import TitleSection from "../components/TitleSection/TitleSection";
import BlogPostSection from "../components/BlogPostSection/BlogPostSection";
import Buffer from "../components/Buffer/Buffer";
import * as Constants from "../Constants/Constants";

const LatestNews = () => {
  return (
    <>
      <TitleSection
        title="Latest News and Resources in AI"
        image="../assets/backgrounds/latestNewsBackground.jpg"
      />
      <Buffer color="rgb(54, 10, 54)" bColor="rgb(118, 36, 118)" />
      <BlogPostSection
        title="Current News in AI"
        articles={Constants.currentArticles}
      />
      <Buffer color="rgb(54, 10, 54)" bColor="rgb(118, 36, 118)" />
      <BlogPostSection
        title="More Resources"
        articles={Constants.moreArticles}
      />
      <Buffer color="rgb(54, 10, 54)" bColor="rgb(118, 36, 118)" />
    </>
  );
};

export default LatestNews;
