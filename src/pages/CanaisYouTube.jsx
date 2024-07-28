import { fetchCollectionData } from '../firebase/firebaseService'
import { useState, useEffect } from 'react'
import { Loader } from '../components/Loader'

export const CanaisYouTube = () => {
  const [canais, setCanais] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const getRestaurants = async () => {
      try {
        const data = await fetchCollectionData("canais")
        setCanais(data)
      } catch (error) {
        console.error("Erro ao buscar Canais:", error)
      } finally {
        setLoading(false)
      }
    }

    getRestaurants()
  }, [])

  return (
    <section className='flex flex-col justify-center items-center my-3'>
      <h1 className='text-2xl md:text-5xl uppercase text-branco-quente font-bold my-1 md:my-5'>Canais do YouTube</h1>
      {loading ? (
        <Loader />
      ) : (
        <article className='sm:grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 md:px-[30px] lg:px-[100px]'>
          {canais.map(canal => (
            <div key={canal.id} className='bg-branco-quente border border-marrom-claro rounded p-4 m-4'>
              <div className='flex justify-start items-center gap-5'>
                <a href={canal.url} className='uppercase font-bold mb-2 text-center'>{canal.nome}</a>
              </div>
              <hr />
              <a className='flex items-center justify-center gap-2 mt-2' href={canal.url}><i className="fa-brands fa-youtube text-verde-escuro text-5xl"></i></a>
            </div>
          ))}
        </article>
      )}
    </section>
  )
}
