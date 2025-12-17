import { fetchCollectionData } from '../firebase/firebaseService'
import { useState, useEffect } from 'react'
import { Loader } from '../components/Loader'

export const Sorvetes = () => {
  const [sorvetes, setSorvetes] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const getSorvetes = async () => {
      try {
        const data = await fetchCollectionData("sorvetes")
        setSorvetes(data)
      } catch (error) {
        console.error("Erro ao buscar Sorvetes:", error)
      } finally {
        setLoading(false)
      }
    }

    getSorvetes()
  }, [])

  return (
    <div className="flex flex-col min-h-screen">
      <main className='flex grow'>
        <section className='flex flex-col items-center my-6 px-4 w-full'>
          <h1 className='text-3xl md:text-5xl text-verde-escuro font-bold my-4 md:my-6'>Sorvetes</h1>
          {loading ? (
            <Loader />
          ) : (
            <article className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full max-w-[1400px]'>
              {sorvetes.map(sorvete => (
                <div key={sorvete.id} className='bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col h-full'>
                  <div className='p-6 flex-grow'>
                    <div className='flex items-center gap-4 mb-4'>
                      <div className='w-14 h-14 bg-gradient-to-br from-verde-salvia to-verde-oliva rounded-xl flex items-center justify-center flex-shrink-0 shadow-md'>
                        <i className="fa-solid fa-ice-cream text-white text-xl"></i>
                      </div>
                      <div className='flex-1 min-w-0'>
                        <h3 className='font-bold text-lg text-gray-800 leading-tight mb-1'>{sorvete.nome}</h3>
                      </div>
                    </div>

                    <p className='text-gray-600 text-sm leading-relaxed mb-4 font-semibold'>{sorvete.descricao}</p>

                    {sorvete.endereco && (
                      <a
                        href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(sorvete.endereco)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className='flex items-start gap-2 text-xs text-gray-500 bg-gray-50 rounded-lg p-3 hover:bg-gray-100 transition-colors cursor-pointer'
                      >
                        <i className="fa-solid fa-map-marker-alt text-verde-oliva mt-0.5"></i>
                        <span className='font-medium hover:text-verde-oliva transition-colors'>{sorvete.endereco}</span>
                      </a>
                    )}
                  </div>

                  <div className='p-6 pt-0 mt-auto'>
                    <a
                      href={sorvete.url}
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
