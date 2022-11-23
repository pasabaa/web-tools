import React from 'react'
import uuid from 'react-uuid'
import { Card } from '../../components/card'
import { Hero } from '../../components/hero'
import { AppContainer } from '../../layout/container'

export const HomePage = () => {

  const cards = [
    {
      title: 'Herramientas de Texto',
      description: 'Accede a diferentes elementos para crear textos, modifica y sé creativo con estas herramientas.',
      icon: 'bi-fonts',
      textButton: 'Saber más',
      url: '/text'
    },
    {
      title: 'Herramientas de Imagen',
      description: 'Modifica una o varias imagénes con filtros, además recorta y crea figuras interesantes.',
      icon: 'bi-image',
      textButton: 'Saber más',
      url: '/image'
    },
    {
      title: 'Herramientas de Color',
      description: 'Extrae color de imagénes de tu quipo o de algún sitio, modifica y genera tu propia paleta de colores.',
      icon: 'bi-bucket',
      textButton: 'Saber más',
      url: '/color'
    },
    {
      title: 'Más Categorias',
      description: 'Descubre herramientas que te pueden ser de utilidad, además de aportar a tu productividad.',
      icon: 'bi-keyboard',
      textButton: 'Saber más',
      url: '/categories'
    }
  ]

  return (

    <>
      <Hero/>

      <AppContainer>
          {/* Hero */}
          <div className='my-12'>
              <h1 className='text-6xl sm:text-4xl font-bold'>Herramientas</h1>
              <p className='text-gray-400 mt-4 w-6/12 sm:w-full'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut molestias, explicabo omnis, quasi quia accusamus vel blanditiis quibusdam provident incidunt adipisci, consectetur architecto modi! Voluptates.</p>
          </div>
          {/* Cards */}
          <div className='grid grid-cols-3 sm:grid-cols-1 gap-8 border border-dotted'>
              
              {
                cards.map(card=>{
                  return(
                    <Card key={uuid()} title={card.title} description={card.description} icon={card.icon} textButton={card.textButton} url={card.url}/>
                  )
                })
              }

          </div>
      </AppContainer>
    </>

  )
}
