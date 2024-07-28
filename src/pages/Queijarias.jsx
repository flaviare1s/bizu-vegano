/* eslint-disable react/jsx-key */
import { fetchCollectionData } from '../firebase/firebaseService'
import { useState, useEffect } from 'react'

export const Queijarias = () => {
  const [Queijarias, setQueijarias] = useState([])

  useEffect(() => {
    const getRestaurants = async () => {
      try {
        const data = await fetchCollectionData("queijarias")
        setQueijarias(data)
      } catch (error) {
        console.error("Erro ao buscar queijaria:", error)
      }
    }

    getRestaurants()
  }, [])

  return (
    <div className="flex flex-col min-h-screen">
      <main className='flex grow'>
        <section className='flex flex-col items-center my-3'>
          <h1 className='text-2xl md:text-5xl uppercase text-branco-quente font-bold my-1 md:my-5'>Queijarias</h1>
          <article className=' sm:grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 md:px-[30px] lg:px-[100px]'>
            {Queijarias.map(queijaria => (
              <div key={queijaria.id} className='bg-branco-quente border border-marrom-claro rounded p-4 m-4'>
                <div className='flex justify-start items-center gap-5'>
                  <i className="fa-solid fa-cheese text-amarelo-mostarda text-5xl"></i>
                  <a href={queijaria.url} className='uppercase font-bold mb-2 text-center'>{queijaria.nome}</a>
                </div>
                <hr />
                <p className='mb-2 mt-2'>{queijaria.descricao}</p>
                {queijaria.endereco ? <small>{queijaria.endereco}</small> : <small>Endereço indisponível</small>}
                <a className='flex items-center gap-2 mt-2' href={queijaria.url}>Instagram <i className="fa-brands fa-instagram text-2xl"></i></a>
              </div>
            ))}
          </article>
        </section>
      </main>
    </div>
  )
}
