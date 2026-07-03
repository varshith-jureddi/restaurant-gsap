import About from "./components/about";
import Home from "./components/home";
import Navbar from "./components/Navbar";
import Tiffins from "./components/tiffins";

const App = () => {
  return (
    <main>
      <Navbar/>
      <Home/>
      <Tiffins/>
      <About/>
      {/* <div className="min-h-screen flex items-center justify-center">
      <Home/>
      </div> */}
    </main>
  );
}

export default App