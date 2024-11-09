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
        <section className='flex flex-col items-center my-3 w-full'>
          <h1 className='text-2xl md:text-5xl uppercase text-branco-quente font-bold my-1 md:my-5'>Onde Comer:</h1>
          <div className='flex items-center justify-center gap-2'>
            <div className='flex flex-col'>
              <h6 className='text-branco-quente'>Filtrar por Categoria:</h6>
              <select onChange={e => filtrarCategoria(e.target.value)} value={categoriaSelecionada}>
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
                <option value="sanduiche">Sanduíches e Wrap</option>
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
                <option value="selfservice">Self Service</option>
              </select>
            </div>
          </div>
          {loading ? (
            <Loader />
          ) : (
            <article className='sm:grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-2 md:px-[30px] lg:px-[100px]'>
              {categorias.map(categoria => (
                <div key={categoria.id} className='bg-branco-quente border border-marrom-claro rounded p-4 m-4 relative flex justify-between items-center'>
                  <div className='flex justify-start items-center gap-5'>
                    {categoria.categoria === 'pizza' && <span className="material-symbols-outlined text-5xl">local_pizza</span>}
                    {categoria.categoria === 'oriental' && <span className="material-symbols-outlined text-5xl">ramen_dining</span>}
                    {categoria.categoria === 'poke' && <span className="material-symbols-outlined text-5xl">ramen_dining</span>}
                    {categoria.categoria === 'notdog' && <span className="material-symbols-outlined text-5xl">lunch_dining</span>}
                    {categoria.categoria === 'lasanha' && <span className="material-symbols-outlined text-5xl">dinner_dining</span>}
                    {categoria.categoria === 'massa' && <span className="material-symbols-outlined text-5xl">dinner_dining</span>}
                    {categoria.categoria === 'pastel' && <span className="material-symbols-outlined text-5xl">skillet_cooktop</span>}
                    {categoria.categoria === 'coxinha' && <span className="material-symbols-outlined text-5xl">skillet_cooktop</span>}
                    {categoria.categoria === 'acaraje' && <span className="material-symbols-outlined text-5xl">stockpot</span>}
                    {categoria.categoria === 'hamburguer' && <span className="material-symbols-outlined text-5xl">lunch_dining</span>}
                    {categoria.categoria === 'sanduiche' && <span className="material-symbols-outlined text-5xl">lunch_dining</span>}
                    {categoria.categoria === 'petisco' && <span className="material-symbols-outlined text-5xl">restaurant</span>}
                    {categoria.categoria === 'strogonoff' && <span className="material-symbols-outlined text-5xl">cooking</span>}
                    {categoria.categoria === 'moqueca' && <span className="material-symbols-outlined text-5xl">cooking</span>}
                    {categoria.categoria === 'risoto' && <span className="material-symbols-outlined text-5xl">cooking</span>}
                    {categoria.categoria === 'feijoada' && <span className="material-symbols-outlined text-5xl">stockpot</span>}
                    {categoria.categoria === 'batatarecheada' && <span className="material-symbols-outlined text-5xl">bakery_dining</span>}
                    {categoria.categoria === 'salada' && <span className="material-symbols-outlined text-5xl">restaurant_menu</span>}
                    {categoria.categoria === 'bruschetta' && <span className="material-symbols-outlined text-5xl">breakfast_dining</span>}
                    {categoria.categoria === 'focaccia' && <span className="material-symbols-outlined text-5xl">breakfast_dining</span>}
                    {categoria.categoria === 'mexicana' && <span className="material-symbols-outlined text-5xl">restaurant_menu</span>}
                    {categoria.categoria === 'arabe' && <span className="material-symbols-outlined text-5xl">bakery_dining</span>}
                    {categoria.categoria === 'selfservice' && <span className="material-symbols-outlined text-5xl">restaurant_menu</span>}
                    <a href={categoria.url} className='uppercase font-bold mb-5 text-center'>{categoria.nome}</a>
                  </div>
                  <a className='flex items-center gap-2 mt-2 absolute bottom-2 right-3' href={categoria.url}><i className="fa-brands fa-instagram text-2xl"></i></a>
                </div>
              ))}
            </article>
          )}
        </section>
      </main>
    </div>
  )
}
