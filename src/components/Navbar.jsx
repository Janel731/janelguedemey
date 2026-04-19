import { useEffect, useRef, memo } from "react";
import gsap from "gsap";
import '../App.css'


export const Navbar = memo(() => {
  const container = useRef();
  useEffect(()=> {
    const ctx = gsap.context(()=> {
      const tl = gsap.timeline();

      tl.from(".brand", {
        y:-30,
        opacity:0,
        duration:1,
        delay:0.5
      })

      tl.from("li", {
        y:-20,
        opacity:0,
        duration:1,
        filter: "blur(7px)",
        stagger:0.5
      })

    }, container)
    return () =>ctx.revert();
  }, [])
  
  return (
    <div ref={container} className="flex justify-center md:justify-between items-center p-4">
        <div className="flex items-center brand">
            <p className="text-3xl md:text-xl text-blanc rajdhani-bold">Janel <span className="text-dore">GUEDEMEY</span></p>
        </div>

        
            <ul className="hidden md:flex space-x-4 md:text-xl oswald">
                <li className="relative text-blanc before:content-[''] before:absolute before:-bottom-2 before:left-0 before:w-0 before:h-0.5 before:bg-blanc hover:before:w-full before:duration-500 before:ease-out"><a href="#Home">Acceuil</a></li>
                <li className="relative text-dore before:content-[''] before:absolute before:-bottom-2 before:left-0 before:w-0 before:h-0.5 before:bg-dore hover:before:w-full before:duration-500 before:ease-out"><a href="#Projets">Projets</a></li>
                <li className="relative text-blanc before:content-[''] before:absolute before:-bottom-2 before:left-0 before:w-0 before:h-0.5 before:bg-blanc hover:before:w-full before:duration-500 before:ease-out"><a href="#About">About</a></li>
                <li className="relative text-blanc before:content-[''] before:absolute before:-bottom-2 before:left-0 before:w-0 before:h-0.5 before:bg-blanc hover:before:w-full before:duration-500 before:ease-out"><a href="#skills">Compétences</a></li>
                <li className="relative text-blanc before:content-[''] before:absolute before:-bottom-2 before:left-0 before:w-0 before:h-0.5 before:bg-blanc hover:before:w-full before:duration-500 before:ease-out"><a href="#Contact">Contact</a></li>
            </ul>
        
    </div>
  )
})
