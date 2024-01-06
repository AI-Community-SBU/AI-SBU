/** Code for the TextSection HTML tag - Creates a section with
 *  a simple image background, a title/header, and a paragraph of text
 * 
 *  To create <TextSection/>, you must pass a title/header, the paragraph of text, and a image for the background
 *  as seen in the Home page for the "About Us" section
 *  @author Pooja Ginjupalli
 */

import "./TextSection.css"

interface TextSectionProp {
    title: string,
    paragraph: string,
    image?: string,
    backgroundColor?: string,
    titleColor?: string,
    flexDirection?: "row" | "row-reverse" | "column" | "column-reverse",
}

const TextSection = ({title, paragraph, image, backgroundColor, titleColor, flexDirection}: TextSectionProp) => {
  
    return (
    <div className = "textsection" style = {{backgroundImage: image, backgroundColor: backgroundColor, flexDirection: flexDirection}}>
        <h1 className = "textsection-title" style = {{backgroundColor: titleColor}}>{title}</h1>
        <p className = "textsection-text">{paragraph}</p>
    </div>
  )
}

export default TextSection