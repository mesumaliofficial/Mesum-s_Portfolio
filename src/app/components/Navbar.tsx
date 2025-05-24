"use client";

import { Link } from 'react-scroll';
import { useState } from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { LuMenu } from "react-icons/lu";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 md:flex justify-between items-center bg-[#0d0d0d] text-white py-5 px-10 text-base shadow-md border-[#414baa] border-b-[2px]">
            {/* Logo */}
            <div className="text-xl font-bold flex items-center space-x-2">
                <div className="w-10 h-10 bg-[linear-gradient(to_left,_#1595b6,_rgba(31,38,103,0.9))] rounded-full flex items-center justify-center text-white font-black shadow-lg">
                    &lt;/&gt;
                </div>
                <span className="tracking-wide text-white">Mesum.dev</span>
            </div>

            {/* Navigation Links */}
            <ul className={`flex flex-col md:flex-row md:relative md:top-0 fixed top-[80px] left-0 h-full w-64 md:w-auto bg-[#0d0d0d] md:bg-transparent border-r-[2px] border-[#414baa] md:border-0 md:space-x-8 space-y-6 md:space-y-0 px-6 pt-20 md:pt-0 font-medium transition-transform duration-300 cursor-pointer ${isOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}>
                <li><Link to="Home" className="hover:text-[#7b81b4] transition duration-300">Home</Link></li>
                <li><Link to="About" className="hover:text-[#7b81b4] transition duration-300">About</Link></li>
                <li><Link to="HowDoIWork" className="hover:text-[#7b81b4] transition duration-300">How do I work</Link></li>
                <li><Link to="Projects" className="hover:text-[#7b81b4] transition duration-300">Projects</Link></li>
                <li><Link to="Skills" className="hover:text-[#7b81b4] transition duration-300">Skills</Link></li>
                <li><Link to="Contact" className="hover:text-[#7b81b4] transition duration-300">Contact</Link></li>

                {/* Mobile Social Icons */}
                <div className="md:hidden pt-32 flex space-x-4">
                    <a href="https://www.linkedin.com/in/mesumaliofficial/"
                        target='_blank'
                        className="hover:scale-110 transition duration-300 w-9 h-9 bg-white/10 backdrop-blur rounded-full flex justify-center items-center text-white shadow"
                        aria-label="LinkedIn"><FaLinkedin size={18} /></a>

                    <a href="https://x.com/smesumofficial"
                        target='_blank'
                        className="hover:scale-110 transition duration-300 w-9 h-9 bg-white/10 backdrop-blur rounded-full flex justify-center items-center text-white shadow"
                        aria-label="Twitter"><FaTwitter size={18} /></a>

                    <a href="https://github.com/mesumaliofficial"
                        target='_blank'
                        className="hover:scale-110 transition duration-300 w-9 h-9 bg-white/10 backdrop-blur rounded-full flex justify-center items-center text-white shadow"
                        aria-label="GitHub"><FaGithub size={18} /></a>
                </div>
            </ul>

            {/* Toggle Button */}
            <button onClick={() => setIsOpen(!isOpen)} className="absolute top-7 right-10 cursor-pointer md:hidden z-50 text-white">
                {isOpen ? <IoClose size={28} /> : <LuMenu size={28} />}
            </button>

            {/* Desktop Social Icons */}
            <div className="hidden md:flex space-x-4 md:mt-0 mt-6">
                <a href="https://www.linkedin.com/in/mesumaliofficial/"
                    className="hover:scale-110 transition duration-300 w-9 h-9 bg-white/10 backdrop-blur rounded-full flex justify-center items-center text-white shadow"
                    aria-label="LinkedIn"><FaLinkedin size={18} /></a>

                <a href="https://x.com/smesumofficial"
                    target='_blank'
                    className="hover:scale-110 transition duration-300 w-9 h-9 bg-white/10 backdrop-blur rounded-full flex justify-center items-center text-white shadow"
                    aria-label="Twitter"><FaTwitter size={18} /></a>

                <a href="https://github.com/mesumaliofficial"
                    target='_blank'
                    className="hover:scale-110 transition duration-300 w-9 h-9 bg-white/10 backdrop-blur rounded-full flex justify-center items-center text-white shadow"
                    aria-label="GitHub"><FaGithub size={18} /></a>
            </div>
        </nav>
    );
};

export default Navbar;