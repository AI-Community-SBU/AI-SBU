/** Code for the PhotoSection HTML tag - Creates an instance of a list of photos with a title and an image background
 * 
 *  To create a <PhotoSection/>, you must pass an array of photos, a title, and an image
 *  @author Pooja Ginjupalli
 */

import "./PhotoSection.css"

interface PhotoSectionProp {
    photos: string[],
    title: string,
    image?: string
}

const PhotoSection = ({photos, title, image} : PhotoSectionProp) => {
  
    return (
    <div className = "photos-background" style = {{backgroundImage: image}}>
        <h1 className = "photos-title"><strong>{title}</strong></h1>
        <ul className = "photos-list">
            {/*To prevent repeat code, all items in the passed array of photos are mapped to a <li> tag*/}
            {photos.map((photo, index) => <li><img key = {index} className = "photos-photo" src = {photo}/></li>)}
        </ul>
    </div>
  )
}

export default PhotoSection;