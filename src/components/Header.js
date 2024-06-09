import React from 'react';

const Header = () => {
  return (
    <header className="bg-[#d3cbcb] flex h-20 items-center justify-between px-20">
      <a href="#home" className="text-[#f0724c] text-4xl font-bold hover:scale-105">Okwor</a>
      <nav>
        <ul className="flex gap-10 font-bold">
          <li><a href="#home" className="bg-white px-4 py-2 rounded hover:text-red-400">Home</a></li>
          <li><a href="#about" className="hover:text-red-400">About Me</a></li>
          <li><a href="#projects" className="hover:text-red-400">Projects</a></li>
          <li><a href="#contact" className="hover:text-red-400">Contact Me</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
