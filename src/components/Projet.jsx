import { useEffect, useRef, memo } from "react";
import gsap from "gsap";
import { ArrowUpRight } from "lucide-react";
import mc from "../assets/mc.webp";
import vanoSite from "../assets/vanoSite.webp";
import paesta from "../assets/patesta.webp";
import porto from "../assets/MyFolio.webp";

export const Projet = memo( () => {
     const blocksData = [
  {
    id: 1,
    title: "Chez Melek",
    badges: ["Branding", "Expérience utilisateur"],
    description:
      "Plateforme digitale mettant en avant une activité de vente de vêtements avec une identité visuelle forte. Il se distingue par un design soigné et une navigation fluide. L’objectif est de valoriser les services proposés tout en créant une connexion avec les visiteurs. Le contenu est structuré pour capter l’attention et guider l’utilisateur.",
    image: mc,
    lien:"https://chez-melek.vercel.app/" ,
    aria:"Voir le site de chez meleck en live"
  },
  {
    id: 2,
    title: "10 ans du Gang",
    badges: ["Événementiel", "Site vitrine"],
    description:
      "Le site du concert de Vano (Challenge en FuturCraftInstitut & ESM-Benin) a été conçu pour promouvoir les 10ans de carrière de l'artiste. Il met en avant l’artiste, les informations essentielles. Le site centralise toute la communication autour de l’événement.",
    image: vanoSite,
    lien:"https://vano-site.vercel.app/",
    aria:"Voir le site de  vano   en live"
  },
  {
    id: 3,
    title: "Pâtisserie Esta Délices",
    badges: ["Landing page", "Food Design"],
    description:
      "Le site Esta Délices met en avant les produits de la pâtisserie à travers des visuels attrayants. Il permet de découvrir les différentes offres et spécialités proposées. Le design chaleureux donne envie et renforce l’image de la marque. Le site facilite la prise de contact et les commandes. Il sert d’outil efficace pour attirer et fidéliser les clients.",
    
      image: paesta,
    lien:"https://patisserie-esta-delices.vercel.app/",
    aria:"Voir le site patisserie live"
  },
  {
    id: 4,
    title: "Mon portfolio",
    badges: ["UI/UX Design", "Développement web"],
    description:
      "Mon portfolio présente mes compétences en design et en développement web. Il met en avant mes projets et mon savoir-faire à travers une interface moderne. Le design est pensé pour capter l’attention et valoriser chaque réalisation. L’objectif est de convaincre clients et recruteurs. Il reflète ma créativité, ma rigueur et mon expertise technique.",
    image: porto,
    lien:"https://janelguedemey.vercel.app/",
    aria:"Voir mon potfolio"
  },
];

 const container = useRef();
  useEffect(()=> {
    const ctx = gsap.context(()=> {
      

      gsap.from("#creativ span", {
        y:30,
        opacity:0,
        duration:1,
        delay:0.5,
        stagger:0.5,
        scrollTrigger:{
          trigger: "#creativ span",
          start: "top 75%",
          // markers:true
        }
      })

      gsap.utils.toArray(".projet").forEach((projet) => {
        gsap.from(projet, {
          y: 60,
          opacity: 0,
          filter: "blur(7px)",
          
          ease: "power1.in",
          scrollTrigger: {
            trigger: projet,
            start: "top 75%",
            // markers: true,
          },
        });
      });


    }, container)
    return () =>ctx.revert();
  }, [])
  return (
    <section   ref={container} id="Projets" className=" mb-8">
      <div className="w-full pr-12">
          <h4 id="creativ" className="flex flex-col text-[32px] md:text-[72px]">
            <span className="self-end text-transparent contour rajdhani-bold leading-[0.7] tracking-tighter">Mes creations</span>
            <span className="self-end text-blanc leading-[0.7] tracking-tighter rajdhani-bold">Mes creations</span>
            <span className="self-end text-transparent contour leading-[0.7] tracking-tighter rajdhani-bold">Mes creations</span>
        </h4>
      </div>

      
     <div className="space-y-10 p-2  md:p-12">
      {blocksData.map((block) => (
        <div
          key={block.id}
          className="flex flex-col  lg:flex-row items-center justify-between border border-neutral-700 rounded-2xl p-6 gap-6 projet"
        >
          {/* LEFT CONTENT */}
          <div className="flex-1 space-y-4">
            {/* BADGES */}
            <div className="flex gap-2">
              {block.badges.map((badge, index) => (
                <span
                  key={index}
                  className="text-sm px-3 py-1 border oswald font-light text-blanc/50 rounded-full"
                >
                  {badge}
                </span>
              ))}
            </div>

            {/* TITLE */}
            <h3 className="text-2xl text-blanc oswald font-bold">{block.title}</h3>

            {/* DESCRIPTION */}
            <p className="oswald font-light text-blanc">{block.description}</p>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative lg:w-[700px] h-full rounded-xl overflow-hidden">
            <img
              src={block.image}
              alt={block.title}
              className="w-full h-full object-cover" loading="lazy"
            />

            {/* ICON (bottom left) */}
            <a href={block.lien} className="absolute bottom-3 right-3  p-2 rounded-full border-anthracite-clair border-2" aria-label={block.aria}>
               <ArrowUpRight size={24}  />
            </a>
          </div>
        </div>
      ))}
      </div>

    </section>
  )
})
