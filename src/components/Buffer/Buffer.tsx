/** Code for the Buffer HTML tag. Creates a color-customizable buffer meant to be placed between sections
 * 
 *  To create a <Buffer/>, you must pass the background color (color) and the border color (bColor)
 *  Color Format: "rgb({# from 0-255}, {# from 0-255}, {# from 0-255})"
 *  @author Pooja Ginjupalli
 */

import "./Buffer.css";

interface BufferProp {
  color: string;
  bColor: string;
}

const Buffer = ({ color, bColor }: BufferProp) => {
  const style = {
    backgroundColor: color,
    borderColor: bColor,
  };

  return <div className="buffer" style={style}>
    
  </div>;
};

export default Buffer;
