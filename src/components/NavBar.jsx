import { useState, useEffect } from "react";
import { navLinks } from "../constants";
import Logo from "./Logo";

const NavBar = () => {
  // track if the user has scrolled down the page
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // create an event listener for when the user scrolls
    const handleScroll = () => {
      // check if the user has scrolled down at least 10px
      // if so, set the state to true
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    // add the event listener to the window
    window.addEventListener("scroll", handleScroll);

    // cleanup the event listener when the component is unmounted
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`navbar ${scrolled ? "scrolled" : "not-scrolled"}`}
    >
      <div className="inner backdrop-blur-md bg-black/30 rounded-2xl p-3 border border-white/5">
        <a href="#hero" className="logo">
          <Logo />
        </a>

        <nav className="desktop">
          <ul className="flex items-center gap-8">
            {navLinks.map(({ link, name }) => (
              <li key={name} className="group">
                <a href={link} className="relative flex items-center gap-2 text-white/70 hover:text-white transition-colors duration-300">
                  <span>{name}</span>
                  <span className="underline bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500" />
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a 
          href="#contact" 
          className="contact-btn group"
        >
          <div className="inner relative overflow-hidden">
            <span className="relative z-10">Contact me</span>
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        </a>
      </div>
    </header>
  );
}

export default NavBar;
