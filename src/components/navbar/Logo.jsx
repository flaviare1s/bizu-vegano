/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';

export const Logo = ({ closeMenu }) => {
  return (
    <Link to='/' className='h-[50px] sm:h-[65px] flex items-center gap-2' onClick={closeMenu}>
      <img className='h-full rounded-s-full' src={logo} alt="logo" />
      <h1 className='font-logomarca text-2xl sm:text-3xl font-bold text-logo'>Bizu Vegano</h1>
    </Link>
  );
};
