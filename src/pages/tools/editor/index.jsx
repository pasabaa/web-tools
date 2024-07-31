import React, { useState } from 'react'
import { Nav } from '../../../components/nav'
import { AppContainer } from '../../../layout/container'

export const EditorTool = () => {


  return (
    <>
    <Nav />
    <AppContainer>
      <div className="w-full mt-12">
        <div className="mb-12 w-full">
          <h1 className="text-5xl font-bold text-gray-900">Editor de imagen</h1>
          <p className="mt-5 w-6/12 leading-relaxed text-gray-400">Con esta herramientas podrás convertir de mayúsculas minúsculas facilmente, además de porder convervir a todo tipo de oración.</p>
        </div>
        <div className="grid w-full grid-cols-2 gap-8">
          
          Nada

        </div>
      </div>
    </AppContainer>
  </>

  )
}
