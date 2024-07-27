import logo from '../assets/logo.png'

export const Navbar = () => {
  return (
    <header className='bg-verde-oliva w-screen'>
      <figure className='h-[100px]'>
        <img className='h-full rounded-s-full p-1' src={ logo } alt="logo" />
        </figure>
    </header>
  )
}
