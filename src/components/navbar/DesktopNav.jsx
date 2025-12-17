/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import { mainLinks } from './navLinks';
import { DropdownMenu } from './DropdownMenu';

export const DesktopNav = ({ isDropdownOpen, toggleDropdown, closeDropdown, closeMenu, dropdownRef }) => {
  return (
    <ul className='hidden md:flex md:flex-wrap items-center md:space-x-6 md:text-sm'>
      <li className='relative'>
        <button
          onClick={toggleDropdown}
          className='text-logo lg:text-lg font-semibold hover:opacity-80 flex items-center focus:outline-none link-nav'
        >
          Alimentação <ChevronDown size={20} />
        </button>
        {isDropdownOpen && (
          <DropdownMenu dropdownRef={dropdownRef} closeDropdown={closeDropdown} />
        )}
      </li>
      {mainLinks.map((item) => (
        <li key={item.to}>
          <Link
            to={item.to}
            className='text-branco-quente md:text-logo lg:text-lg font-semibold hover:opacity-80 link-nav'
            onClick={closeMenu}
          >
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  );
};
