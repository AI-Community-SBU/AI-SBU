/**This is the base page for the website. Anything coded here will show up on every tab.
 * The Datathon page is rendered as a standalone page without the site chrome.
 */

import { useLocation } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer.tsx";
import Navbar from "./components/Navbar/Navbar.tsx";

function App() {
  const location = useLocation();
  const isDatathon = location.pathname.includes("/pages/Datathon");

  return (
    <>
      <div className={isDatathon ? "" : "website"}>
        <Navbar />
        {!isDatathon && <Footer />}
      </div>
    </>
  );
}

export default App;
