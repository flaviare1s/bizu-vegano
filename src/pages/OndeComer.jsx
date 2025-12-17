import { getCategorias } from '../firebase/firebaseService';
import { useState, useEffect } from 'react';
import { Loader } from '../components/Loader';

export const OndeComer = () => {
  const [categorias, setCategorias] = useState([]);
  const [loading, setLoading] = useState(true);
  const [categoriaSelecionada, setCategoriaSelecionada] = useState('pizza'); // Valor padrão

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const data = await getCategorias(categoriaSelecionada);
      setCategorias(data);
      setLoading(false);
    };

    fetchData();
  }, [categoriaSelecionada]);

  const filtrarCategoria = (categoria) => {
    setCategoriaSelecionada(categoria);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <main className='flex grow'>
        <section className='flex flex-col items-center my-6 px-4 w-full'>
          <h1 className='text-3xl md:text-5xl text-verde-escuro font-bold my-4 md:my-6'>Onde Comer:</h1>
          <div className='flex items-center justify-center gap-2 mb-6'>
            <div className='flex flex-col'>
              <h6 className='text-verde-escuro font-semibold mb-2'>Filtrar por Categoria:</h6>
              <select
                onChange={e => filtrarCategoria(e.target.value)}
                value={categoriaSelecionada}
                className='px-4 py-2 rounded-lg bg-white text-gray-800 border-2 border-verde-oliva focus:outline-none focus:ring-2 focus:ring-verde-salvia font-medium'
              >
                <option value="pizza">Pizza</option>
                <option value="oriental">Sushi e Comida Oriental</option>
                <option value="poke">Poke</option>
                <option value="notdog">Not Dog</option>
                <option value="lasanha">Lasanha</option>
                <option value="massa">Massa</option>
                <option value="pastel">Pastel</option>
                <option value="coxinha">Coxinha</option>
                <option value="acaraje">Acarajé</option>
                <option value="hamburguer">Hambúrguer</option>
                <option value="sanduiche">Sanduíche e Wrap</option>
                <option value="petisco">Petisco</option>
                <option value="strogonoff">Strogonoff</option>
                <option value="moqueca">Moqueca</option>
                <option value="risoto">Risoto</option>
                <option value="feijoada">Feijoada</option>
                <option value="batatarecheada">Batata Recheada</option>
                <option value="salada">Salada</option>
                <option value="bruschetta">Bruschetta</option>
                <option value="focaccia">Focaccia</option>
                <option value="mexicana">Comida Mexicana</option>
                <option value="arabe">Comida Árabe</option>
                <option value="sopa">Sopa</option>
                <option value="pratinho">Pratinho</option>
                <option value="pf">PF / Marmita</option>
                <option value="congelado">Refeições Congeladas</option>
                <option value="selfservice">Self Service</option>
              </select>
            </div>
          </div>
          {loading ? (
            <Loader />
          ) : (
            <article className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full max-w-[1400px]'>
              {categorias.map(categoria => (
                <div key={categoria.id} className='bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col h-full'>
                  <div className='p-6 flex-grow'>
                    <div className='flex items-start gap-4 mb-4'>
                      <div className='w-14 h-14 bg-gradient-to-br from-verde-salvia to-verde-oliva rounded-xl flex items-center justify-center flex-shrink-0 shadow-md'>
                        {categoria.categoria === 'pizza' && <span className="material-symbols-outlined text-white text-2xl">local_pizza</span>}
                        {categoria.categoria === 'oriental' && <span className="material-symbols-outlined text-white text-2xl">ramen_dining</span>}
                        {categoria.categoria === 'poke' && <span className="material-symbols-outlined text-white text-2xl">ramen_dining</span>}
                        {categoria.categoria === 'notdog' && <span className="material-symbols-outlined text-white text-2xl">lunch_dining</span>}
                        {categoria.categoria === 'lasanha' && <span className="material-symbols-outlined text-white text-2xl">dinner_dining</span>}
                        {categoria.categoria === 'massa' && <span className="material-symbols-outlined text-white text-2xl">dinner_dining</span>}
                        {categoria.categoria === 'pastel' && <span className="material-symbols-outlined text-white text-2xl">skillet_cooktop</span>}
                        {categoria.categoria === 'coxinha' && <span className="material-symbols-outlined text-white text-2xl">skillet_cooktop</span>}
                        {categoria.categoria === 'acaraje' && <span className="material-symbols-outlined text-white text-2xl">stockpot</span>}
                        {categoria.categoria === 'hamburguer' && <span className="material-symbols-outlined text-white text-2xl">lunch_dining</span>}
                        {categoria.categoria === 'sanduiche' && <span className="material-symbols-outlined text-white text-2xl">lunch_dining</span>}
                        {categoria.categoria === 'petisco' && <span className="material-symbols-outlined text-white text-2xl">restaurant</span>}
                        {categoria.categoria === 'strogonoff' && <span className="material-symbols-outlined text-white text-2xl">cooking</span>}
                        {categoria.categoria === 'moqueca' && <span className="material-symbols-outlined text-white text-2xl">cooking</span>}
                        {categoria.categoria === 'risoto' && <span className="material-symbols-outlined text-white text-2xl">cooking</span>}
                        {categoria.categoria === 'feijoada' && <span className="material-symbols-outlined text-white text-2xl">stockpot</span>}
                        {categoria.categoria === 'batatarecheada' && <span className="material-symbols-outlined text-white text-2xl">bakery_dining</span>}
                        {categoria.categoria === 'salada' && <span className="material-symbols-outlined text-white text-2xl">restaurant_menu</span>}
                        {categoria.categoria === 'bruschetta' && <span className="material-symbols-outlined text-white text-2xl">breakfast_dining</span>}
                        {categoria.categoria === 'focaccia' && <span className="material-symbols-outlined text-white text-2xl">breakfast_dining</span>}
                        {categoria.categoria === 'mexicana' && <span className="material-symbols-outlined text-white text-2xl">restaurant_menu</span>}
                        {categoria.categoria === 'arabe' && <span className="material-symbols-outlined text-white text-2xl">bakery_dining</span>}
                        {categoria.categoria === 'sopa' && <span className="material-symbols-outlined text-white text-2xl">stockpot</span>}
                        {categoria.categoria === 'pratinho' && <span className="material-symbols-outlined text-white text-2xl">restaurant_menu</span>}
                        {categoria.categoria === 'pf' && <span className="material-symbols-outlined text-white text-2xl">restaurant_menu</span>}
                        {categoria.categoria === 'congelado' && <span className="material-symbols-outlined text-white text-2xl">restaurant_menu</span>}
                        {categoria.categoria === 'selfservice' && <span className="material-symbols-outlined text-white text-2xl">restaurant_menu</span>}
                      </div>
                      <div className='flex-1 min-w-0'>
                        <h3 className='font-bold text-lg text-gray-800 leading-tight mb-1'>{categoria.nome}</h3>
                      </div>
                    </div>
                  </div>

                  <div className='p-6 pt-0 mt-auto'>
                    <a
                      href={categoria.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className='w-full bg-verde-oliva hover:bg-verde-escuro text-white px-4 py-3 rounded-xl flex items-center justify-center gap-2 transition-all duration-300 font-semibold text-sm shadow-md hover:shadow-lg'
                    >
                      <i className="fa-brands fa-instagram text-xl"></i>
                      Ver no Instagram
                    </a>
                  </div>
                </div>
              ))}
            </article>
          )}
        </section>
      </main>
    </div>
  )
}
