import { fetchCollectionData } from '../firebase/firebaseService'
import { useState, useEffect } from 'react'
import { Loader } from '../components/Loader'

export const Cafes = () => {
  const [cafes, setCafes] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const getCafes = async () => {
      try {
        const data = await fetchCollectionData("cafes")
        setCafes(data);
      } catch (error) {
        console.error("Erro ao buscar café:", error)
      } finally {
        setLoading(false)
      }
    }

    getCafes()
  }, [])

  return (
    <section className='flex flex-col justify-center items-center my-3'>
      <h1 className='text-2xl md:text-5xl uppercase text-branco-quente font-bold my-1 md:my-5'>Cafés</h1>
      {loading ? (
        <Loader />
      ) : (
        <article className='sm:grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 md:px-[30px] lg:px-[100px]'>
          {cafes.map(cafe => (
            <div key={cafe.id} className='bg-branco-quente border border-marrom-claro rounded p-4 m-4 relative'>
              <div className='flex justify-start items-center gap-5'>
                <i className="fa-solid fa-mug-hot text-black text-5xl"></i>
                <a href={cafe.url} className='uppercase font-bold mb-2 text-center'>{cafe.nome}</a>
              </div>
              <hr />
              <p className='mb-2 mt-2'>{cafe.descricao}</p>
              {cafe.endereco ? <small>{cafe.endereco}</small> : <small>Endereço indisponível</small>}
              <a className='flex items-center gap-2 mt-2 absolute bottom-2 right-3' href={cafe.url}><i className="fa-brands fa-instagram text-2xl"></i></a>
            </div>
          ))}
        </article>
      )}
    </section>
  )
}
