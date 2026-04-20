import { useEffect, useRef, memo } from "react";
import gsap from "gsap";

import {
  Palette,
  Code2,
  PenLine,
  Target,
  ArrowUpRight,
  ImagePlay,
} from "lucide-react";
import img from "../assets/PhotoDev.webp";
import devpenseur from "../assets/DevPenseur.webp";
import html from "../assets/html.webp";
import css from "../assets/css.webp";
import bootstrap from "../assets/bootstrap.webp";
import tailwind from "../assets/tailwind.webp";
import js from "../assets/Javascript.webp";
import Gsap from "../assets/GSAP.webp";
import react from "../assets/react.webp";
import pinterest from "../assets/pinterest.webp";
import dribble from "../assets/Dribble.webp";
import figma from "../assets/figma.webp";
import gemini from "../assets/gemini.webp";
import claude from "../assets/claude.webp";
import chatgpt from "../assets/chatgpt.webp";

export const About = memo(() => {
  const services = [
    {
      title: "Design & Interface",
      text: "Un site qui inspire confiance au premier regard. Typographie, mise en page, cohérence visuelle.",
      icon: "Palette",
      color: "236, 72, 153", // rose
    },
    {
      title: "Développement web et responsive design",
      text: "Un site rapide, propre, livrable avec animations GSAP.",
      icon: "Code2",
      color: "59, 130, 246", // bleu
    },
    {
      title: "Copywriting",
      text: "Les bons mots aux bons endroits. Ton message convainc avant même le scroll.",
      icon: "PenLine",
      color: "34, 197, 94", // vert
    },
    {
      title: "Stratégie de page",
      text: "Structure pensée pour convertir. Chaque section a un rôle précis.",
      icon: "Target",
      color: "168, 85, 247", // violet
    },
  ];

  const icons = {
    Palette,
    Code2,
    PenLine,
    Target,
  };

  const cardsRef = useRef([]);

  const handleMouseMove = (e, index) => {
    const card = cardsRef.current[index];
    if (!card) return;

    const rect = card.getBoundingClientRect();

    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    card.style.setProperty("--x", `${x}%`);
    card.style.setProperty("--y", `${y}%`);
  };

  //  GROUPE
  const devLogos = [
    html,
    css,
    bootstrap,
    tailwind,
    js,
    Gsap,
    react,
    figma,
    pinterest,
    gemini,
    claude,
    chatgpt,
    dribble,
  ];

  // Animation
  const container = useRef();
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from("#devName", {
        scrollTrigger: {
          trigger: "#devName",
          start: "top 75%",
          // markers: true,
        },
        opacity: 0,
        y: 30,
        duration: 1,
        filter: "blur(4px)",
        ease: "power3.out",
      });

      gsap.from("#devPicture", {
        scrollTrigger: {
          trigger: "#devPicture",
          start: "top 65%",
          // markers: true,
        },
        opacity: 0,
        y: 30,
        duration: 1,
        filter: "blur(2px)",
        ease: "power3.out",
      });

      gsap.from("#devfront", {
        scrollTrigger: {
          trigger: "#devfront",
          start: "top 45%",
          // markers: true,
        },
        opacity: 0,
        y: -30,
        duration: 1,
        filter: "blur(4px)",
        ease: "power3.out",
      });

      gsap.from("#storyTitle", {
        scrollTrigger: {
          trigger: "#storyTitle",
          start: "top 45%",
          // markers: true,
        },
        opacity: 0,
        x: 20,
        y: 30,
        duration: 1,
        filter: "blur(4px)",
        ease: "power3.out",
      });

      gsap.from("#devpenseur", {
        scrollTrigger: {
          trigger: "#devpenseur",
          start: "top 45%",
          // markers: true,
        },
        opacity: 0,
        x: 20,
        y: 30,
        duration: 1,
        filter: "blur(4px)",
        ease: "power3.out",
      });

      gsap.from("#story1", {
        scrollTrigger: {
          trigger: "#story1",
          start: "top 45%",
          // markers: true,
        },
        opacity: 0,
        y: 50,
        duration: 1,
        filter: "blur(1px)",
        ease: "power3.out",
      });

      gsap.from("#story2", {
        scrollTrigger: {
          trigger: "#story2",
          start: "top 45%",
          // markers: true,
        },
        opacity: 0,
        y: 50,
        duration: 1,
        filter: "blur(1px)",
        ease: "power3.out",
      });

      gsap.from("#story3", {
        scrollTrigger: {
          trigger: "#story3",
          start: "top 45%",
          // markers: true,
        },
        opacity: 0,
        y: 50,
        duration: 1,
        filter: "blur(1px)",
        ease: "power3.out",
      });

      gsap.to(".word", {
        opacity: 1,
        stagger: 0.06,
        scrollTrigger: {
          trigger: ".story-section",
          start: "top top",
          end: "+=700",
          scrub: true,
          pin: true,
          markers: false,
        },
      });

      gsap.from("#skillSectionTitre", {
        y: -30,
        opacity: 0,
        ease: "power1.out",
        scrollTrigger: {
          trigger: "#skills",
          start: "top 85%",
          // markers:true
        },
      });

      gsap.utils.toArray(".skillCard").forEach((card) => {
        gsap.from(card, {
          y: 60,
          opacity: 0,
          filter: "blur(4px)",
          
          ease: "power1.in",
          scrollTrigger: {
            trigger: card,
            start: "top 75%",
            // markers: true,
          },
        });
      });

     

    }, container);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={container} id="About">
      <section className="relative w-full min-h-screen  text-white overflow-hidden">
        <div className="absolute top-6 left-6 md:top-32 md:left-10 z-10">
          <h1
            id="devName"
            className="text-5xl md:text-8xl font-black leading-[0.8] tracking-tighter uppercase rajdhani-bold"
          >
            Janel
            <br />
            GUEDEMEY
          </h1>
        </div>

        <div
          id="devPicture"
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0"
        >
          <div className="group [perspective:1000px] w-[280px] h-[380px] md:w-[356px] md:h-[375px]">
            <div className="relative w-full h-full transition-all duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
              <div className="absolute inset-0 w-full h-full  rounded-[32px] md:rounded-[64px]  [backface-visibility:hidden] flex items-center justify-center shadow-2xl">
                <img
                  src={img}
                  alt="Avatar"
                  className="w-full h-full rounded-[32px] md:rounded-[64px]  object-cover"
                  loading="lazy"
                />
              </div>

              <div className="absolute inset-0 w-full h-full bg-[#1e1e1e] border border-white/10 rounded-[2.5rem] md:rounded-[4rem] p-8 [backface-visibility:hidden] [transform:rotateY(180deg)] flex flex-col items-center justify-center text-center">
                <p className="text-xl font-bold italic">
                  "Transformer vos idées en réalité numérique."
                </p>
              </div>
            </div>
          </div>
        </div>

        <div
          id="devfront"
          className="absolute bottom-10 right-6 md:bottom-20 md:right-20 z-10 text-right"
        >
          <p className="text-2xl md:text-5xl font-bold  leading-tight oswald">
            Développeur web
            <br />
            <span className="two">front-end freelance</span>
          </p>
        </div>
      </section>

      <div className="separator">
        <div className="line"></div>
      </div>

      <section className="mb-8 ">
        <div className="flex flex-col md:flex-row md:justify-around md:p-8 story-section">
          {/* LEFT SIDE */}
          <div className="flex flex-col gap-1 text-3xl text-center md:text-[48px] leading-[0.9] tracking-tighter oswald font-bold text-blanc">
            <h2 id="storyTitle">
              Je ne suis pas juste un <br />
              <span className="two">developpeur web.</span>
            </h2>

            <div
              id="devpenseur"
              className="relative w-[300px] h-[575px] rounded-[32px] m-auto md:m-8"
            >
              <img
                className="relative w-full h-full object-cover rounded-[32px] z-10"
                src={devpenseur}
                alt="Devpenseur"
                loading="lazy"
              />
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-[80%] h-[60px] blur-[40px] rounded-full pointer-events-none deco"></div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div
            id="story"
            className="flex flex-col gap-4 max-w-[500px] w-full p-6 oswald font-light text-gris-moyen text-xl md:text-2xl"
          >
            <p className="text break-words" aria-label="Texte complet visible pour lecteurs d’écran" aria-hidden="true">
              <span id="story1" className="text-2xl rajdhani-bold text-blanc" >
                Parcours
              </span>
              <br />

              {"Animé par une forte passion pour le design et de tout ce qui est créatif, j’ai découvert le developpement web en 2024 après l’obtention de mon Bac."
                .split(" ")
                .map((word, i) => (
                  <span key={`p1-${i}`} className="word">
                    {word + " "}
                  </span>
                ))}

              <br />
              <br />

              <span id="story2" className="text-2xl rajdhani-bold text-blanc">
                Mission
              </span>
              <br />

              {"J’ai choisi d’aider les marques et entrepreneurs qu'ils soient au Bénin ou ailleurs, à se positionner en ligne via la conception de landing pages et sites vitrines."
                .split(" ")
                .map((word, i) => (
                  <span key={`p2-${i}`} className="word">
                    {word + " "}
                  </span>
                ))}

              <br />
              <br />

              <span id="story3" className="text-2xl rajdhani-bold text-blanc">
                Pourquoi moi?
              </span>
              <br />

              {"Ce qui me différencie ? Je pense copywriting avant de penser design. Avant de choisir une couleur ou une police, je réfléchis au message qui va convaincre ton visiteur de rester, de te faire confiance et de te contacter. Un site beau mais muet ne sert à rien. Je travaille avec des artisans, des créatifs, des TPE et des entrepreneurs qui veulent un site à leur image un outil de travail, pas une carte de visite numérique oubliée."
                .split(" ")
                .map((word, i) => (
                  <span key={`p3-${i}`} className="word">
                    {word + " "}
                  </span>
                ))}
            </p>

            {/* BUTTON */}
            <button className="group relative flex self-end h-12 mr-4 space-x-2 items-center justify-between bg-blanc rounded-full text-noir oswald">
              <span className="pl-4"><a href="#Projets">Mes réalisations</a></span>

              <div className="relative h-9 w-9 overflow-hidden bg-black rounded-full mr-1">
                <div className="absolute top-[0.7em] left-[-0.1em] grid place-content-center transition-all w-full h-full duration-200 group-hover:-translate-y-5 group-hover:translate-x-4">
                  {/* ICONS */}
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    className="h-5 w-5 fill-white"
                  >
                    <path d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z" />
                  </svg>

                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    className="h-5 w-5 mb-1 -translate-x-4 fill-white"
                  >
                    <path d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z" />
                  </svg>
                </div>
              </div>
            </button>
          </div>
        </div>
      </section>

      <section id="skills" className="border-b border-dore pb-8 mb-8">
        {/* competences */}
        <h3
          id="skillSectionTitre"
          className="text-center text-3xl rajdhani-bold text-blanc"
        >
          Ce que je maitrise.
          <span className="text-dore">Ce que j'apporte</span>
        </h3>

        <div className="grid gap-6 md:grid-cols-2 p-8">
          {services.map((item, index) => {
            const Icon = icons[item.icon];

            return (
              <div
                key={index}
                ref={(el) => (cardsRef.current[index] = el)}
                onMouseMove={(e) => handleMouseMove(e, index)}
                className="group relative overflow-hidden isolate p-7 min-h-[220px] rounded-2xl border border-white/10 backdrop-blur-xl transition-transform duration-300 hover:scale-[1.03] skillCard"
                style={{
                  "--x": "50%",
                  "--y": "50%",
                }}
              >
                {/*  Glow qui suit la souris */}
                <div
                  className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: `radial-gradient(250px circle at var(--x) var(--y), rgba(${item.color}, 0.25), transparent 60%)`,
                  }}
                />

                <div className="relative z-10 flex flex-col h-full">
                  {/* HEADER */}
                  <div className="flex justify-between items-start mb-8">
                    <div
                      className="w-12 h-12 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110"
                      style={{
                        background: `rgb(${item.color})`,
                        boxShadow: `rgba(${item.color}, 0.5) 0px 0px 18px`,
                      }}
                    >
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                  </div>

                  {/* TITLE */}
                  <h3 className="text-white  text-[32px] mb-1 rajdhani-bold">
                    {item.title}
                  </h3>

                  {/* TEXT */}
                  <p className="text-white/60 text-[16px] leading-relaxed mt-auto oswald font-light">
                    {item.text}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* outils de travail */}
        <div id="toolsBloc">
          <div  className="ml-8 border-l-4 border-dore p-4 mb-8 mt-8">
            <h3 className=" text-xl md:text-3xl rajdhani-bold text-blanc">
              Mon arsenal qui me permet qe constuire des pages <br />
              <span className="rajdhani-regular">
                captivants et qui convertissent
              </span>
            </h3>
          </div>

          <div className="flex py-16 space-y-8 overflow-hidden bg-gradient-to-r from-black via-transparent to-black z-10">
            {/* 🔥 BANDE 1 (gauche → droite) */}
            <div className="group relative overflow-hidden ">
              <div className="pointer-events-none absolute inset-0  z-10"></div>

              <div className="flex w-max gap-10 shrink-0 will-change-transform animate-[var(--animate-scroll-left)] group-hover:[animation-play-state:paused]">
                {[...devLogos, ...devLogos, ...devLogos].map((logo, i) => (
                  <div
                    key={i}
                    className="w-20 h-20 flex items-center justify-center hover:scale-110 transition-transform duration-300"
                  >
                    <img
                      src={logo}
                      alt="logo"
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/*services  */}
        <div>
          <div className="ml-8 border-l-4 border-dore p-4 mb-8 mt-8 flex items-center">
            <h3 className=" text-xl md:text-3xl rajdhani-bold text-blanc">
              Services proposées <br />
            </h3>
          </div>

          <div className="services flex flex-col pl-18 md:flex-row md:justify-center gap-8">
            <div className="w-[200px] bg-dore p-4">
              <h4 className="rajdhani-bold text-[#171717] text-[24px]">
                Landing page
              </h4>
              <p className="text-[#171717] text-[21px] oswald">
                Une page pensée pour convertir lancement, produit, service,
                événement.
              </p>
              <div className="relative flex  before:content-[''] before:absolute before:-bottom-2 before:left-0 before:w-0 before:h-0.5 before:bg-blanc hover:before:w-[100px] transition-all before:duration-500 before:ease-out">
                <a className="text-[#171717]" href="https://wa.me/22951212249">
                  Contactez-moi
                </a>
                <ArrowUpRight />
              </div>
            </div>
            <div className="w-[200px] bg-blanc p-4">
              <h4 className="rajdhani-bold text-anthracite text-[24px]">
                Site vitrine
              </h4>
              <p className="text-anthracite-clair text-[21px] oswald">
                Présente ton activité avec ses valeurs, de clarté, et
                professionnalisme.
              </p>
              <div className="relative flex  before:content-[''] before:absolute before:-bottom-2 before:left-0 before:w-0 before:h-0.5 before:bg-dore hover:before:w-[100px] transition-all before:duration-500 before:ease-out">
                <a
                  className="relative text-anthracite-clair  before:content-[''] before:absolute before:-bottom-2 before:left-0 before:w-fit before:h-2 before:bg-dore"
                  href="https://wa.me/22951212249"
                >
                  Contactez-moi
                </a>
                <ArrowUpRight />
              </div>
            </div>
            <div className="w-[200px] bg-blanc p-4">
              <h4 className="rajdhani-bold textanthracite text-[24px]">
                Refonte web
              </h4>
              <p className="text-anthracite-clair text-[21px] oswald">
                Ton site existe mais il ne travaille pas. On le reconstruit pour
                que ça change.
              </p>
              <div className="relative flex  before:content-[''] before:absolute before:-bottom-2 before:left-0 before:w-0 before:h-0.5 before:bg-dore hover:before:w-[100px] transition-all before:duration-500 before:ease-out">
                <a className="text-anthracite-clair" href="https://wa.me/22951212249">
                  Contactez-moi
                </a>
                <ArrowUpRight />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
});
