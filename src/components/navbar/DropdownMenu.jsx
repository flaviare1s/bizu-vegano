import { Link } from 'react-router-dom';
import { foodCategories } from './navLinks';

export const DropdownMenu = ({ dropdownRef, closeDropdown }) => {
  return (
    <ul ref={dropdownRef} className='absolute bg-white text-gray-700 text-base mt-3 py-2 shadow-xl rounded-xl font-medium min-w-[220px] border border-gray-100'>
      {foodCategories.map((item) => (
        <li key={item.to}>
          <Link
            to={item.to}
            className='block px-6 py-2.5 hover:bg-verde-escuro hover:text-logo transition-colors duration-200'
            onClick={closeDropdown}
          >
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  );
};
