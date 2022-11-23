import React, { useState } from 'react'
import { Nav } from '../../../components/nav'
import { AppContainer } from '../../../layout/container'

export const CaseTool = () => {

  const [textIn, setTextIn] = useState('');
  const [isCase, setIsCase] = useState('uppercase')

  return (
    <>
    <Nav />
    <AppContainer>
      <div className="w-full mt-12">
        <div className="mb-12 w-full">
          <h1 className="text-5xl font-bold text-gray-900">Convertidor de letras</h1>
          <p className="mt-5 w-6/12 leading-relaxed text-gray-400">Con esta herramientas podrás convertir de mayúsculas minúsculas facilmente, además de porder convervir a todo tipo de oración.</p>
        </div>
        <div className="grid w-full grid-cols-2 gap-8">
          <div className="flex flex-col gap-4">
            <h1 className="text-xl font-bold text-gray-600">Texto de entrada</h1>
            <textarea className="relative block w-full rounded-sm p-4 select-all border border-dotted bg-gray-50 text-gray-400 focus:outline-none" defaultValue={textIn} onChange={(e)=>{setTextIn(e.target.value)}}></textarea>
            <div className="w-full">
              <select id='select-case' className="rounded-sm border p-2 text-xs font-bold text-gray-900 focus:outline-none" onChange={(e)=>{setIsCase(e.target.value)}}>
                <option value="uppercase">Uppercase</option>
                <option value="lowercase">Lowercase</option>
                <option value="capitalize">Capitalize</option>
              </select>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h1 className="text-xl font-bold text-gray-600">Texto de salida</h1>
            <textarea className={`relative block h-auto w-full rounded-sm p-4 select-all ${isCase} border border-dotted bg-gray-50 text-gray-400 focus:outline-none`} defaultValue={textIn}></textarea>
            <div className="w-full">
              <button className="flex justify-between rounded-sm border py-2 px-4 bg-black/90 hover:bg-black text-xs font-bold text-gray-100">Copiar</button>
            </div>
          </div>
        </div>
      </div>
    </AppContainer>
  </>

  )
}
