import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'
import { Menu, X, ChevronDown } from 'lucide-react'
import { useState, useEffect, useRef } from 'react'

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const dropdownRef = useRef(null)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  const closeDropdown = () => {
    setIsDropdownOpen(false)
  }

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        closeDropdown()
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <header className='bg-verde-escuro w-screen flex justify-between items-center mx-auto relative z-50 shadow-md'>
      {isMenuOpen && <div className='overlay bg-black opacity-85 absolute top-0 left-0 w-screen h-screen z-30 pointer-events-none'></div>}
      <section className='bg-verde-escuro flex justify-between items-center w-full px-5 relative h-[80px] sm:h-[90px] z-40'>
        <Link to='/' className='h-[60px] sm:h-[75px] flex items-center' onClick={closeMenu}>
          <img className='h-full rounded-s-full pr-1' src={logo} alt="logo" />
          <h1 className='font-Playwrite text-xl lg:text-2xl font-bold text-logo underline'>Bizu Vegano</h1>
        </Link>
        <nav className='flex items-center mr-4'>
          <ul className='hidden md:flex md:flex-wrap items-center md:space-x-6 md:text-sm'>
            <li className='relative'>
              <button onClick={toggleDropdown} className='text-logo lg:text-lg font-semibold hover:opacity-80 flex items-center focus:outline-none link-nav'>
                Alimentação <ChevronDown size={20} />
              </button>
              {isDropdownOpen && (
                <ul ref={dropdownRef} className='absolute bg-white text-gray-700 text-base mt-3 py-2 shadow-xl rounded-xl font-medium min-w-[220px] border border-gray-100'>
                  <li>
                    <Link to='/restaurantes' className='block px-6 py-2.5 hover:bg-verde-oliva hover:text-white transition-colors duration-200' onClick={closeDropdown}>Restaurantes</Link>
                  </li>
                  <li>
                    <Link to='/lanchonetes' className='block px-6 py-2.5 hover:bg-verde-oliva hover:text-white transition-colors duration-200' onClick={closeDropdown}>Lanchonetes</Link>
                  </li>
                  <li>
                    <Link to='/confeitarias' className='block px-6 py-2.5 hover:bg-verde-oliva hover:text-white transition-colors duration-200' onClick={closeDropdown}>Confeitarias</Link>
                  </li>
                  <li>
                    <Link to='/emporios' className='block px-6 py-2.5 hover:bg-verde-oliva hover:text-white transition-colors duration-200' onClick={closeDropdown}>Empórios e Antepastos</Link>
                  </li>
                  <li>
                    <Link to='/queijarias' className='block px-6 py-2.5 hover:bg-verde-oliva hover:text-white transition-colors duration-200' onClick={closeDropdown}>Queijarias</Link>
                  </li>
                  <li>
                    <Link to='/festas' className='block px-6 py-2.5 hover:bg-verde-oliva hover:text-white transition-colors duration-200' onClick={closeDropdown}>Festas</Link>
                  </li>
                  <li>
                    <Link to='/sorvetes' className='block px-6 py-2.5 hover:bg-verde-oliva hover:text-white transition-colors duration-200' onClick={closeDropdown}>Sorvetes</Link>
                  </li>
                  <li>
                    <Link to='/cafes' className='block px-6 py-2.5 hover:bg-verde-oliva hover:text-white transition-colors duration-200' onClick={closeDropdown}>Cafés</Link>
                  </li>
                  <li>
                    <Link to='/onde-comer' className='block px-6 py-2.5 hover:bg-verde-oliva hover:text-white transition-colors duration-200' onClick={closeDropdown}>Onde Encontrar</Link>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <Link to='/cosmeticos' className='text-branco-quente md:text-logo lg:text-lg font-semibold hover:opacity-80 link-nav' onClick={closeMenu}>Cosméticos</Link>
            </li>
            <li>
              <Link to='/dicas' className='text-branco-quente md:text-logo lg:text-lg font-semibold hover:opacity-80 link-nav' onClick={closeMenu}>Dicas</Link>
            </li>
            <li>
              <Link to='/canais-youtube' className='text-branco-quente md:text-logo lg:text-lg font-semibold hover:opacity-80 link-nav' onClick={closeMenu}>Canais YouTube</Link>
            </li>
            <li>
              <Link to='/sobre' className='text-branco-quente md:text-logo lg:text-lg font-semibold hover:opacity-80 link-nav' onClick={closeMenu}>Sobre</Link>
            </li>
          </ul>
          <button onClick={toggleMenu} className='md:hidden focus:outline-none sm:mr-2 flex items-center gap-2'>
            {isMenuOpen ? <X size={30} className='text-logo' /> : <Menu size={30} className='text-logo' />}
          </button>
          {isMenuOpen && (
            <div className='absolute top-[80px] sm:top-[90px] right-0 w-[250px] z-40 shadow-md lg:hidden'>
              <ul className='flex flex-col'>
                <li className='px-4 py-2'>
                  <Link to='/restaurantes' className='text-logo font-semibold hover:opacity-80' onClick={closeMenu}>Restaurantes</Link>
                </li>
                <li className='px-4 py-2'>
                  <Link to='/lanchonetes' className='text-logo font-semibold hover:opacity-80' onClick={closeMenu}>Lanchonetes</Link>
                </li>
                <li className='px-4 py-2'>
                  <Link to='/confeitarias' className='text-logo font-semibold hover:opacity-80' onClick={closeMenu}>Confeitarias</Link>
                </li>
                <li className='px-4 py-2'>
                  <Link to='/emporios' className='text-logo font-semibold hover:opacity-80' onClick={closeMenu}>Empórios e Antepastos</Link>
                </li>
                <li className='px-4 py-2'>
                  <Link to='/queijarias' className='text-logo font-semibold hover:opacity-80' onClick={closeMenu}>Queijarias</Link>
                </li>
                <li className='px-4 py-2'>
                  <Link to='/festas' className='text-logo font-semibold hover:opacity-80' onClick={closeMenu}>Festas</Link>
                </li>
                <li className='px-4 py-2'>
                  <Link to='/sorvetes' className='text-logo font-semibold hover:opacity-80' onClick={closeMenu}>Sorvetes</Link>
                </li>
                <li className='px-4 py-2'>
                  <Link to='/cafes' className='text-logo font-semibold hover:opacity-80' onClick={closeMenu}>Cafés</Link>
                </li>
                <li className='px-4 py-2'>
                  <Link to='/onde-comer' className='text-logo font-semibold hover:opacity-80' onClick={closeMenu}>Onde Encontrar</Link>
                </li>
                <li className='px-4 py-2'>
                  <Link to='/cosmeticos' className='text-logo font-semibold hover:opacity-80' onClick={closeMenu}>Cosméticos</Link>
                </li>
                <li className='px-4 py-2'>
                  <Link to='/dicas' className='text-logo font-semibold hover:opacity-80' onClick={closeMenu}>Dicas</Link>
                </li>
                <li className='px-4 py-2'>
                  <Link to='/canais-youtube' className='text-logo font-semibold hover:opacity-80' onClick={closeMenu}>Canais YouTube</Link>
                </li>
                <li className='px-4 py-2'>
                  <Link to='/sobre' className='text-logo font-semibold hover:opacity-80' onClick={closeMenu}>Sobre</Link>
                </li>
              </ul>
            </div>
          )}
        </nav>
      </section>
    </header>
  )
}
