import React from "react";
import TeamCard from "../components/home/TeamCard";
import Navbar from "@/components/home/Navigation";

const teamMembers = [
  {
    name: "Yani Rachel M",
    role: "Founder & CEO",
    image: "/yani.png",
    github: "https://github.com/yani",
    linkedin: "https://linkedin.com/in/yani-m-2394b922a/",
    email: "yani@example.com",
    summary: "Drawn to stories that spark imagination and purpose.",
    bio: `Hi, I’m Yani — I lead ZALA with a deep love for storytelling and curating experiences that matter. I focus on discovering meaningful stories, building partnerships, and ensuring our voice always stays true to its roots.`,
    skills: [
      "Story Selection",
      "Vision & Strategy",
      "Investor & Public Relations",
      "Strategic Outreach",
    ],
  },
  {
    name: "Sidhardha V",
    role: "Co-Founder & Tech Lead",
    image: "/sidhu.png",
    github: "https://github.com/sidhardha58",
    linkedin: "https://www.linkedin.com/in/sidhardha-valavala-1a2463276",
    email: "sidhardha.valavala@gmail.com",
    summary: "Turns ideas into structure and stories into systems.",
    bio: `Hey! I’m Sidhu — I work on bringing our ideas to life. I help shape the product, guide the tech team, and ensure we build with clarity and purpose — always moving ZALA from vision to reality.`,
    skills: [
      "Idea to Execution",
      "Team Coordination",
      "Project Planning",
      "Prototyping & Concept Execution",
    ],
  },
];

const TeamPage = () => {
  return (
    <>
      <Navbar />

      {/* ========== TEAM SECTION ========== */}
      <div className="relative min-h-screen bg-[#fdf8f0] px-6 py-16 overflow-hidden">
        {/* Background Logo */}
        <img
          src="/bg.png"
          alt="ZALA Logo Background"
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[950px] opacity-30 pointer-events-none z-0"
        />

        <h1 className="text-4xl font-bold text-[#b58611] text-center mt-4 mb-8 font-playfair relative z-10">
          Our Team
        </h1>

        <div className="flex flex-col md:flex-row justify-center items-center gap-8 relative z-10">
          {teamMembers.map((member, index) => (
            <TeamCard
              key={index}
              name={member.name}
              role={member.role}
              image={member.image}
              github={member.github}
              linkedin={member.linkedin}
              email={member.email}
              bio={member.bio}
              skills={member.skills}
            />
          ))}
        </div>
      </div>

      {/* ========== DIVIDER ========== */}
      <div className="bg-[#fdf8f0] px-6 py-6">
        <div className="border-t border-[#e0c47a] w-full max-w-xs mx-auto opacity-60 mb-4" />
      </div>

      {/* ========== CTA SECTION ========== */}
      <section className="bg-[#fdf8f0] px-6 text-center w-full mx-auto relative z-10 mb-10">
        <h2 className="text-3xl md:text-4xl font-playfair font-semibold text-[#1E2A45] mb-4">
          Let’s Build the Future of Stories Together
        </h2>
        <p className="text-md md:text-lg text-[#1E2A45]/90 font-playfair leading-relaxed mb-6">
          At ZALA, we believe stories are more than just words — they’re portals
          to wonder. If you're a dreamer, builder, creative, <br />
          or a quiet visionary, we want to hear from you. Tell us what you're
          passionate about,
          <br /> and let’s explore how your voice can shape what we build.
        </p>

        <a
          href="https://www.linkedin.com/in/zala-where-books-comes-alive-089a24389/"
          target="_blank"
          className="inline-block bg-[#B68B20] text-white font-medium px-6 py-3 rounded-full hover:bg-[#9f7418] transition-all duration-200"
        >
          I'm Interested — Let's Connect
        </a>

        <p className="text-center text-xs mt-4 text-[#1E2A45]/70 italic">
          If the button doesn’t work, you can email us directly at{" "}
          <p className="underline text-[#1E2A45] hover:text-[#9f7418]">
            bookscomealive.zala@gmail.com
          </p>
        </p>
      </section>
    </>
  );
};

export default TeamPage;
