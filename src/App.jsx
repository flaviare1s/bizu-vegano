import { HashRouter, Routes } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import '../src/styles/App.css'
import { Footer } from './components/Footer'
import { Loader } from './components/Loader'

export const App = () => {

  return (
    <>
      <HashRouter>
        <Navbar />
        <Loader />
        <main className='h-screen'>
          <Routes>
          
          </Routes>
        </main>
        <Footer />
      </HashRouter>
    </>
  )
}
 