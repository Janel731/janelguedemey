
import gsap from "gsap";
import {useEffect, useRef, memo, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
export const ContactUs = memo(() => {
  const contacts = [
    {
      id: 1,
      reseau: "Whatsapp",
      text: ["Ecrire directement", " Canal préféré | Réponse rapide "],
      lien: "https://wa.me/22951212249",
      color: "34, 197, 94", // vert
    },

    {
      id: 2,
      reseau: "Email",
      text: ["gratiasdeo418@gmail.com", "Pour les briefs détaillés"],
      lien: "mailto:gratiasdeo418@gmail.com",
      color: "234, 67, 53", //rouge
    },

    {
      id: 3,
      reseau: "Facebook",
      text: ["M'ecrire ou me suivre"],
      lien: "https://www.facebook.com/JanelGuedemey",
      color: "59, 130, 246", // bleu
    },

    {
      id: 4,
      reseau: "Disponibilité",
      text: ["Actif", "Délai selon cahier de charge"],
      color: "52, 168, 83", //vert2
    },
  ];

  const [form, setForm] = useState({
    nom: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const phoneNumber = "22951212249";

    const text = `Bonjour, je m'appelle ${form.nom}%0AEmail: ${form.email}%0A%0A${form.message}`;

    const whatsappURL = `https://wa.me/${phoneNumber}?text=${text}`;

    window.open(whatsappURL, "_blank");
  };

  const [open, setOpen] = useState(null);

  const faqs = [
    {
      title: "Quel type de sites tu développes ?",
      content:
        "Je crée des sites modernes : landing pages, sites vitrines, portfolios pour convertir.",
    },
    {
      title: "Combien de temps prend un site web ?",
      content:
        "En général ca dépend de la complexité du projet (landing page rapide ou site complet avec plusieurs pages).",
    },
    {
      title: "Est-ce que mes sites sont responsive ?",
      content:
        "Oui, tous mes sites sont 100% responsive et adaptés aux téléphones, tablettes et ordinateurs.",
    },
    {
      title: "Peux-tu améliorer un site existant ?",
      content:
        "Oui, je propose la refonte de sites pour améliorer le design, la performance et le taux de conversion.",
    },
    {
      title: "Est-ce que tu fais aussi le design UI/UX ?",
      content:
        "Oui, je conçois des interfaces modernes avec une bonne hiérarchie visuelle pour améliorer l’expérience utilisateur.",
    },
    {
      title: "Comment te contacter pour un projet ?",
      content: "Tu peux me contacter via WhatsApp, email sur mon portfolio.",
    },
  ];

   const container = useRef();
  useEffect(()=> {
    const ctx = gsap.context(()=> {
      

      // gsap.from("#creativ span", {
      //   y:30,
      //   opacity:0,
      //   duration:1,
      //   delay:0.5,
      //   stagger:0.5,
      //   scrollTrigger:{
      //     trigger: "#creativ span",
      //     start: "top 75%",
      //     // markers:true
      //   }
      // })

      gsap.utils.toArray(".contact").forEach((contact) => {
        gsap.from(contact, {
          y: 60,
          opacity: 0,
          
          ease: "power1.in",
          scrollTrigger: {
            trigger: contact,
            start: "top 75%",
            // markers: true,
          },
        });
      });


    }, container)
    return () =>ctx.revert();
  }, [])

  return (
    <section ref={container} className="mt-8 p-2 md:p-12" id="Contact">
      <h3 className="text-center text-3xl rajdhani-bold text-blanc">
        Un projet en texte?
        <span className="text-dore">Parlons-en.</span>
      </h3>

      <p className="oswald font-light text-2xl text-blanc">
        Pas besoin d'avoir tout préparé, dis-moi où vous en êtes, <br />
        je vous aide à voir ce dont tu as besoin. Réponse garantie sous 24h.
      </p>

      <div className="grid gap-8 md:grid-cols-2 p-auto md:p-12  mb-12">
        {contacts.map((contact) => (
          <div
            key={contact.id}
            className="group relative w-full md:max-w-[380px] m-auto contact"
          >
            {/* Glow background */}
            <div
              className="absolute -inset-[1px] rounded-3xl opacity-0 group-hover:opacity-100 blur-2xl transition duration-500"
              style={{
                background: `radial-gradient(circle at top left, rgba(${contact.color},0.5), transparent 60%)`,
              }}
            />

            {/* Card */}
            <div
              className="relative rounded-3xl p-7 flex flex-col gap-6
        bg-[#1f1f1f]/50 border border-white/5
        shadow-[0_10px_30px_rgba(0,0,0,0.4)]
        hover:-translate-y-2 transition-all duration-500"
            >
              {/* Accent line */}
              <div
                className="h-[2px] w-16 rounded-full"
                style={{
                  background: `rgb(${contact.color})`,
                  boxShadow: `0 0 12px rgba(${contact.color},0.5)`,
                }}
              />

              {/* Title */}
              <p
                className="text-3xl rajdhani-bold tracking-tight"
                style={{
                  color: `rgb(${contact.color})`,
                  textShadow: `0 0 12px rgba(${contact.color},0.25)`,
                }}
              >
                {contact.reseau}
              </p>

              {/* Divider */}
              <div className="h-px w-full bg-white/5" />

              {/* Links */}
              <div className="flex flex-wrap gap-6">
                {contact.text.map((text, index) => (
                  <a key={index} href={contact.lien}>
                    <span
                      className="relative overflow-hidden px-4 py-2 text-sm oswald font-medium
                rounded-full border border-white/10
                bg-white/5 text-white/70
                hover:text-white transition-all duration-300"
                    >
                      {/* hover fill */}
                      <span
                        className="absolute inset-0 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"
                        style={{
                          opacity: 0.15,
                        }}
                      />
                      <span className="relative z-10">{text}</span>
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="max-w-3xl mx-auto space-y-4 p-6">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="relative group  rounded-2xl border  bg-[#1f1f1f] overflow-hidden border-two"
          >
            {/* Glow */}
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 blur-2xl"
              style={{
                background:
                  "radial-gradient(circle at top left, rgba(52,168,83,0.15), transparent 60%)",
              }}
            />

            {/* Question */}
            <button
              onClick={() => setOpen(open === index ? null : index)}
              className="relative w-full flex justify-between items-center px-5 py-4 text-left"
            >
              <span className="text-white rajdhani-bold text-xl">
                {faq.title}
              </span>

              <span className="text-white/60 text-xl">
                {open === index ? "−" : "+"}
              </span>
            </button>

            {/* Answer */}
            <div
              className={`px-5 overflow-hidden  transition-all duration-300 ${
                open === index
                  ? "max-h-40 pb-5 opacity-100"
                  : "max-h-0 opacity-0"
              }`}
            >
              <p className="text-white/70 text-[14px] md:text-xl leading-relaxed oswald">
                {faq.content}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="separator">
        <div className="line"></div>
      </div>

      <div className="mt-16">
        <h4 className="text-blanc rajdhani-bold text-center text-3xl md:text-[40px]">
          Démarrons votre <span className="two">projet</span>
        </h4>

        <div className="flex justify-center gap-8">
          <button className="bg-two rounded-[24px] text-[14px]  md:text-[24px] mt-4 p-4  oswald">
            <a
              href="https://wa.me/22951212249"
              className="text-blanc flex  justify-center items-center gap-2"
            >
              <FaWhatsapp /> Me contacter
            </a>
          </button>

          <button className="bg-blanc rounded-[24px] text-[14px] md:text-[24px] mt-4 p-4 oswald">
            <a
              href="#Projets"
              className="text-noir flex  justify-center items-center gap-2"
            >
              Mes réalisations
            </a>
          </button>
        </div>
      </div>
    </section>
  );
});
