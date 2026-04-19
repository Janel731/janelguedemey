import { useEffect, useRef, memo} from "react";
import gsap from "gsap";
import { Navbar } from "./Navbar";

import "../App.css";
export const Home = memo( () => {
  const container = useRef();
  const buttonRef = useRef();
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();
      tl.from("h1", {
        opacity: 0,
        duration: 1,
        delay: 0.5,
        filter: "blur(4px)",
      });

      tl.from("p", {
        y: 10,
        opacity: 0,
        duration: 1,
        delay: 0.2,
        stagger: 0.8,
      });

      gsap.from("#heroBtn", {
        scrollTrigger: {
          trigger: "#heroPara1",
          start: "top 25%",
          
        },
        opacity: 0,
        y: 20,
        duration: 1,
        filter: "blur(4px)",
        ease: "power3.out",
      });
    }, container);
    return () => ctx.revert();
  }, []);
  return (
    <div ref={container} className=" bg-noirProf p-8" id="Home">
      <Navbar></Navbar>

      <div className="p-3 md:p-8">
        <h1 className="text-center text-[32px] text-blanc md:text-[96px] flex flex-col items-center rajdhani-bold">
          Un site joli, ça ne paie pas les
          <span className=" w-fit p-2 facture">factures</span>
        </h1>

        <p
          id="heroPara1"
          className="text-center text-[24px] text-blanc md:text-[64px] rajdhani-bold"
        >
          Le tien devrait faire les <span className="two"> deux</span>
        </p>
        <p className="text-center text-[16px] md:text-[24px] p-3 md:p-8 oswald text-gris-moyen">
          Je crée des landing pages et sites vitrines qui attirent les bons
          clients — avec un design qui en impose et un message qui convainc.
          Pour les marques et entrepreneurs qui veulent des résultats, pas juste
          un beau site.
        </p>

        <div
          id="heroBtn"
          className="w-full flex justify-center items-center flex-col gap-4 md:flex-row"
        >
          <button className="group relative flex h-12  space-x-2 items-center justify-between bg-blanc  rounded-full  text-noir oswald">
            <span className="pl-4"> <a href="#Projets">Voir mes projets</a></span>
            <div className="relative h-9 w-9 overflow-hidden  dark:bg-white bg-black rounded-full mr-1">
              <div className="absolute top-[0.7em] left-[-0.1em] grid place-content-center transition-all w-full h-full duration-200 group-hover:-translate-y-5 group-hover:translate-x-4 ">
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 dark:fill-black fill-white "
                >
                  <path
                    d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z"
                    fillRule="evenodd"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mb-1 -translate-x-4 dark:fill-black fill-white"
                >
                  <path
                    d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z"
                    fillRule="evenodd"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
            </div>
          </button>

          <button className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-full p-4 bg-noir  oswald">
            <div className="inline-flex h-12 translate-y-0 items-center justify-center  bg-noir text-blanc transition group-hover:-translate-y-[150%]">
              <a href="https://wa.me/22951212249">Discutons de votre projet</a>
            </div>
            <div className="absolute inline-flex h-12 w-full translate-y-full items-center justify-center bg-blanc text-noir transition duration-300 group-hover:translate-y-0">
              <a href="https://wa.me/22951212249">Discutons de votre projet</a>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
});
