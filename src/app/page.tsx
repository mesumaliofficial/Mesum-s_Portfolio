"use client";

import { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

import Navbar from "./components/Navbar";
import pic from "./../../public/mesum.png";

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

      <div className="bg-[#121212] min-h-screen text-white overflow-hidden relative">
  
      <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-[#1595b6] opacity-20 rounded-full blur-3xl z-0"></div>
      <div className="absolute bottom-[-100px] right-[-100px] w-[300px] h-[300px] bg-[#1595b6] opacity-20 rounded-full blur-3xl z-  0"></div>

        <div className="container mx-auto px-10 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="text-center lg:text-left" data-aos="fade-right">
                
              <h1 className="text-4xl md:text-5xl font-extrabold mb-5">
                Hi, I&rsquo;m <span className="text-[#1595b6]">Mesum</span>
              </h1>
              <h3 className="mb-8 text-3xl md:text-5xl font-bold text-[#1595b6]">
                Full Stack Developer
              </h3>
              <p className="text-lg mb-8 text-white/90 mx-auto lg:mx-0 leading-relaxed">
                Specializing in the development of dynamic websites and scalable e-commerce systems that deliver exceptional user experiences and drive measurable results.
              </p>
              <div
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                data-aos="fade-up"
              >
                <button className="bg-[#1595b6] hover:bg-[#117a95] px-8 py-3 rounded-md text-white font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg shadow-[#1595b6]/30 cursor-pointer">
                  Explore My Work
                </button>
                <button className="bg-transparent hover:bg-[#1595b6]/10 border-2 border-[#1595b6] px-8 py-3 rounded-md text-[#1595b6] font-semibold transition-all duration-300 transform hover:scale-105">
                  Get in Touch
                </button>
              </div>

              <div
                className="mt-12 flex lg:justify-start justify-center items-center gap-6"
                data-aos="zoom-in"
              >
                <span className="bg-[#1e1e1e] px-4 py-2 rounded-full text-sm font-medium">Frontend</span>
                <span className="bg-[#1e1e1e] px-4 py-2 rounded-full text-sm font-medium">Backend</span>
                <span className="bg-[#1e1e1e] px-4 py-2 rounded-full text-sm font-medium">Database</span>
              </div>
            </div>

            {/* Image Section */}
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
    </>
  );
}
