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
        <section className='flex flex-col justify-center items-center my-3 w-full'>
          <h1 className='text-lg text-center md:text-3xl text-branco-quente font-semibold my-1 md:my-5'>Escolha a categoria desejada:</h1>
          <div className='flex items-center justify-center gap-2'>
            <div className='flex flex-col'>
              <h6 className='text-branco-quente text-center mb-2'>Filtrar por Categoria:</h6>
              <select className='mb-3' onChange={e => filtrarCategoria(e.target.value)} value={categoriaSelecionada}>
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
            <article className='w-full flex justify-center items-center flex-wrap gap-2'>
              {categorias.map(categoria => (
                <div key={categoria.id} className='bg-branco-quente border border-marrom-claro rounded p-4 my-1 relative flex justify-between items-center w-[320px] h-[100px]'>
                  <div className='flex justify-start items-center gap-5'>
                    <a href={categoria.url} className='uppercase font-bold text-center'>{categoria.nome}</a>
                  </div>
                  <a href={categoria.url}><i className="fa-brands fa-instagram text-2xl ml-4"></i></a>
                </div>
              ))}
            </article>
          )}
        </section>
    </div>
  )
}
