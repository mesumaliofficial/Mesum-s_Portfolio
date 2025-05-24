"use client";

import { Element } from 'react-scroll';
import { useEffect } from "react";
import Image, { StaticImageData } from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

import Navbar from "./components/Navbar";
import pic from "./../../public/mesum.png";
import project_1 from "@/app/assets/img/Project_1.png";
import project_2 from "@/app/assets/img/Project_2.png";
import project_3 from "@/app/assets/img/Project_3.png";

import { PiBrainLight, PiCubeLight, PiCodeLight, PiTrendUpLight, PiChartLineUpLight } from "react-icons/pi";
import { IoServer } from "react-icons/io5";
import { FaExternalLinkAlt } from "react-icons/fa";
import Footer from "./components/Footer";
import SkillsSection from "./components/Skills";
import ContactSection from './components/Contact';

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <>
      <header>
        <Navbar />
      </header>

      <Element name="Home">
        <div className="bg-[#121212] min-h-screen text-white overflow-hidden relative py-20">
          <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-[#1595b6] opacity-20 rounded-full blur-3xl z-0"></div>
          <div className="absolute bottom-[-100px] right-[-100px] w-[300px] h-[300px] bg-[#1595b6] opacity-20 rounded-full blur-3xl z-0"></div>

          <div className="container mx-auto px-10 py-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              <div className="text-center lg:text-left" data-aos="fade-right">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                  Hi, I’m <span className="text-[#1595b6]">Mesum</span>
                </h1>
                <h2 className="text-3xl md:text-4xl font-semibold text-[#1595b6] mb-6">
                  Full Stack Developer
                </h2>
                <p className="border-l-4 border-r-4 rounded-2xl pl-6 pr-6 border-[#1595b6] text-base text-white/90 mx-auto lg:mx-0 leading-relaxed mb-6">
                  Specializing in dynamic websites and scalable e-commerce systems that deliver exceptional user experiences and drive measurable results.
                </p>
                <div
                  className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                  data-aos="fade-up"
                >
                  <button
                    className="bg-[#1595b6] hover:bg-[#117a95] px-8 py-3 rounded-md text-white font-semibold text-base transition-all duration-300 transform hover:scale-105 shadow-lg shadow-[#1595b6]/30 cursor-pointer"
                    aria-label="Explore Mesum's work"
                  >
                    Explore My Work
                  </button>
                  <button
                    className="bg-transparent hover:bg-[#1595b6]/10 border-2 border-[#1595b6] px-8 py-3 rounded-md text-[#1595b6] font-semibold text-base transition-all duration-300 transform hover:scale-105"
                    aria-label="Download Mesum's resume"
                  >
                    Download Resume
                  </button>
                </div>
                <div
                  className="mt-8 flex lg:justify-start justify-center items-center gap-4"
                  data-aos="zoom-in"
                >
                  <span className="bg-[#1e1e1e] px-4 py-2 rounded-full text-sm font-medium text-white/90">Frontend</span>
                  <span className="bg-[#1e1e1e] px-4 py-2 rounded-full text-sm font-medium text-white/90">Backend</span>
                  <span className="bg-[#1e1e1e] px-4 py-2 rounded-full text-sm font-medium text-white/90">Database</span>
                </div>
              </div>

              <div className="flex justify-center items-center lg:justify-end" data-aos="fade-left">
                <div className="relative group bg-gradient-to-br from-[#1595b6] to-[#236b81] p-[5px] rounded-[20px] shadow-lg shadow-cyan-700/30">
                  <div className="bg-[#0e0e0e] rounded-[15px] overflow-hidden w-72 h-96">
                    <Image src={pic} alt="Mesum" className="w-full h-full object-cover object-top opacity-90 group-hover:opacity-100 transition duration-500" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Element>

      <Element name="About">
        <section id="about" className="bg-[#020817] min-h-screen text-white overflow-hidden relative py-24 px-6 md:px-16">
          <div className="max-w-7xl mx-auto">
            {/* Heading */}
            <div className="mb-12" data-aos="fade-up">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 relative inline-block">
                <span className="relative z-10">About Me</span>
              </h2>
              <div className="flex items-center gap-4">
                <div className="w-16 h-1 bg-gradient-to-r from-[#03b7e4] to-transparent rounded-full"></div>
                <span className="text-[#00ccff] text-sm font-medium uppercase tracking-wider">Journey & Expertise</span>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div className="space-y-6" data-aos="fade-right">
                <h3 className="text-2xl font-semibold text-[#00ccff] border-b border-[#00ccff]/30 pb-2">Experience</h3>
                <div className="space-y-6">
                  <div className="bg-gradient-to-br from-white/5 to-white/10 p-6 rounded-xl border border-white/10 hover:border-[#00ccff]/30 transition-all">
                    <h4 className="text-xl font-semibold text-white">Full Stack Developer</h4>
                    <p className="text-sm text-white/70 mb-2">Freelance | Present</p>
                    <p className="text-base text-white/90 leading-relaxed">
                      Building dynamic websites and scalable e-commerce systems with modern stacks (React, Next.js, Node.js).
                    </p>
                  </div>
                  <div className="bg-gradient-to-br from-white/5 to-white/10 p-6 rounded-xl border border-white/10 hover:border-[#00ccff]/30 transition-all">
                    <h4 className="text-xl font-semibold text-white">Agentic AI Developer</h4>
                    <p className="text-sm text-white/70 mb-2">GIAIC | 2025–Present</p>
                    <p className="text-base text-white/90 leading-relaxed">
                      Developing AI-driven solutions with LLMs and automation tools.
                    </p>
                  </div>
                </div>
              </div>

              {/* Education */}
              <div className="space-y-6" data-aos="fade-left">
                <h3 className="text-2xl font-semibold text-[#00ccff] border-b border-[#00ccff]/30 pb-2">Education</h3>
                <div className="space-y-6">
                  {/* Software Engineering */}
                  <div className="bg-gradient-to-br from-white/5 to-white/10 p-6 rounded-xl border border-white/10 hover:border-[#00ccff]/30 transition-all">
                    <h4 className="text-xl font-semibold text-white">Software Engineering</h4>
                    <p className="text-sm text-white/70 mb-2">Ongoing</p>
                    <p className="text-base text-white/90 leading-relaxed">
                      Pursuing advanced studies in software architecture and system design.
                    </p>
                  </div>
                  {/* Intermediate */}
                  <div className="bg-gradient-to-br from-white/5 to-white/10 p-6 rounded-xl border border-white/10 hover:border-[#00ccff]/30 transition-all">
                    <h4 className="text-xl font-semibold text-white">XII (Computer Science)</h4>
                    <p className="text-sm text-white/70 mb-2">Intermediate | 2025</p>
                    <p className="text-base text-white/90 leading-relaxed">
                      Focused on programming fundamentals.
                    </p>
                  </div>
                  {/* Matriculation */}
                  <div className="bg-gradient-to-br from-white/5 to-white/10 p-6 rounded-xl border border-white/10 hover:border-[#00ccff]/30 transition-all duration-300">
                    <h4 className="text-xl font-semibold text-white">XI (Computer Science)</h4>
                    <p className="text-sm text-white/70 mb-2">Matriculation | 2022</p>
                    <p className="text-base text-white/90 leading-relaxed">
                      Introduced to core CS concepts and web development basics.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            <div className="absolute top-1/3 left-1/4 w-64 h-64 rounded-full bg-[#00ccff]/10 blur-3xl"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-[#03b7e4]/10 blur-3xl"></div>
          </div>
        </section>
      </Element>

      <Element name="HowDoIWork">
        <section id="HowDoIWork" className="bg-[#121212] min-h-screen text-white overflow-hidden relative py-24 px-6 md:px-16">
          <div className="max-w-7xl mx-auto">
            {/* Heading */}
            <div className="mb-12" data-aos="fade-up">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 relative inline-block">
                <span className="relative z-10">How I Work</span>
              </h2>
              <div className="flex items-center gap-4">
                <div className="w-16 h-1 bg-gradient-to-r from-[#03b7e4] to-transparent rounded-full"></div>
                <span className="text-[#00ccff] text-sm font-medium uppercase tracking-wider">Efficient Process</span>
              </div>
            </div>

            <div className="grid md:grid-cols-5 gap-8 mt-10">
              <div className="col-span-1">
                <p className="text-base text-white/90 leading-relaxed mt-2">
                  Save time and money with my streamlined process.
                </p>
              </div>

              <div className="col-span-4 relative">
                <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-[#00ccff] to-[#03b7e4] -translate-x-1/2 hidden md:block"></div>

                {/* First Row - 3 Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 w-full relative z-10">
                  {[
                    { title: "Brainstorming", desc: "Ideas", icon: <PiBrainLight size={24} className="text-[#00ccff]" /> },
                    { title: "Product", desc: "Design", icon: <PiCubeLight size={24} className="text-[#00ccff]" /> },
                    { title: "Front-End", desc: "Development", icon: <PiCodeLight size={24} className="text-[#00ccff]" /> },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-[#00ccff]/30 hover:-translate-y-2 transition-all duration-300 shadow-lg hover:shadow-[#00ccff]/20"
                      data-aos="fade-up"
                      data-aos-delay={index * 100}
                    >
                      <div className="flex items-start gap-4">
                        <div className="bg-[#00ccff]/10 p-3 rounded-lg flex items-center justify-center border border-[#00ccff]/20">
                          {item.icon}
                        </div>
                        <div>
                          <h5 className="text-[#00ccff] font-semibold text-lg">{item.title}</h5>
                          <p className="text-white/70 text-sm leading-relaxed">{item.desc}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Second Row - 2 Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:mt-12 mt-9 md:w-4/5 w-full mx-auto relative z-10">
                  {[
                    { title: "SEO", desc: "Optimization", icon: <PiTrendUpLight size={24} className="text-[#00ccff]" /> },
                    { title: "Back-End", desc: "Development", icon: <IoServer size={24} className="text-[#00ccff]" /> },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-[#00ccff]/30 transition-all duration-300 hover:-translate-y-2 shadow-lg hover:shadow-[#00ccff]/20"
                      data-aos="fade-up"
                      data-aos-delay={400 + index * 100}
                    >
                      <div className="flex items-start gap-4">
                        <div className="bg-[#00ccff]/10 p-3 rounded-lg flex items-center justify-center border border-[#00ccff]/20">
                          {item.icon}
                        </div>
                        <div>
                          <h5 className="text-[#00ccff] font-semibold text-lg">{item.title}</h5>
                          <p className="text-white/70 text-sm leading-relaxed">{item.desc}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Third Row - 1 Card */}
                <div className="mt-9 md:mt-12 md:w-2/5 w-full mx-auto relative z-10" data-aos="fade-up" data-aos-delay="600">
                  <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-[#00ccff]/30 transition-all duration-300 hover:-translate-y-2 shadow-lg hover:shadow-[#00ccff]/20">
                    <div className="flex items-start gap-4">
                      <div className="bg-[#00ccff]/10 p-3 rounded-lg flex items-center justify-center border border-[#00ccff]/20">
                        <PiChartLineUpLight size={24} className="text-[#00ccff]" />
                      </div>
                      <div>
                        <h5 className="text-[#00ccff] font-semibold text-lg">Digital</h5>
                        <p className="text-white/70 text-sm leading-relaxed">Marketing</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-[#00ccff]/10 blur-3xl"></div>
            <div className="absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full bg-[#03b7e4]/10 blur-3xl"></div>
          </div>
        </section>
      </Element>

      <Element name="Projects">
        <section id="project" className="bg-[#020817] min-h-screen text-white overflow-hidden relative py-24 px-6 md:px-16">
          <div className="max-w-7xl mx-auto">
            <div className="mb-12" data-aos="fade-up">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 relative inline-block">
                <span className="relative z-10">Projects</span>
              </h2>
              <div className="flex items-center gap-4">
                <div className="w-16 h-1 bg-gradient-to-r from-[#00ccff] to-transparent rounded-full"></div>
                <span className="text-[#00ccff] text-sm font-medium uppercase tracking-wider">View My Work</span>
              </div>
            </div>

            <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
              <ProjectCard
                title="Al Abbas Electric"
                alt="Al Abbas Electric project by Mesum Ali"
                description="A responsive website developed for a client offering electrical and solar solutions."
                imageSrc={project_2}
                link="https://alabbaselectric.com"
                target="_blank"
                techIcons={[
                  { src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg", alt: "React.js" },
                  { src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg", alt: "JavaScript" },
                  { src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/tailwindcss/tailwindcss-original.svg", alt: "Tailwind CSS" },
                ]}
              />

              <ProjectCard
                title="Agentic World"
                alt="Agentic World AI project thumbnail"
                description="An academy project built with Next.js, focusing on Agentic AI concepts and React framework skills."
                imageSrc={project_1}
                link="https://neuroagents.vercel.app/"
                target="_blank"
                techIcons={[
                  { src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nextjs/nextjs-original.svg", alt: "Next.js" },
                  { src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-plain.svg", alt: "TypeScript" },
                  { src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/tailwindcss/tailwindcss-original.svg", alt: "Tailwind CSS" },
                ]}
              />

              <ProjectCard
                title="Capital Institute"
                alt="Capital Institute project thumbnail"
                description="A responsive website to enhance Capital Institute Center’s online presence and user engagement."
                imageSrc={project_3}
                link="https://mesumaliofficial.github.io/capital-institute/"
                target="_blank"
                techIcons={[
                  { src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nextjs/nextjs-original.svg", alt: "Next.js" },
                  { src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-plain.svg", alt: "TypeScript" },
                  { src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/tailwindcss/tailwindcss-original.svg", alt: "Tailwind CSS" },
                ]}
              />
            </div>
          </div>
        </section>
      </Element>


      <Element name="Skills">
        <SkillsSection />
      </Element>

      <Element name="Contact">
        <ContactSection/>
      </Element>

      <Footer />
    </>
  );
}

interface ProjectCardProps {
  title: string;
  description: string;
  imageSrc: StaticImageData;
  techIcons?: { src: string; alt: string }[];
  link: string;
  alt: string;
  target?: string;
}

const ProjectCard = ({ title, description, imageSrc, techIcons, link, alt, target }: ProjectCardProps) => (
  <div className="w-full bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-xl p-4 border border-white/10 hover:border-[#00ccff]/30 transition-transform duration-300 hover:-translate-y-2 shadow-lg hover:shadow-[#00ccff]/30" data-aos="fade-up">
    <div className="h-64 w-full rounded-lg overflow-hidden bg-gradient-to-br from-white/5 to-black/50 flex items-center justify-center">
      <Image
        alt={alt}
        src={imageSrc}
        width={288}
        height={288}
        className="object-cover w-72 h-72"
        loading="lazy"
      />
    </div>
    <div className="mt-4 space-y-2">
      <h3 className="text-xl font-semibold text-white">{title}</h3>
      <p className="text-base text-white/90 leading-relaxed">{description}</p>
      <div className="flex flex-row justify-between items-center my-4">
        {techIcons && (
          <div className="flex items-center gap-2">
            {techIcons.map((icon, index) => (
              <img key={index} src={icon.src} alt={icon.alt} className="w-9 h-9 rounded-full" />
            ))}
          </div>
        )}
        <a
          href={link}
          target={target || "_blank"}
          rel="noopener noreferrer"
          className="flex items-center text-[#00ccff] border border-[#00ccff]/40 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-[#00ccff]/10 transition-colors duration-300"
          aria-label={`View ${title} project`}
        >
          View Project <FaExternalLinkAlt size={12} className="ml-2" />
        </a>
      </div>
    </div>
  </div>
);