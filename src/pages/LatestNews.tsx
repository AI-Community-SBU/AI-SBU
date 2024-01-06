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
