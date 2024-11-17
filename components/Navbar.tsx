"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Button from './ReUsableButton';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-10 bg-transparent">
      <nav className="flex items-center justify-between px-6 py-4 md:px-12 lg:px-20">
        {/* Logo */}
        <div className="text-2xl font-semibold text-white dark:text-darkgray">
          <Link href="/">
            <Image
              src="/assets/icons/Bold-Logo.svg"
              alt="Logo"
              width={163}
              height={42}
            />
          </Link>
        </div>

        {/* Navigation Links - Desktop */}
        <div className="hidden md:flex items-center space-x-6 text-white dark:text-darkgray">
          <Link href="/home" className="hover:text-gray-300 dark:hover:text-gray-500">
            Product
          </Link>
          <Link href="/service" className="hover:text-gray-300 dark:hover:text-gray-500">
            Services
          </Link>
          <Link href="/about" className="hover:text-gray-300 dark:hover:text-gray-500">
            About
          </Link>
          <Button className="bg-white text-darkgray px-6 py-2" content="Login" />
        </div>

        {/* Mobile Menu Toggle Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white dark:text-darkgray focus:outline-none">
            {/* Hamburger Icon */}
            {isOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className={`md:hidden absolute top-16 left-0 w-full bg-darkgray text-white dark:text-darkgray px-6 py-4 flex flex-col space-y-4 shadow-lg  ${ isOpen ? "fade-in" : "fade-out"
          }`}>
            <Link href="/home" onClick={toggleMenu} className="hover:text-gray-300 dark:hover:text-gray-500">
              Product
            </Link>
            <Link href="/services" onClick={toggleMenu} className="hover:text-gray-300 dark:hover:text-gray-500">
              Services
            </Link>
            <Link href="/about" onClick={toggleMenu} className="hover:text-gray-300 dark:hover:text-gray-500">
              About
            </Link>
            <Button className="bg-white text-darkgray px-4 py-2" content="Login" onClick={toggleMenu} />
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
