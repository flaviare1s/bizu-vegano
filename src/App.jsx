import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import '../src/styles/App.css'
import { Footer } from './components/Footer'
import { Home } from './pages/Home'
import { NotFound } from './pages/NotFound'
import { Cafes } from './pages/Cafes'
import { Sorvetes } from './pages/Sorvetes'
import { Restaurantes } from './pages/Restaurantes'
import { Festas } from './pages/Festas'
import { Cosmeticos } from './pages/Cosmeticos'
import { OndeComer } from './pages/OndeComer'
import { Dicas } from './pages/Dicas'
import { Lanchonetes } from './pages/Lanchonetes'
import { Confeitarias } from './pages/Confeitarias'
import { Emporios } from './pages/Emporios'
import { Queijarias } from './pages/Queijarias'
import { CanaisYouTube } from './pages/CanaisYouTube'
import { Sobre } from './pages/Sobre'

export const App = () => {

  return (
    <>
      <BrowserRouter>
        <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/restaurantes' element={<Restaurantes />} />
            <Route path='/lanchonetes' element={<Lanchonetes />} />
            <Route path='/confeitarias' element={<Confeitarias />} />
            <Route path='/emporios' element={<Emporios />} />
            <Route path='/queijarias' element={<Queijarias />} />
            <Route path='/festas' element={<Festas />} />
            <Route path='/sorvetes' element={<Sorvetes />} />
            <Route path='/cafes' element={<Cafes />} />
            <Route path='/onde-comer' element={<OndeComer />} />
            <Route path='/cosmeticos' element={<Cosmeticos />} />
            <Route path='/dicas' element={<Dicas />} />
            <Route path='/canais-youtube' element={<CanaisYouTube />} />
            <Route path='/sobre' element={<Sobre />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}
 