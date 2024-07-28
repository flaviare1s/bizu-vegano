import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import iconMenuOpen from '../assets/icon-menu.svg';
import iconMenuClose from '../assets/icon-menu-close.svg';
import { useState } from 'react';

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <header className='bg-branco-quente w-screen flex justify-between items-center mx-auto relative z-50'>
      {isMenuOpen && <div className='overlay bg-black opacity-60 absolute top-0 left-0 w-screen h-screen z-30 pointer-events-none'></div>}
      <section className='bg-branco-quente flex justify-between items-center mx-auto w-full px-5 relative h-[80px] sm:h-[90px] z-40'>
        <Link to='/' className='h-[70px] sm:h-[85px] flex items-center'>
          <img className='h-full rounded-s-full px-1 py-2' src={logo} alt="logo" />
          <h1 className='font-Playwrite text-xl md:text-3xl lg:text-2xl font-bold text-verde-oliva'>Bizu Vegano</h1>
        </Link>
        <nav className='flex items-center mr-4'>
          <ul className='hidden md:flex md:flex-wrap items-center md:space-x-4 md:text-sm'>
            <li className='relative'>
              <button onMouseEnter={toggleDropdown} className='text-verde-oliva font-semibold hover:opacity-80 uppercase flex items-center focus:outline-none'>
                Alimentação <span className="material-symbols-outlined">keyboard_arrow_down</span>
              </button>
              {isDropdownOpen && (
                <ul className='absolute bg-branco-quente text-verde-oliva mt-2 pt-2 space-y-2 shadow-lg rounded'>
                  <li>
                    <Link to='/restaurantes' className='block px-8 py-2 hover:bg-verde-escuro hover:text-branco-quente'>Restaurantes</Link>
                  </li>
                  <li>
                    <Link to='/lanchonetes' className='block px-8 py-2 hover:bg-verde-escuro hover:text-branco-quente'>Lanchonetes</Link>
                  </li>
                  <li>
                    <Link to='/confeitarias' className='block px-8 py-2 hover:bg-verde-escuro hover:text-branco-quente'>Confeitarias</Link>
                  </li>
                  <li>
                    <Link to='/emporios' className='block px-8 py-2 hover:bg-verde-oliva md:hover:bg-branco-quente md:hover:text-verde-oliva'>Empórios</Link>
                  </li>
                  <li>
                    <Link to='/queijarias' className='block px-8 py-2 hover:bg-verde-escuro hover:text-branco-quente'>Queijarias</Link>
                  </li>
                  <li>
                    <Link to='/festas' className='block px-8 py-2 hover:bg-verde-escuro hover:text-branco-quente'>Festas</Link>
                  </li>
                  <li>
                    <Link to='/sorvetes' className='block px-8 py-2 hover:bg-verde-escuro hover:text-branco-quente'>Sorvetes</Link>
                  </li>
                  <li>
                    <Link to='/cafes' className='block px-8 py-2 hover:bg-verde-escuro hover:text-branco-quente'>Cafés</Link>
                  </li>
                  <li>
                    <Link to='/onde-comer' className='block px-8 py-2 hover:bg-verde-escuro hover:text-branco-quente'>Onde Comer</Link>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <Link to='/cosmeticos' className='text-branco-quente md:text-verde-oliva font-semibold hover:opacity-80 uppercase'>Cosméticos</Link>
            </li>
            <li>
              <Link to='/dicas' className='text-branco-quente md:text-verde-oliva font-semibold hover:opacity-80 uppercase'>Dicas</Link>
            </li>
            <li>
              <Link to='/canais-youtube' className='text-branco-quente md:text-verde-oliva font-semibold hover:opacity-80 uppercase'>Canais YouTube</Link>
            </li>
          </ul>
          <button onClick={toggleMenu} className='md:hidden focus:outline-none mr-2 flex items-center gap-2'>
            <p className='text-verde-oliva text-xl font-semibold md:hidden'>MENU</p>
            <img className='cursor-pointer md:hidden' src={isMenuOpen ? iconMenuClose : iconMenuOpen} alt="menu" />
          </button>
          {isMenuOpen && (
            <div className='absolute top-[80px] sm:top-[90px] right-0 w-[250px] z-40 shadow-md lg:hidden'>
              <ul className='flex flex-col'>
                <li className='px-4 py-2'>
                  <Link to='/restaurantes' className='text-branco-quente font-semibold hover:opacity-80'>Restaurantes</Link>
                </li>
                <li className='px-4 py-2'>
                  <Link to='/lanchonetes' className='text-branco-quente font-semibold hover:opacity-80'>Lanchonetes</Link>
                </li>
                <li className='px-4 py-2'>
                  <Link to='/confeitarias' className='text-branco-quente font-semibold hover:opacity-80'>Confeitarias</Link>
                </li>
                <li className='px-4 py-2'>
                  <Link to='/emporios' className='text-branco-quente font-semibold hover:opacity-80'>Empórios</Link>
                </li>
                <li className='px-4 py-2'>
                  <Link to='/queijarias' className='text-branco-quente font-semibold hover:opacity-80'>Queijarias</Link>
                </li>
                <li className='px-4 py-2'>
                  <Link to='/festas' className='text-branco-quente font-semibold hover:opacity-80'>Festas</Link>
                </li>
                <li className='px-4 py-2'>
                  <Link to='/sorvetes' className='text-branco-quente font-semibold hover:opacity-80'>Sorvetes</Link>
                </li>
                <li className='px-4 py-2'>
                  <Link to='/cafes' className='text-branco-quente font-semibold hover:opacity-80'>Cafés</Link>
                </li>
                <li className='px-4 py-2'>
                  <Link to='/onde-comer' className='text-branco-quente font-semibold hover:opacity-80'>Onde Comer</Link>
                </li>
                <li className='px-4 py-2'>
                  <Link to='/cosmeticos' className='text-branco-quente font-semibold hover:opacity-80'>Cosméticos</Link>
                </li>
                <li className='px-4 py-2'>
                  <Link to='/dicas' className='text-branco-quente font-semibold hover:opacity-80'>Dicas</Link>
                </li>
                <li className='px-4 py-2'>
                  <Link to='/canais-youtube' className='text-branco-quente font-semibold hover:opacity-80'>Canais YouTube</Link>
                </li>
              </ul>
            </div>
          )}
        </nav>
      </section>
    </header>
  );
};
