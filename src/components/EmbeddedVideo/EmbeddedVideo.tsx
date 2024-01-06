/** Code for a Embedded HTML tag - Creates a section with video which plays on hover
 *
 *  To create a <ParallaxEffect/>, you must pass the video for the effect
 *  @author Pooja Ginjupalli
 */

import "./EmbeddedVideo.css";

interface EmbeddedVideoProp {
  video: string,
  text?: string
}

const EmbeddedVideo = ({ video, text}: EmbeddedVideoProp) => {
  
  const start = (event: React.MouseEvent<HTMLVideoElement>) => {
    const text = document.getElementById('text');
    if (text) {
      const displayNone = () => {
        text.style.display = 'none'
      }
      text.style.opacity = '0'
      setTimeout(displayNone, 100)
    }
    
    const video = event.target as HTMLVideoElement;
    video.play();
  };

  const pause = (event: React.MouseEvent<HTMLVideoElement>) => {
    const text = document.getElementById('text');
    if (text) {
      text.style.display = 'block'
      text.style.opacity = '100'
    }
    
    const video = event.target as HTMLVideoElement;
    video.pause();
  };

  return (
    
    <div style = {{position: "relative"}}>
      <video
        className="video"
        onMouseOver={start}
        onMouseLeave={pause}
        muted
        loop
      >
        <source src={video} type="video/mp4" />
      </video>
      <h2 className="video-text" id="text"><strong>{text}</strong></h2>
    </div>
    
  );
};

export default EmbeddedVideo;
