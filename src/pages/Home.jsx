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
import { LinkCategoria } from '../components/LinkCategoria'

export const Home = () => {
  return (
    <main className='flex flex-col justify-center items-center gap-1 m-auto md:grid grid-cols-3 px-1 md:px-[30px] md:py-[30px] lg:px-[100px] bg-verde-escuro pb-2'>
      <LinkCategoria link='/restaurantes' titulo='Restaurantes' img={ restaurantes } />
      <LinkCategoria link='/lanchonetes' titulo='Lanchonetes' img={ lanchonetes } />
      <LinkCategoria link='/confeitarias' titulo='Confeitarias' img={ confeitarias } />
      <LinkCategoria link='/emporios' titulo='Empórios' img={ emporios } />
      <LinkCategoria link='/queijarias' titulo='Queijarias' img={ queijarias } />
      <LinkCategoria link='/festas' titulo='Festas' img={ festas } />
      <LinkCategoria link='/sorvetes' titulo='Sorvetes' img={ sorvetes } />
      <LinkCategoria link='/cafes' titulo='Cafés' img={ cafes } />
      <LinkCategoria link='/onde-comer' titulo='Onde comer' img={ ondeComer } />
      <LinkCategoria link='/cosmeticos' titulo='Cosméticos' img={ cosmeticos } />
      <LinkCategoria link='/dicas' titulo='Dicas' img={ dicas } />
      <LinkCategoria link='/canais-youtube' titulo='Canais YouTube' img={ canais } />
    </main>
  )
}
