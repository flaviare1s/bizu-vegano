import { getDicasCategorias } from '../firebase/firebaseService';
import { useState, useEffect } from 'react';
import { Loader } from '../components/Loader';

export const DicasPorCategoria = () => {
  const [categorias, setCategorias] = useState([]);
  const [loading, setLoading] = useState(true);
  const [categoriaSelecionada, setCategoriaSelecionada] = useState('feirinha'); // Valor padrão

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const data = await getDicasCategorias(categoriaSelecionada);
      setCategorias(data);
      setLoading(false);
    };

    fetchData();
  }, [categoriaSelecionada]);

  const filtrarCategoria = (categoria) => {
    setCategoriaSelecionada(categoria);
  };

  return (
    <div className="flex flex-col">
      <section className='flex flex-col justify-center items-center my-6 w-full px-4'>
        <h1 className='text-2xl text-center md:text-4xl text-verde-escuro font-bold my-4 md:my-6'>Escolha a categoria desejada:</h1>
        <div className='flex items-center justify-center gap-2 mb-6'>
          <div className='flex flex-col'>
            <select
              className='px-4 py-2 rounded-lg bg-white text-gray-800 border-2 border-verde-oliva focus:outline-none focus:ring-2 focus:ring-verde-salvia font-medium'
              onChange={e => filtrarCategoria(e.target.value)}
              value={categoriaSelecionada}
            >
              <option value="feirinha">Feira com lanches veg</option>
              <option value="kombucha">Kombucha</option>
              <option value="organicos">Orgânicos e Agroecologia</option>
              <option value="pousada">Pousadas</option>
              <option value="nutricionista">Nutricionistas</option>
              <option value="chef">Chefs</option>
              <option value="alimentacao-viva">Alimentação Viva</option>
              <option value="padaria">Padarias</option>
              <option value="farmacia">Farmácias</option>
              <option value="produtos-naturais">Produtos Naturais</option>
            </select>
          </div>
        </div>
        {loading ? (
          <Loader />
        ) : (
          <article className='max-w-[870px] w-full px-4 justify-items-start mx-auto'>
            {categorias.map(categoria => (
              <a href={categoria.url}
                target="_blank"
                rel="noopener noreferrer"
                key={categoria.id} className='flex flex-col h-full group'>
                <div className='p-4 flex-grow'>
                  <div className='flex items-center gap-4'>
                    <div className='w-10 h-10 bg-gradient-to-br from-verde-salvia to-verde-escuro rounded-xl flex items-center justify-center flex-shrink-0 shadow-md'>
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
    </div>
  )
}
