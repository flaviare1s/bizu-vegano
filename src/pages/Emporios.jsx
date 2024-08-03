import { fetchCollectionData } from '../firebase/firebaseService'
import { useState, useEffect } from 'react'
import { Loader } from '../components/Loader'

export const Emporios = () => {
  const [emporios, setEmporios] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const getRestaurants = async () => {
      try {
        const data = await fetchCollectionData("emporios")
        setEmporios(data)
      } catch (error) {
        console.error("Erro ao buscar Emporios:", error)
      } finally {
        setLoading(false)
      }
    }

    getRestaurants()
  }, [])

  return (
    <section className='flex flex-col justify-center items-center my-3'>
      <h1 className='text-2xl md:text-5xl uppercase text-branco-quente font-bold my-1 md:my-5'>Empórios e Antepastos</h1>
      {loading ? (
        <Loader />
      ) : (
        <article className='sm:grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 md:px-[30px] lg:px-[100px]'>
          {emporios.map(emporios => (
            <div key={emporios.id} className='bg-branco-quente border border-marrom-claro rounded p-4 m-4 relative'>
              <div className='flex justify-start items-center gap-5'>
                <i className="fa-solid fa-jar text-marrom-claro text-5xl"></i>
                <a href={emporios.url} className='uppercase font-bold mb-2 text-center'>{emporios.nome}</a>
              </div>
              <hr />
              <p className='mb-2 mt-2'>{emporios.descricao}</p>
              {emporios.endereco ? <small>{emporios.endereco}</small> : <small>Endereço indisponível</small>}
              <a className='flex items-center gap-2 mt-2 absolute bottom-2 right-3' href={emporios.url}><i className="fa-brands fa-instagram text-2xl"></i></a>
            </div>
          ))}
        </article>
      )}
    </section>
  )
}
