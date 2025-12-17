import { fetchCollectionData } from '../firebase/firebaseService'
import { useState, useEffect } from 'react'
import { Loader } from '../components/Loader'

export const Cosmeticos = () => {
  const [cosmeticos, setCosmeticos] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const getCosmeticos = async () => {
      try {
        const data = await fetchCollectionData("cosmeticos")
        setCosmeticos(data)
      } catch (error) {
        console.error("Erro ao buscar cosméticos:", error)
      } finally {
        setLoading(false)
      }
    }

    getCosmeticos()
  }, [])

  return (
    <section className='flex flex-col justify-center items-center my-3'>
      <h1 className='text-2xl md:text-5xl text-verde-escuro font-bold my-1 md:my-5'>Cosméticos e Beleza</h1>
      {loading ? (
        <Loader />
      ) : (
        <article className='sm:grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 md:px-[30px] lg:px-[100px]'>
          {cosmeticos.map(cosmetico => (
            <div key={cosmetico.id} className='bg-branco-quente border border-marrom-claro rounded p-4 m-4 relative'>
              <div className='flex justify-start items-center gap-5'>
                <i className="fa-solid fa-pump-soap text-amarelo-mostarda text-5xl"></i>
                <a href={cosmetico.url} className='uppercase font-bold mb-2 text-center'>{cosmetico.nome}</a>
              </div>
              <hr />
              <p className='mb-2 mt-2'>{cosmetico.descricao}</p>
              {cosmetico.endereco ? <small>{cosmetico.endereco}</small> : <small>Endereço indisponível</small>}
              <a className='flex items-center gap-2 mt-2 absolute bottom-2 right-3' href={cosmetico.url}><i className="fa-brands fa-instagram text-2xl"></i></a>
            </div>
          ))}
        </article>
      )}
    </section>
  )
}
