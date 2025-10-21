import React, { useState, useEffect } from "react";
import { FaGithub, FaLinkedinIn, FaEnvelope } from "react-icons/fa";

interface TeamCardProps {
  name: string;
  role: string;
  image: string;
  github?: string;
  linkedin?: string;
  email?: string;
  bio?: string;
  summary?: string;
  skills?: string[];
}

const TeamCard: React.FC<TeamCardProps> = ({
  name,
  role,
  image,
  github,
  linkedin,
  email,
  bio,
  summary,
  skills = [],
}) => {
  const [isMobile, setIsMobile] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleCardClick = () => {
    setIsFlipped((prev) => !prev);
  };

  return (
    <div
      className="w-[300px] h-[370px] m-5 perspective"
      onClick={handleCardClick}
    >
      <div
        className={`relative w-full h-full transition-transform duration-700 transform-style preserve-3d ${
          isFlipped ? "rotate-y-180" : ""
        }`}
      >
        {/* FRONT */}
        <div
          className={`absolute w-full h-full backface-hidden overflow-hidden border-[2px] border-[#B68B20] rounded-xl shadow-[0_30px_40px_-20px_rgba(0,0,0,0.2)] flex justify-center items-center ${
            !isMobile ? "group cursor-pointer" : ""
          }`}
        >
          <img src={image} alt={name} className="w-full h-full object-cover" />
          <div
            className={`absolute w-full h-[160px] flex flex-col justify-center items-center bg-[#F5D88C]/80 backdrop-blur-md border-t border-[#B68B20]/30 rounded-xl px-5 transition-all duration-500 ${
              isMobile ? "bottom-0" : "bottom-[-160px] group-hover:bottom-0"
            }`}
          >
            <h3
              className={`uppercase text-[#1E2A45] tracking-wider font-semibold text-[20px] text-center my-2 leading-tight font-playfair ${
                isMobile
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 -translate-y-5 group-hover:opacity-100 group-hover:translate-y-0"
              }`}
            >
              {name}
              <br />
              <span className="block mt-1 text-sm font-normal normal-case font-playfair">
                {role}
              </span>
            </h3>

            <ul className="flex">
              {[
                { icon: FaGithub, link: github },
                {
                  icon: FaEnvelope,
                  link: email ? `mailto:${email}` : undefined,
                },
                { icon: FaLinkedinIn, link: linkedin },
              ].map(({ icon: Icon, link }, index) => (
                <li
                  key={index}
                  style={{ transitionDelay: `${index * 200}ms` }}
                  className={`mx-2 transition-all duration-500 ${
                    isMobile
                      ? "translate-y-0 opacity-100"
                      : "translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100"
                  }`}
                >
                  {link && (
                    <a
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#1E2A45] text-2xl hover:text-[#3c548d] transition"
                    >
                      <Icon />
                    </a>
                  )}
                </li>
              ))}
            </ul>

            <p className="text-center text-xs mt-2 text-[#1E2A45]/80 italic">
              See more → Flip the card
            </p>
          </div>
        </div>

        {/* BACK */}
        <div className="absolute w-full h-full backface-hidden rotate-y-180 border-[2px] border-[#B68B20] rounded-xl shadow-xl bg-[#F5D88C]/90 p-5 flex flex-col justify-between cursor-pointer">
          <div>
            <h3 className="text-lg font-semibold text-[#1E2A45] text-center font-playfair">
              {name}
            </h3>
            <p className="text-sm text-[#1E2A45] text-center font-playfair mb-2">
              {role}
            </p>

            {/* Resume summary */}
            {summary && (
              <p className="text-[13px] text-[#1E2A45] font-playfair italic text-center mb-3">
                {summary}
              </p>
            )}

            {/* Conversational Bio */}
            <p className="text-[13px] text-[#1E2A45] font-playfair leading-relaxed text-justify mb-4">
              {bio ||
                "Hey there! I'm passionate about what I do at ZALA — bringing ideas to life and making immersive tech accessible to all."}
            </p>
          </div>

          {/* Skills as pills */}
          {skills.length > 0 && (
            <div className="flex flex-wrap gap-2 justify-center mt-2">
              {skills.map((skill, idx) => (
                <span
                  key={idx}
                  className="bg-[#B68B20]/20 text-[#1E2A45] font-medium text-xs px-3 py-1 rounded-full font-playfair border border-[#B68B20]/40"
                >
                  {skill}
                </span>
              ))}
            </div>
          )}

          <p className="text-center text-xs mt-4 text-[#1E2A45]/80 italic">
            Click to flip back →
          </p>
        </div>
      </div>

      {/* Flip styles */}
      <style>{`
        .perspective {
          perspective: 1000px;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
        .preserve-3d {
          transform-style: preserve-3d;
        }
      `}</style>
    </div>
  );
};

export default TeamCard;
