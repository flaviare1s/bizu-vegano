/* eslint-disable react/jsx-key */
import { fetchCollectionData } from '../firebase/firebaseService'
import { useState, useEffect } from 'react'

export const Lanchonetes = () => {
  const [lanchonetes, setLanchonetes] = useState([])

  useEffect(() => {
    const getRestaurants = async () => {
      try {
        const data = await fetchCollectionData("lanchonetes")
        setLanchonetes(data)
      } catch (error) {
        console.error("Erro ao buscar lanchonete:", error)
      }
    }

    getRestaurants()
  }, [])

  return (
    <section className='flex flex-col justify-center items-center my-3'>
      <h1 className='text-2xl md:text-5xl uppercase text-branco-quente font-bold my-1 md:my-5'>lanchonetes</h1>
      <article className=' sm:grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 md:px-[30px] lg:px-[100px]'>
        {lanchonetes.map(lanchonete => (
          <div key={lanchonete.id} className='bg-branco-quente border border-marrom-claro rounded p-4 m-4'>
            <div className='flex justify-start items-center gap-5'>
              <i className="fa-solid fa-burger text-marrom-claro text-5xl"></i>
              <a href={lanchonete.url} className='uppercase font-bold mb-2 text-center'>{lanchonete.nome}</a>
            </div>
            <hr />
            <p className='mb-2 mt-2'>{lanchonete.descricao}</p>
            {lanchonete.endereco ? <small>{lanchonete.endereco}</small> : <small>Endereço indisponível</small>}
            <a className='flex items-center gap-2 mt-2' href={lanchonete.url}>Instagram <i className="fa-brands fa-instagram text-2xl"></i></a>
          </div>
        ))}
      </article>
    </section>
  )
}
