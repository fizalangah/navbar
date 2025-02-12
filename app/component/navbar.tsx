


"use client";

import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { CiSearch, CiSettings } from 'react-icons/ci';
import { GoBell } from 'react-icons/go';
import { IoSettingsOutline } from 'react-icons/io5';
import { FaBars, FaTimes } from 'react-icons/fa'; // Hamburger and Close icons

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to manage menu open/close
  const [isSearchOpen, setIsSearchOpen] = useState(false); // State to manage search bar open/close
  const [isTablet, setIsTablet] = useState(false); // State to detect tablet screens
  const [isLg, setIsLg] = useState(false); // State to detect large screens

  // Toggle menu function
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Toggle search bar function
  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  // Effect to detect screen sizes
  useEffect(() => {
    const handleResize = () => {
      setIsTablet(window.innerWidth >= 768 && window.innerWidth < 1024); // Tablet screens
      setIsLg(window.innerWidth >= 1024); // Large screens
    };

    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="max-w-7xl  mx-auto  ">
      <div className='bg-black text-white p-2  sm:px-6 md:px-6 lg:px-10 py-4 md:py-5 flex flex-col sm:flex-row gap-4 sm:gap-x-8 md:gap-x-8 lg:gap-x-16 items-center justify-between'>
        {/* Logo and Hamburger Icon */}
        <div className='w-full sm:w-auto flex justify-between items-center'>
          <div className='flex flex-col gap-y-0'>
            <div className='font-serif font-bold text-xl md:text-2xl space-y-0'>
              <Link href={''}>
                <span className='text-orange-400'>MO</span>
                <span className='text-orange-600'>MS</span>
                <p className='text-[10px] md:text-xs font-extralight text-orange-500 mt-0 md:hidden'>
                  Serving Happiness
                </p>
              </Link>
            </div>
          </div>

          {/* Hamburger Icon for Small Screens Only */}
          <div className='sm:hidden cursor-pointer' onClick={toggleMenu}>
            {isMenuOpen ? <FaTimes className='text-xl' /> : <FaBars className='text-xl' />}
          </div>
        </div>

        {/* Navigation Links (Hidden on Small Screens by Default) */}
        <div
          className={`${
            isMenuOpen ? 'flex' : 'hidden'
          } sm:flex flex-col sm:flex-row flex-wrap gap-3 md:gap-4 text-xs md:text-xs justify-center items-center`}
        >
          <Link href={''} className='font-semibold hover:text-orange-400'>
            ABOUT US
          </Link>
          <Link href={''} className='text-gray-400 hover:text-orange-400'>
            CATALOG
          </Link>
          <Link href={''} className='text-gray-400 hover:text-orange-400'>
            PLACES
          </Link>
          <Link href={''} className='text-gray-400 hover:text-orange-400'>
            BLOG
          </Link>
          <Link href={''} className='text-gray-400 hover:text-orange-400'>
            CONTACT
          </Link>
        </div>

        {/* Search Bar and Icons */}
        <div className='flex items-center gap-x-2'>
          {/* Condition for Tablet and Large Screens */}
          {(isTablet || isLg) ? (
            <>
              {isSearchOpen ? (
                <div className='flex items-center justify-around rounded-2xl p-1 w-full sm:w-[200px] md:w-[200px] lg:w-[300px] xl:w-[300px] bg-gray-500 px-3 md:px-4'>
                  <input
                    type='text'
                    placeholder='Search'
                    className='flex-grow outline-none bg-gray-500 rounded-2xl placeholder-white text-xs md:text-xs'
                  />
                  <CiSearch className='text-white' onClick={toggleSearch} />
                </div>
              ) : (
                <CiSearch className='text-white cursor-pointer' onClick={toggleSearch} />
              )}
              {!isSearchOpen && (
                <>
                  <GoBell className='text-lg md:text-xl cursor-pointer hover:text-orange-400' />
                  <IoSettingsOutline className='text-lg md:text-xl cursor-pointer hover:text-orange-400' />
                  <button className='text-[10px] md:text-xs py-1 md:py-2 px-3 md:px-6 lg:px-8 rounded-2xl bg-gradient-to-r from-orange-400 to-orange-700 hover:from-orange-700 hover:to-orange-400'>
                    Create Account
                  </button>
                </>
              )}
            </>
          ) : (
            // Default Search Bar for Non-Tablet and Non-Large Screens
            <div
              className={`${
                isMenuOpen ? 'flex' : 'hidden'
              } sm:flex lg:hidden xl:flex items-center justify-around rounded-2xl p-1 w-full sm:w-[200px] md:w-[300px] lg:w-[300px] xl:w-[300px] bg-gray-500 px-3 md:px-4`}
            >
              <input
                type='text'
                placeholder='Search'
                className='flex-grow outline-none bg-gray-500 rounded-2xl placeholder-white text-xs md:text-sm'
              />
              <CiSearch className='text-white' />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}