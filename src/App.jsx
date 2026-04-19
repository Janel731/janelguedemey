
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

import { Home } from './components/Home'
import { About } from './components/About'
import { Projet } from './components/Projet'
import { ContactUs } from './components/ContactUs'
import "./App.css";
import { Footer } from './components/Footer'


function App() {
 

  return (
    <>
    <Home></Home>
    <About></About>
    <Projet/> 
    <ContactUs/>
    <Footer/>
    </>
  )
}

export default App
