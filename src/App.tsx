/**This is the base page for the website. Anything coded here will show up on every tab.
 */

import "./App.css";
import Footer from "./components/Footer/Footer.tsx";
import Navbar from "./components/Navbar/Navbar.tsx";

function App() {
  return (
    <>
      <div className ="website">
        <Navbar/>
        <Footer/>
      </div>
    </>
  );
}

export default App;
