import React from "react";
import { FaFacebookF, FaWhatsapp, FaGithub } from "react-icons/fa";
export const Footer = () => {
  return (
    <footer className="relative border-t border-neutral-800 bg-black text-white px-6 py-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        {/* LEFT */}
        <div className="text-center md:text-left space-y-2">
           <h2 className="text-3xl md:text-xl text-blanc rajdhani-bold">Janel <span className="text-dore">GUEDEMEY</span></h2>
          <p className="text-neutral-400 text-sm">
            Designer & Développeur web passionné par les interfaces modernes.
          </p>
        </div>

        {/* CENTER */}
        <div className="flex gap-6 text-sm text-neutral-400">
          <a href="#Home" className="hover:text-white transition">
            Accueil
          </a>
          <a href="#Projects" className="hover:text-white transition">
            Projets
          </a>
          <a href="#About" className="hover:text-white transition">
            À propos
          </a>
          <a href="#Contact" className="hover:text-white transition">
            Contact
          </a>
        </div>

        {/* RIGHT SOCIALS */}
        <div className="flex gap-4">
          <a
            href="https://www.facebook.com/JanelGuedemey"
            target="_blank"
            className="p-3 rounded-full border border-neutral-700 hover:border-blue-500 hover:text-blue-500 transition"  aria-label="Voir mon Facebook"
          >
            <FaFacebookF size={16} />
          </a>

          <a
            href="https://wa.me/22951212249"
            target="_blank"
            className="p-3 rounded-full border border-neutral-700 hover:border-green-500 hover:text-green-500 transition" aria-label="Me contacter via whatsapp"
          >
            <FaWhatsapp size={16} />
          </a>

          <a
            href="https://github.com/Janel731"
            target="_blank"
            className="p-3 rounded-full border border-neutral-700 hover:border-white hover:text-white transition" aria-label="Voir mon GitHub"
          >
            <FaGithub size={16} />
          </a>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="mt-10 text-center text-xs text-neutral-600">
        © {new Date().getFullYear()} Mon Portfolio. Tous droits réservés.
      </div>
    </footer>
  );
};
