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
          <h1 className='text-3xl md:text-5xl text-verde-escuro font-bold my-4 md:my-6'>Onde Encontrar:</h1>
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
              <article className='max-w-[870px] w-full px-4 justify-items-start mx-auto'>
              {categorias.map(categoria => (
                <a
                  key={categoria.id}
                  href={categoria.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className='flex flex-col group'
                >
                  <div className='p-3 flex-grow items-center'>
                    <div className='flex items-center gap-4'>
                      <div className='w-10 h-10 bg-gradient-to-br from-verde-salvia to-verde-oliva rounded-xl flex items-center justify-center flex-shrink-0 shadow-md'>
                        <i className="fa-brands fa-instagram text-branco-quente text-2xl"></i>
                      </div>
                      <div className='flex-1 min-w-0'>
                        <h3 className='font-bold text-lg text-gray-800 group-hover:text-verde-oliva leading-tight mb-1 transition-colors duration-200'>{categoria.nome}</h3>
                      </div>
                    </div>
                  </div>
                </a>
              ))}
            </article>
          )}
        </section>
      </main>
    </div>
  )
}
