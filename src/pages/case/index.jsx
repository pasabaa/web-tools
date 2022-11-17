import React from 'react'

export const CaseTool = () => {
  return (
    <div className="w-full mt-12">
    <div className="mb-12 w-full">
      <h1 className="text-5xl font-bold text-gray-100">Convertidor de letras</h1>
      <p className="mt-5 w-6/12 leading-relaxed text-gray-400">Con esta herramientas podrás convertir de mayúsculas minúsculas facilmente, además de porder convervir a todo tipo de oración.</p>
    </div>
    <div className="grid w-full grid-cols-2 gap-8">
      <div className="flex flex-col gap-4">
        <h1 className="text-xl font-bold text-gray-400">Texto de entrada</h1>
        <textarea className="relative block w-full rounded-md bg-gray-900 p-4 text-gray-400 focus:outline-none"></textarea>
        <div className="w-full">
          <select name="" id="" className="rounded-md bg-gray-900 bg-gradient-to-t from-blue-600 to-blue-400 p-2 text-xs font-bold text-gray-100 focus:outline-none">
            <option value="a">Uppercase</option>
            <option value="b">Lowercase</option>
            <option value="b">Capitalize</option>
          </select>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <h1 className="text-xl font-bold text-gray-400">Texto de salida</h1>
        <textarea className="relative block h-auto w-full rounded-md bg-gray-900 p-4 text-gray-400 focus:outline-none"></textarea>
        <div className="w-full">
          <button className="flex justify-between rounded-md bg-gradient-to-t from-blue-600 to-blue-400 py-2 px-4 text-xs font-bold text-gray-100">Copiar</button>
        </div>
      </div>
    </div>
  </div>
  )
}
