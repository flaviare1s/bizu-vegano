/* eslint-disable react/prop-types */
import { Link } from "react-router-dom"

export const LinkCategoria = ({ link, titulo, img }) => {
  return (
    <>
      <Link to={link} className='w-full border-2 border-logo rounded relative'>
        <img className='h-[200px] w-full object-cover rounded' src={img} alt="Imagem de comida vegetariana" />
        <h2 className='text-end px-3 py-1 text-xl font-semibold text-logo absolute bottom-0  bg-verde-escuro w-full'>{titulo}</h2>
      </Link>
    </>
  )
}
