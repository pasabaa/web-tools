import React from 'react'
import uuid from 'react-uuid'
import { Card } from '../../../components/card'
import { AppContainer } from '../../../layout/container'

export const TextPage = () => {

  const cards = [
    {
      title: 'Convertidor Mayus. a Minus.',
      description: 'Accede a diferentes elementos para crear textos, modifica y sé creativo con estas herramientas.',
      icon: 'format-uppercase',
      textButton: 'Abrir aplicación',
      url: '/text'
    },
    {
      title: 'Generador Lorem',
      description: 'Modifica una o varias imagénes con filtros, además recorta y crea figuras interesantes.',
      icon: 'format-left',
      textButton: 'Abrir aplicación',
      url: '/image'
    },
    {
      title: 'Contador de palabras',
      description: 'Extrae color de imagénes de tu quipo o de algún sitio, modifica y genera tu propia paleta de colores.',
      icon: 'math-plus',
      textButton: 'Abrir aplicación',
      url: '/color'
    },
    {
      title: 'Textos gradiantes',
      description: 'Extrae color de imagénes de tu quipo o de algún sitio, modifica y genera tu propia paleta de colores.',
      icon: 'format-color',
      textButton: 'Abrir aplicación',
      url: '/color'
    },
    {
      title: 'Prueba de fuentes',
      description: 'Extrae color de imagénes de tu quipo o de algún sitio, modifica y genera tu propia paleta de colores.',
      icon: 'format-text',
      textButton: 'Abrir aplicación',
      url: '/color'
    },
    {
      title: 'Otras herramientas',
      description: 'Descubre herramientas que te pueden ser de utilidad, además de aportar a tu productividad.',
      icon: 'keyboard',
      textButton: 'Abrir aplicación',
      url: '/other'
    }
  ]

  return (
    <AppContainer>
        {/* Hero */}
        <div className='my-12'>
            <h1 className='text-6xl font-bold'>Herramientas <span className='font-normal text-gray-400'>de Texto</span></h1>
            <p className='text-gray-400 mt-4 w-6/12'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut molestias, explicabo omnis, quasi quia accusamus vel blanditiis quibusdam provident incidunt adipisci, consectetur architecto modi! Voluptates.</p>
        </div>
        {/* Cards */}
        <div className='grid grid-cols-2 gap-8'>
            
            {
              cards.map(card=>{
                return(
                  <Card key={uuid()} title={card.title} description={card.description} icon={card.icon} textButton={card.textButton} url={card.url}/>
                )
              })
            }

        </div>
    </AppContainer>
  )
}
