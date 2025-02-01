import React from "react";
import { FeaturesSection } from "./FeatureSections";
import JoinUsBlock from "./JoinUsBlock";

function Footer() {
  return (
    <div>
      <FeaturesSection />
      <JoinUsBlock />

      <footer className="bg-black text-white py-4 border-t-2">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">
          {/* Left - Logo */}
          <div className="mb-4 md:mb-0">
            <img src="/logo.png" alt="Logo" className="h-10" />
          </div>

          {/* Right - Links (Responsive) */}
          <nav className="flex flex-wrap justify-center md:justify-end space-x-4 text-xs">
            <a href="#" className="hover:text-gray-400">
              Home
            </a>
            <a href="#" className="hover:text-gray-400">
              About
            </a>
            <a href="#" className="hover:text-gray-400">
              Services
            </a>
            <a href="#" className="hover:text-gray-400">
              Blog
            </a>
            <a href="#" className="hover:text-gray-400">
              Contact
            </a>
          </nav>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
