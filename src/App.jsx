import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import SocialLinks from "./Components/Linkbar";
import About from "./Components/About";
import Projects from "./Components/Projects";
import Experience from "./Components/Experience";
import Contact from "./Components/Contacts";
export default function App() {
  return (
   <div className="bg-gray-700 ">
     
      {/* <div> */}
     <Home/>
     <Navbar/>
    <SocialLinks/>
    <About/>
    <Projects />
    <Experience/>
    <Contact/>
    {/* </div> */}
   </div>
  )
}
