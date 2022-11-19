import React, { useState } from 'react'
import { Nav } from '../../../components/nav'
import { AppContainer } from '../../../layout/container'
import { countAcc, countVocals, countWords } from '../../../Utils'

export const CountTool = () => {

  const [textIn, setTextIn] = useState('');

  const numWithSpace = textIn.length; //caracteres normal with space
  const numSpaces = textIn.split(' ').length -1; //spaces
  const numWithoutSpace = textIn.split(' ').join('').length; //caracter normal without spaces

  const details = [
    {
      icon: 'gg-asterisk',
      text: 'Caracteres:',
      function: numWithSpace
    },
    {
      icon: 'gg-font-spacing',
      text: 'Espacios:',
      function: numSpaces
    },
    {
      icon: 'gg-space-between',
      text: 'Caracteres sin espacio:',
      function: numWithoutSpace
    },
    {
      icon: 'gg-check',
      text: 'Total de acentos:',
      function: countAcc(textIn)
    },
    {
      icon: 'gg-check',
      text: 'Total de vocales:',
      function: countVocals(textIn)
    }
  ]

  return (
    <>
    <Nav />
    <AppContainer>
      <div className="w-full mt-12">
        <div className="mb-12 w-full">
          <h1 className="text-5xl font-bold text-gray-100">Contador de palabras</h1>
          <p className="mt-5 w-6/12 leading-relaxed text-gray-400">Con esta herramientas podrás convertir de mayúsculas minúsculas facilmente, además de porder convervir a todo tipo de oración.</p>
        </div>

        <div className="grid w-full grid-cols-2 gap-8">

          <div className="flex flex-col gap-4">
            <h1 className="text-xl font-bold text-gray-400">Texto de entrada</h1>
            <textarea 
              className="relative block w-full rounded-md p-4 select-all bg-gray-900 text-gray-400 focus:outline-none" 
              defaultValue={textIn} 
              onChange={(e)=>{setTextIn(e.target.value)}}/>
          </div>

          <div className="flex flex-col gap-4 rounded-md items-center justify-center">
            <div className='flex items-center justify-between gap-8'>
              <div className="text-center flex flex-col justify-between items-center h-full">
                <h1 className='text-8xl font-bold text-blue-100'>{countWords(textIn)}</h1>
                <h2 className='text-3xl font-bold text-gray-400'>Palabras</h2>
              </div>
              <div className='text-start flex flex-col gap-4 border-l border-blue-100/80 pl-4'>
                <h1 className='font-bold text-2xl text-blue-100'>Detalles</h1>
                <div className='grid grid-cols-2 gap-4 rounded-md text-gray-400'>

                  {
                    details.map(detail => {
                      return(
                        <p className='font-bold flex items-center gap-2 text-center'>
                          <i className={`${detail.icon} text-blue-100/90`}></i>
                          {detail.text}
                          <span className='font-normal'>{detail.function}</span>
                        </p>
                      )
                    })
                  }

                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </AppContainer>
  </>

  )
}
