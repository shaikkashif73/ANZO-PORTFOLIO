import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-gradient-to-b from-black to-neutral-900 text-white px-6 py-14">
      
      <div className="max-w-7xl mx-auto">

        {/* Top CTA */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-14">
          <h2 className="text-2xl md:text-3xl font-semibold">
            Let’s build something <span className="text-gray-400">powerful</span>
          </h2>
          <button className="px-6 py-3 rounded-full border border-gray-600 hover:bg-white hover:text-black transition-all duration-300">
            Hire Me
          </button>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">

          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold mb-3 tracking-wide">Kashif</h2>
            <p className="text-gray-400 text-sm leading-relaxed">
              Crafting immersive dark-mode experiences with modern UI/UX.
              Focused on clean design, smooth interaction, and real impact.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-lg font-medium mb-4">Explore</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-white transition">Home</a></li>
              <li><a href="#" className="hover:text-white transition">Projects</a></li>
              <li><a href="#" className="hover:text-white transition">Services</a></li>
              <li><a href="#" className="hover:text-white transition">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-medium mb-4">Services</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>UI/UX Design</li>
              <li>Frontend Dev (React)</li>
              <li>Brand Identity</li>
              <li>Interactive Animations</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-medium mb-4">Connect</h3>
            <p className="text-gray-400 text-sm">kashifcodes10</p>
            <p className="text-gray-400 text-sm mb-4">+91 70137 17836</p>

            {/* Social icons */}
            <div className="flex gap-4 text-xl">
              <a href="#" className="hover:scale-110 transition">🌐</a>
              <a href="#" className="hover:scale-110 transition">🐦</a>
              <a href="#" className="hover:scale-110 transition">💼</a>
              <a href="#" className="hover:scale-110 transition">📸</a>
            </div>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 mt-12 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">

          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Kashif. All rights reserved.
          </p>

          <div className="flex gap-6 text-gray-500 text-sm">
            <a href="#" className="hover:text-white transition">Privacy</a>
            <a href="#" className="hover:text-white transition">Terms</a>
          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;