import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'
import iconMenuOpen from '../assets/icon-menu.svg'
import iconMenuClose from '../assets/icon-menu-close.svg'
import { useState } from 'react'

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  };

  return (
    <header className='bg-verde-oliva w-screen flex justify-between items-center mx-auto relative z-50'>
      {isMenuOpen && <div className='overlay bg-black opacity-60 absolute top-0 left-0 w-screen h-screen z-30 pointer-events-none'></div>}
      <section className='bg-verde-oliva flex justify-between items-center mx-auto w-full px-5 relative h-[80px] sm:h-[90px] z-40'>
        <Link to='/' className='h-[70px] sm:h-[85px] flex items-center'>
          <img className='h-full rounded-s-full px-1 py-2 border-b border-branco-quente' src={logo} alt="logo" />
          <h1 className='font-Playwrite text-xl md:text-3xl lg:text-2xl font-bold text-branco-quente'>Bizu Vegano</h1>
        </Link>
        <nav className='flex items-center'>
          <ul className='hidden lg:flex lg:flex-wrap lg:space-x-4 lg:text-sm'>
            <li>
              <Link to='/restaurantes' className='text-branco-quente font-semibold hover:opacity-80'>Restaurantes</Link>
            </li>
            <li>
              <Link to='/lanchonetes' className='text-branco-quente font-semibold hover:opacity-80'>Lanchonetes</Link>
            </li>
            <li>
              <Link to='/confeitarias' className='text-branco-quente font-semibold hover:opacity-80'>Confeitarias</Link>
            </li>
            <li>
              <Link to='/emporios' className='text-branco-quente font-semibold hover:opacity-80'>Emporios</Link>
            </li>
            <li>
              <Link to='/queijarias' className='text-branco-quente font-semibold hover:opacity-80'>Queijarias</Link>
            </li>
            <li>
              <Link to='/festas' className='text-branco-quente font-semibold hover:opacity-80'>Festas</Link>
            </li>
            <li>
              <Link to='/sorvetes' className='text-branco-quente font-semibold hover:opacity-80'>Sorvetes</Link>
            </li>
            <li>
              <Link to='/cafes' className='text-branco-quente font-semibold hover:opacity-80'>Cafés</Link>
            </li>
            <li>
              <Link to='/onde-comer' className='text-branco-quente font-semibold hover:opacity-80'>Onde Comer</Link>
            </li>
            <li>
              <Link to='/cosmeticos' className='text-branco-quente font-semibold hover:opacity-80'>Cosmeticos</Link>
            </li>
            <li>
              <Link to='/dicas' className='text-branco-quente font-semibold hover:opacity-80'>Dicas</Link>
            </li>
            <li>
              <Link to='/canais-youtube' className='text-branco-quente font-semibold hover:opacity-80'>Canais YouTube</Link>
            </li>
          </ul>
          <button onClick={toggleMenu} className='lg:hidden focus:outline-none ml-4'>
            <img className='cursor-pointer' src={isMenuOpen ? iconMenuClose : iconMenuOpen} alt="menu" />
          </button>
          {isMenuOpen && (
            <div className='bg-verde-oliva absolute top-[80px] md:top-[90px] right-0 w-[250px] z-40 shadow-md lg:hidden'>
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
                  <Link to='/emporios' className='text-branco-quente font-semibold hover:opacity-80'>Emporios</Link>
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
                  <Link to='/cosmeticos' className='text-branco-quente font-semibold hover:opacity-80'>Cosmeticos</Link>
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
  )
}
