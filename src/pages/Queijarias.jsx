import { fetchCollectionData } from '../firebase/firebaseService'
import { useState, useEffect } from 'react'
import { Loader } from '../components/Loader'

export const Queijarias = () => {
  const [queijarias, setQueijarias] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const getQueijarias = async () => {
      try {
        const data = await fetchCollectionData("queijarias")
        setQueijarias(data)
      } catch (error) {
        console.error("Erro ao buscar queijarias:", error)
      } finally {
        setLoading(false)
      }
    }

    getQueijarias()
  }, [])

  return (
    <div className="flex flex-col min-h-screen">
      <main className='flex grow'>
        <section className='flex flex-col items-center my-6 px-4 w-full'>
          <h1 className='text-3xl md:text-5xl text-verde-escuro font-bold my-4 md:my-6'>Queijarias</h1>
          {loading ? (
            <Loader />
          ) : (
            <article className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full max-w-[1400px]'>
              {queijarias.map(queijaria => (
                <div key={queijaria.id} className='bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col h-full'>
                  <div className='p-6 flex-grow'>
                    <div className='flex items-start gap-4 mb-4'>
                      <div className='w-14 h-14 bg-gradient-to-br from-verde-salvia to-verde-oliva rounded-xl flex items-center justify-center flex-shrink-0 shadow-md'>
                        <i className="fa-solid fa-cheese text-white text-xl"></i>
                      </div>
                      <div className='flex-1 min-w-0'>
                        <h3 className='font-bold text-lg text-gray-800 leading-tight mb-1'>{queijaria.nome}</h3>
                      </div>
                    </div>

                    <p className='text-gray-600 text-sm leading-relaxed mb-4 font-semibold'>{queijaria.descricao}</p>

                    {queijaria.endereco && (
                      <div className='flex items-start gap-2 text-xs text-gray-500 bg-gray-50 rounded-lg p-3'>
                        <i className="fa-solid fa-map-marker-alt text-verde-oliva mt-0.5"></i>
                        <span>{queijaria.endereco}</span>
                      </div>
                    )}
                  </div>

                  <div className='p-6 pt-0 mt-auto'>
                    <a
                      href={queijaria.url}
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
