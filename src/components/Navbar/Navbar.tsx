/** Code for the Navbar HTML tag - Creates an instance of a Navigation bar with links to the different pages of the website
 *  Tags for each page such as <Home/> and <Events/> are used here.
 *  @author Pooja Ginjupalli
 */

import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "../../pages/Home";
import Events from "../../pages/Events";
import PhotoGallery from "../../pages/PhotoGallery";
import EBoard from "../../pages/EBoard";
import LatestNews from "../../pages/LatestNews";
import ConnectWithUs from "../../pages/ConnectWithUs";
import "./Navbar.css";

const Navbar = () => {
  const [style, setStyle] = useState("dropdown-close");

  /** When called, the dropdown navigation menu switches its status.
   *  If the menu is visible, it becomes invisible and vice versa
   */
  function changeDropdownStatus() {
    if (style === "dropdown-close") {
      setStyle("dropdown-open");
    } else {
      setStyle("dropdown-close");
    }
  }

  return (
    <>
      {/*Responsible for the Navbar you see on desktops which disappears on mobile screens*/}
      <nav className="nav">
        <Link className="home-icon-link" to="/">
          <img src="/src/assets/Logo.png" className="logo" />
        </Link>
        <ul className="links">
          <li>
            <Link className="link" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="link" to="/pages/Events">
              Events
            </Link>
          </li>
          <li>
            <Link className="link" to="/pages/PhotoGallery">
              Photo Gallery
            </Link>
          </li>
          <li>
            <Link className="link" to="/pages/EBoard">
              E-Board
            </Link>
          </li>
          <li>
            <Link className="link" to="/pages/LatestNews">
              Latest News
            </Link>
          </li>
          <li>
            <Link className="link" to="/pages/ConnectWithUs">
              Connect With Us
            </Link>
          </li>
        </ul>
        <img className="menu-icon" src="/src/assets/menuIcon.svg" onClick={changeDropdownStatus}/>
      </nav>

      {/*Responsible for the Navbar you see on mobile devices which disappears on desktop screens*/}
      <nav className={style}>
        <ul className="dropdown-links">
          <li>
            <Link to="/" className="dropdown-link">
              Home
            </Link>
          </li>
          <li className="dropdown-link">
            <Link to="/pages/Events" className="dropdown-link">
              Events
            </Link>
          </li>
          <li>
            <Link to="/pages/PhotoGallery" className="dropdown-link">
              Photo Gallery
            </Link>
          </li>
          <li>
            <Link to="/pages/EBoard" className="dropdown-link">
              E-Board
            </Link>
          </li>
          <li>
            <Link to="/pages/LatestNews" className="dropdown-link">
              Latest News
            </Link>
          </li>
          <li>
            <Link to="/pages/ConnectWithUs" className="dropdown-link">
              Connect With Us
            </Link>
          </li>
        </ul>
      </nav>

      {/*Creates the links to each page with Home being the default upon entering website
         You must add a link here to add a new page before changing the HTML above.*/}
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/pages/Events" element={<Events />} />
        <Route path="/pages/PhotoGallery" element={<PhotoGallery />} />
        <Route path="/pages/EBoard" element={<EBoard />} />
        <Route path="/pages/LatestNews" element={<LatestNews />} />
        <Route path="/pages/ConnectWithUs" element={<ConnectWithUs />} />
        <Route path="/pages/LatestNews" element={<LatestNews />} />
      </Routes>
    </>
  );
};

export default Navbar;
