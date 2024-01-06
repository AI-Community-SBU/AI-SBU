/** Code for the Footer HTML tag which is implemented in App.tsx and shows up in every page.
 *  @author Pooja Ginjupalli
 */

import "./Footer.css";
import { FaMapMarkerAlt } from "react-icons/fa";
import {BiMailSend} from "react-icons/bi";

const Footer = () => {
  return (
    <div className="footer">
      <div className = "footerBox">
        <div className="footerTextBox">
          <FaMapMarkerAlt className="footerIcon" />
          <p className="footerText">
            Stony Brook University, Stony Brook NY, 11794-2200
          </p>
        </div>
        <div className="footerTextBox">
          <BiMailSend className="footerIcon" />
          <p className="footerText">aicommunityatsbu@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
