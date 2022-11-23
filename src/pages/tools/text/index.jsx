import React from 'react'
import uuid from 'react-uuid'
import { SmallCard } from '../../../components/card'
import { AppContainer } from '../../../layout/container'

export const TextPage = () => {

  const cards = [
    {
      title: 'Mayus. a Minus.',
      icon: 'bi-type',
      description: 'Convierte diferente texto en mayúsculas o minúsculas.',
      textButton: 'Abrir',
      url: '/text/case'
    },
    {
      title: 'Generador Lorem',
      icon: 'bi-body-text',
      description: 'Genera texto en lorem para pruebas de oraciones.',
      textButton: 'Abrir',
      url: '/text/lorem'
    },
    {
      title: 'Contador de palabras',
      icon: 'bi-chat-right-dots-fill',
      description: 'Determina el número de palabras de un texto.',
      textButton: 'Abrir',
      url: '/text/count'
    },
    {
      title: 'Textos gradiantes',
      icon: 'bi-fonts',
      description: 'Genera espectaculares letras gradientes.',
      textButton: 'Abrir',
      url: '/text/gradient'
    },
    {
      title: 'Prueba de fuentes',
      icon: 'bi-journal-text',
      description: 'Prueba diferentes tipos de fuentes y escoje tu favorita.',
      textButton: 'Abrir',
      url: '/color'
    }
  ]

  return (
    <AppContainer>
        {/* Hero */}
        <div className='my-12'>
            <h1 className='text-6xl sm:text-4xl font-bold'>Herramientas de Texto</h1>
            <p className='text-gray-400 mt-4 w-6/12 sm:w-full'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut molestias, explicabo omnis, quasi quia accusamus vel blanditiis quibusdam provident incidunt adipisci, consectetur architecto modi! Voluptates.</p>
        </div>
        {/* Cards */}
        <div className='grid grid-cols-4 sm:grid-cols-1 gap-8 border border-dotted'>
            
            {
              cards.map(card=>{
                return(
                  <SmallCard key={uuid()} title={card.title} icon={card.icon} description={card.description} textButton={card.textButton} url={card.url}/>
                )
              })
            }

        </div>
    </AppContainer>
  )
}
