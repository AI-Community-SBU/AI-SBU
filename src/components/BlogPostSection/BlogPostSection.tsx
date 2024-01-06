/** This file contains code for multiple HTML tags, only one of which is used outside this file.
 *  @author Pooja Ginjupalli
 */
import "./BlogPostSection.css";

interface BlogPostProp {
  image: string;
  title: string;
  datePosted: string;
  link: string;
  description: string;
  orientation: string;
  publisher: string;
}

/** Code for the BlogPost HTML tag which is only used in this file (similar to a private method in Java)
 *  Creates a card-like box displaying the information for some resource in AI.
 * 
 *  To create an <BlogPost/>, you must properties for a BlogPostProp shown above
 */
const BlogPost = (blogpost: BlogPostProp) => {
  return (
    <div className={"blogpost " + blogpost.orientation}>
      <img src={blogpost.image} className="blogpost-image" />
      <div className="blogpost-body">
        <p className="blogpost-stats">
          <strong>
            <i>{blogpost.title}</i> | {blogpost.publisher} | Posted:{" "}
            {blogpost.datePosted} |{" "}
            <a
              className="blogpost-link"
              target="_blank"
              rel="noopener noreferrer"
              href={blogpost.link}
            >
              Link
            </a>
          </strong>
        </p>
        <p className="blogpost-description">{blogpost.description}</p>
      </div>
    </div>
  );
};

interface BlogPostSectionProp {
  title: string;
  articles: BlogPostProp[];
}

/** Code for the BlogPostSection HTML tag which is used outside this file
 *  Creates a list of BlogPosts.
 * 
 *  To create an <BlogPostSection/>, you must properties for a BlogPostSectionProp shown above
 */
const BlogPostSection = ({ title, articles }: BlogPostSectionProp) => {
  return (
    <div className="blogpostsection">
      <h1 className="blogpostsection-title">
        <strong>{title}</strong>
      </h1>
      <ul className="blogpostsection-list">
        {articles.map((article, index) => (
          <li key={index} style={{ listStyleType: "none" }}>
            <BlogPost
              publisher={article.publisher}
              title={article.title}
              datePosted={article.datePosted}
              image={article.image}
              link={article.link}
              description={article.description}
              orientation={article.orientation}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogPostSection;
