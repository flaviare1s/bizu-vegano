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
    <section className='flex flex-col justify-center items-center my-6 px-4'>
      <div className='border-b-2 border-logo w-full mb-5'>
        <h1 className='text-2xl text-center md:text-4xl text-verde-escuro font-bold my-4 md:my-6'>Canais do YouTube</h1>
      </div>
      {loading ? (
        <Loader />
      ) : (
        <article className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full max-w-[1400px]'>
          {canais.map(canal => (
            <a href={canal.url}
              target="_blank"
              rel="noopener noreferrer" key={canal.id} className='bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col h-full'>
              <div className='p-6 flex-grow'>
                <div className='flex items-center gap-4'>
                  <div className='w-14 h-14 bg-gradient-to-br from-verde-salvia to-verde-escuro rounded-xl flex items-center justify-center flex-shrink-0 shadow-md'>
                    <i className="fa-brands fa-youtube text-white text-xl"></i>
                  </div>
                  <div className='flex-1 min-w-0'>
                    <h3 className='font-bold text-lg text-gray-800 leading-tight mb-1'>{canal.nome}</h3>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </article>
      )}
    </section>
  )
}
