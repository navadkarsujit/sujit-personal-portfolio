import Home from "./components/Home";
import NavBar from "./components/NavBar";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
// import Edu from "./components/Edu";
function App() {
  return (
    <div>
      <NavBar/>
      <Home/>
      <About/>
      <Portfolio/>
      {/* <Edu/> */}
      <Skills/>
      <Contact/>
    </div>
  );
}

export default App;
