import { Menu, X } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { Logo } from './navbar/Logo';
import { DesktopNav } from './navbar/DesktopNav';
import { MobileMenu } from './navbar/MobileMenu';

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);
  const closeMenu = () => setIsMenuOpen(false);
  const closeDropdown = () => setIsDropdownOpen(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        closeDropdown();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'unset';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  return (
    <header className='bg-verde-escuro w-screen flex justify-between items-center mx-auto relative z-50 shadow-md'>
      {isMenuOpen && (
        <div
          className='fixed inset-0 bg-black bg-opacity-60 z-40 md:hidden transition-opacity duration-300'
          onClick={closeMenu}
        />
      )}
      <section className='bg-verde-escuro flex justify-between items-center w-full px-5 relative h-[80px] sm:h-[90px] z-50'>
        <Logo closeMenu={closeMenu} />
        <nav className='flex items-center mr-4'>
          <DesktopNav
            isDropdownOpen={isDropdownOpen}
            toggleDropdown={toggleDropdown}
            closeDropdown={closeDropdown}
            closeMenu={closeMenu}
            dropdownRef={dropdownRef}
          />
          <button
            onClick={toggleMenu}
            className='md:hidden focus:outline-none flex items-center gap-2 z-50 -mr-2'
          >
            {isMenuOpen ? <X size={35} className='text-logo' /> : <Menu size={35} className='text-logo' />}
          </button>
          <MobileMenu isMenuOpen={isMenuOpen} closeMenu={closeMenu} />
        </nav>
      </section>
    </header>
  );
};
