import React from 'react'
import { Toggle } from '../../components/toggle'

export const LoremTool = () => {
  return (
    <div className="w-full mt-12">
    <div className="grid w-full grid-cols-2 gap-8">
      <div className="text-gray-400">
        <div className="mb-12 w-full">
          <h1 className="text-5xl font-bold text-gray-100">Generador Lorem</h1>
          <p className="mt-5 leading-relaxed">Con esta herramientas podrás convertir de mayúsculas minúsculas facilmente, además de porder convervir a todo tipo de oración.</p>
        </div>
        <div className="flex flex-col gap-8">
          <h1 className="text-2xl font-bold">Propiedades</h1>
          <div className="form-item">
            <label className="text-sm" for="1">Número de parráfos</label>
            <input id="1" className="h-1 w-full cursor-pointer appearance-none rounded-lg bg-gray-600" type="range"/>
          </div>
          <div className="form-item">
            <Toggle id={1} />
          </div>
          <div className="form-item">
            <Toggle id={2} />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4 divide-y rounded-md bg-gray-900 p-5 text-gray-400">
        <div className="mb-4 flex items-center gap-4">
          <span className="h-4 w-4 rounded-full bg-red-500"></span>
          <h1 className="text-2xl font-bold">Live Preview</h1>
        </div>
        <div className="pt-4">
          <h1 className="text-3xl font-bold text-gray-100">Lorem Ipsum Dolor</h1>
          <p className="mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos ratione at, corporis tempore non enim alias quam nisi ad vero totam, vitae, quia debitis quos sapiente vel consectetur molestias nobis earum. Impedit fuga dolorem tempore molestias tempora velit cumque, numquam non? Necessitatibus nobis beatae commodi. Fuga molestiae ad temporibus asperiores.</p>
        </div>
      </div>
    </div>
  </div>
  )
}
