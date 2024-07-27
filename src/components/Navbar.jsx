import logo from '../assets/logo.png'

export const Navbar = () => {
  return (
    <header className='bg-verde-oliva w-screen flex justify-between items-center mx-auto'>
      <section className='bg-verde-oliva flex justify-between items-center mx-auto w-[90%]'>
        <div className='h-[60px] md:h-[100px] flex items-center'>
          <img className='h-full rounded-s-full p-1' src={ logo } alt="logo" />
          <h1 className='font-bree text-xl md:text-3xl font-bold text-branco-quente'>Bizu Vegano</h1>
        </div>
        <nav className='flex items-center'>
        <span className="material-symbols-outlined md:text-5xl text-branco-quente hidden">menu</span>
        <ul>
          
        </ul>
        </nav>
      </section>
    </header>
  )
}
