"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Education', href: '#education' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('#home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = navLinks.map(link => document.querySelector(link.href));
      let current = '';
      sections.forEach(section => {
        if (section) {
          const sectionTop = section.offsetTop;
          if (window.pageYOffset >= sectionTop - 200) {
            current = `#${section.id}`;
          }
        }
      });
      setActiveLink(current || '#home');
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-background/95 backdrop-blur-sm shadow-2xl' : 'bg-background/90 backdrop-blur-sm'} border-b border-border`}>
      <div className="max-w-7xl mx-auto px-8 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="#home" className="text-2xl font-extrabold text-primary font-mono" onClick={closeMenu}>
            &lt;RK /&gt;
          </Link>
          <div className="hidden md:block">
            <ul className="flex items-center space-x-8">
              {navLinks.map(link => (
                <li key={link.name}>
                  <Link href={link.href} className={`font-medium text-sm transition-colors ${activeLink === link.href ? 'text-primary' : 'text-secondary-foreground hover:text-primary'}`}>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="md:hidden">
            <button onClick={toggleMenu} className="flex flex-col gap-y-1.5 p-1.5 cursor-pointer z-20">
              <span className={`block w-6 h-0.5 bg-foreground transition-transform duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`block w-6 h-0.5 bg-foreground transition-opacity duration-300 ${menuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
              <span className={`block w-6 h-0.5 bg-foreground transition-transform duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      <div className={`md:hidden absolute top-20 right-5 transition-all duration-300 ${menuOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-2 invisible'}`}>
        <ul className="bg-card border border-border rounded-xl p-4 flex flex-col gap-2">
          {navLinks.map(link => (
            <li key={link.name}>
              <Link href={link.href} className={`block font-medium px-3 py-2 rounded-md ${activeLink === link.href ? 'text-primary bg-primary/10' : 'text-secondary-foreground'}`} onClick={closeMenu}>
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
