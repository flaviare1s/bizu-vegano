import restaurantes from '../assets/background-restaurantes.jpg'
import lanchonetes from '../assets/background-lanches.jpg'
import confeitarias from '../assets/background-confeitarias.jpg'
import emporios from '../assets/background-emporios.jpg'
import queijarias from '../assets/background-queijos.jpg'
import festas from '../assets/background-festas.jpg'
import sorvetes from '../assets/background-sorvetes.jpg'
import cafes from '../assets/background-cafes.jpg'
import ondeComer from '../assets/background-onde-comer.jpg'
import cosmeticos from '../assets/background-cosmeticos.jpg'
import dicas from '../assets/background-receitas.jpg'
import canais from '../assets/background-canais.jpg'
import { Link } from 'react-router-dom'

export const Home = () => {
  return (
    <main className='flex flex-col justify-center items-center gap-1 m-auto mb-2 md:grid grid-cols-3 md:px-[30px] md:py-[30px] lg:px-[100px]'>
      <Link to='/restaurantes' className='w-full border border-branco-quente rounded relative'>
        <img className='h-[200px] w-full object-cover rounded' src={ restaurantes } alt="Imagem de comida vegetariana" />
        <h2 className='text-center text-2xl font-semibold text-branco-quente absolute bottom-[10px] right-[20px]'>Restaurantes</h2>
      </Link>
      <Link to='/lanchonetes' className='w-full border border-branco-quente rounded relative'>
        <img className='h-[200px] w-full object-cover rounded' src={ lanchonetes } alt="Imagem de comida vegetariana" />
        <h2 className='text-center text-2xl font-semibold text-branco-quente absolute bottom-[10px] right-[20px]'>Lanchonetes</h2>
      </Link>
      <Link to='/confeitarias' className='w-full border border-branco-quente rounded relative md:row-span-2'>
        <img className='h-[200px] md:h-[405px] w-full object-cover rounded' src={ confeitarias } alt="Imagem de comida vegetariana" />
        <h2 className='text-center text-2xl font-semibold text-branco-quente absolute bottom-[10px] right-[20px]'>Confeitarias</h2>
      </Link>
      <Link to='/emporios' className='w-full border border-branco-quente rounded relative'>
        <img className='h-[200px] w-full object-cover rounded' src={ emporios } alt="Imagem de comida vegetariana" />
        <h2 className='text-center text-2xl font-semibold text-branco-quente absolute bottom-[10px] right-[20px]'>Empórios</h2>
      </Link>
      <Link to='/queijarias' className='w-full border border-branco-quente rounded relative'>
        <img className='h-[200px] w-full object-cover rounded' src={ queijarias } alt="Imagem de comida vegetariana" />
        <h2 className='text-center text-2xl font-semibold text-branco-quente absolute bottom-[10px] right-[20px]'>Queijarias</h2>
      </Link>
      <Link to='/festas' className='w-full border border-branco-quente rounded relative'>
        <img className='h-[200px] w-full object-cover rounded' src={ festas } alt="Imagem de comida vegetariana" />
        <h2 className='text-center text-2xl font-semibold text-branco-quente absolute bottom-[10px] right-[20px]'>Festas</h2>
      </Link>
      <Link to='/sorvetes' className='w-full border border-branco-quente rounded relative'>
        <img className='h-[200px] w-full object-cover rounded' src={ sorvetes } alt="Imagem de comida vegetariana" />
        <h2 className='text-center text-2xl font-semibold text-branco-quente absolute bottom-[10px] right-[20px]'>Sorvetes</h2>
      </Link>
      <Link to='/cafes' className='w-full border border-branco-quente rounded relative'>
        <img className='h-[200px] w-full object-cover rounded' src={ cafes } alt="Imagem de comida vegetariana" />
        <h2 className='text-center text-2xl font-semibold text-branco-quente absolute bottom-[10px] right-[20px]'>Cafés</h2>
      </Link>
      <Link to='/onde-comer' className='w-full border border-branco-quente rounded relative md:row-span-2'>
        <img className='h-[200px] md:h-[405px] w-full object-cover rounded' src={ ondeComer } alt="Imagem de comida vegetariana" />
        <h2 className='text-center text-2xl font-semibold text-branco-quente absolute bottom-[10px] right-[20px]'>Onde Comer</h2>
      </Link>
      <Link to='/cosmeticos' className='w-full border border-branco-quente rounded relative'>
        <img className='h-[200px] w-full object-cover rounded' src={ cosmeticos } alt="Imagem de comida vegetariana" />
        <h2 className='text-center text-2xl font-semibold text-branco-quente absolute bottom-[10px] right-[20px]'>Cosméticos</h2>
      </Link>
      <Link to='/dicas' className='w-full border border-branco-quente rounded relative'>
        <img className='h-[200px] w-full object-cover rounded' src={ dicas } alt="Imagem de comida vegetariana" />
        <h2 className='text-center text-2xl font-semibold text-branco-quente absolute bottom-[10px] right-[20px]'>Dicas</h2>
      </Link>
      <Link to='/canais-youtube' className='w-full border border-branco-quente rounded relative md:col-span-2'>
        <img className='h-[200px] w-full object-cover rounded' src={ canais } alt="Imagem de comida vegetariana" />
        <h2 className='text-center text-2xl font-semibold text-branco-quente absolute bottom-[10px] right-[20px]'>Canais YouTube</h2>
      </Link>
    </main>
  )
}
