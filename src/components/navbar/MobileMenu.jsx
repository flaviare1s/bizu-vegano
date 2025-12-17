/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import { foodCategories, mainLinks } from './navLinks';

export const MobileMenu = ({ isMenuOpen, closeMenu }) => {
  return (
    <div className={`fixed top-[80px] sm:top-[90px] right-0 h-[calc(100vh-80px)] sm:h-[calc(100vh-90px)] w-[280px] bg-verde-escuro shadow-2xl transform transition-transform duration-300 ease-in-out z-50 md:hidden ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
      <nav className='h-full overflow-y-auto py-4'>
        <ul className='flex flex-col space-y-1 px-4'>
          {foodCategories.map((item) => (
            <li key={item.to}>
              <Link
                to={item.to}
                className='block px-4 py-2 text-logo font-semibold hover:text-branco-quente rounded-lg transition-colors duration-200'
                onClick={closeMenu}
              >
                {item.label}
              </Link>
            </li>
          ))}
          <li className='border-t border-logo mt-2 pt-2'>
            <Link
              to={mainLinks[0].to}
              className='block px-4 py-2 text-logo font-semibold hover:text-branco-quente rounded-lg transition-colors duration-200'
              onClick={closeMenu}
            >
              {mainLinks[0].label}
            </Link>
          </li>
          {mainLinks.slice(1).map((item) => (
            <li key={item.to}>
              <Link
                to={item.to}
                className='block px-4 py-2 text-logo font-semibold hover:text-branco-quente rounded-lg transition-colors duration-200'
                onClick={closeMenu}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};
