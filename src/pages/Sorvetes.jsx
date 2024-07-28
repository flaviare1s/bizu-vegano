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
        <section className='flex flex-col items-center my-3'>
          <h1 className='text-2xl md:text-5xl uppercase text-branco-quente font-bold my-1 md:my-5'>Sorvetes</h1>
          {loading ? (
            <Loader />
          ) : (
            <article className='sm:grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 md:px-[30px] lg:px-[100px]'>
              {sorvetes.map(sorvete => (
                <div key={sorvete.id} className='bg-branco-quente border border-marrom-claro rounded p-4 m-4'>
                  <div className='flex justify-start items-center gap-5'>
                    <i className="fa-solid fa-ice-cream text-amarelo-mostarda text-5xl"></i>
                    <a href={sorvete.url} className='uppercase font-bold mb-2 text-center'>{sorvete.nome}</a>
                  </div>
                  <hr />
                  <p className='mb-2 mt-2'>{sorvete.descricao}</p>
                  {sorvete.endereco ? <small>{sorvete.endereco}</small> : <small>Endereço indisponível</small>}
                  <a className='flex items-center gap-2 mt-2' href={sorvete.url}>Instagram <i className="fa-brands fa-instagram text-2xl"></i></a>
                </div>
              ))}
            </article>
          )}
        </section>
      </main>
    </div>
  )
}
