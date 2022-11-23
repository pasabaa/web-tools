import React from 'react'
import { Link } from 'react-router-dom'
import { Container } from '../../layout/container'

export const Hero = () => {
  return (
    <Container>
        <div className='w-full text-gray-900 flex flex-col justify-center items-center h-[34rem] gap-8 border-b border-dotted bg-gray-50'>
            <h1 className='text-8xl font-bold'>Web Tools</h1>
            <p className='leading-relaxed w-3/12 mx-auto text-lg text-gray-400'>¡Descubre diferentes herramientas para tu creatividad! Desde modifcaciónes de texto, hasta crear tu propia paleta de colores.</p>
            <Link className='flex items-center justify-between border text-gray-900 hover:bg-black/90 hover:text-gray-100 p-3 text-xl rounded-sm font-bold transition' to={'/categories'}>Explorar <i className="bi-chevron-right"></i> </Link>
        </div>
    </Container>
  )
}
