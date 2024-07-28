/* eslint-disable react/jsx-key */
import { fetchCollectionData } from '../firebase/firebaseService'
import { useState, useEffect } from 'react'

export const Restaurantes = () => {
  const [restaurantes, setRestaurantes] = useState([])

  useEffect(() => {
    const getRestaurants = async () => {
      try {
        const data = await fetchCollectionData("restaurantes")
        setRestaurantes(data)
      } catch (error) {
        console.error("Erro ao buscar restaurantes:", error)
      }
    }

    getRestaurants()
  }, [])

  return (
    <section className='flex flex-col justify-center items-center my-3'>
      <h1 className='text-2xl uppercase text-branco-quente font-bold'>Restaurantes</h1>
      <article className=' sm:grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 md:px-[30px] lg:px-[100px]'>
        {restaurantes.map(restaurante => (
          <div className='bg-branco-quente border border-marrom-claro rounded p-4 m-4'>
            <h2 className='uppercase font-bold mb-2' key={restaurante.id}>{restaurante.nome}</h2>
            <hr />
            <p className='mb-1 mt-2'>{restaurante.descricao}</p>
            {restaurante.endereco && <p><span className='font-bold mb-1'>Endereço:</span>{restaurante.endereco}</p>}
            <a className='flex items-center gap-2' href={restaurante.url}>Instagram <i className="fa-brands fa-instagram text-2xl"></i></a>
          </div>
        ))}
      </article>
    </section>
  )
}
