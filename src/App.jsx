import { ScrollTrigger, SplitText } from "gsap/all";
import gsap from "gsap";

import About from "./components/about";
import Home from "./components/home";
import Navbar from "./components/Navbar";
import Tiffins from "./components/tiffins";
import Menu from "./components/menu";
import Contact from "./components/contact";



gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
  return (
    <main>
      <Navbar/>
      <Home/>
      <Tiffins/>
      <About/>
      <Menu/>
      <Contact/>
      {/* <div className="min-h-screen flex items-center justify-center">
      <Home/>
      </div> */}
    </main>
  );
}

export default App