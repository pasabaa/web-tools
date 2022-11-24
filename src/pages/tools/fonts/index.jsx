import React, { useEffect, useState } from 'react'
import { Nav } from '../../../components/nav'
import { AppContainer } from '../../../layout/container'
import axios from 'axios'

export const FontTool = () => {

    const [nameFonts, setNameFonts] = useState([]);
    const [currentFont, setCurrentFont] = useState('ABeeZee');
    const [currentStyle, setCurrentStyle] = useState('font-thin');

    const [isLoading, setIsLoading] = useState(true);

    const getNameFonts = () => {

        axios
        .get('https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyBwIX97bVWr3-6AIUvGkcNnmFgirefZ6Sw')
        .then(
            data => 
            setNameFonts(data.data.items),
            setIsLoading(false)
            )
        .catch(
            error => console.log(error)
            )
    }

    console.log(isLoading)

    useEffect(()=> {
        getNameFonts();
    }, [currentFont])

  return (
    <>
    <Nav />
    <AppContainer>
      <div className="w-full mt-12">
        <div className="mb-12 w-full">
          <h1 className="text-5xl font-bold text-gray-900">Prueba de fuentes</h1>
          <p className="mt-5 w-6/12 leading-relaxed text-gray-400">Con esta herramientas podrás convertir de mayúsculas minúsculas facilmente, además de porder convervir a todo tipo de oración.</p>
        </div>

        <div className="w-full">

          <div className="flex flex-col gap-4">

            <div className='p-8 border border-dotted grid grid-cols-2 sm:grid-cols-1 gap-8'>
              <div className='text-gray-400'>
                
                <div className='flex gap-8'>
                    <div className='flex flex-col gap-2'>
                        <label htmlFor="select-font" className='text-sm'>Selecciona una fuente</label>
                        {
                            isLoading ? 
                                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-gray-900" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg> : 
                                <select 
                                    id='select-font' 
                                    className="rounded-sm border p-2 text-xs font-bold text-gray-900 focus:outline-none" 
                                    onChange={(e)=>{setCurrentFont(e.target.value)}}>
                                    {
                                    nameFonts.slice(0, 50).map((name) => {

                                        let face = new FontFace(name.family, `url(${name.files.regular})`)

                                        document.fonts.add(face);

                                        return(
                
                                            <option value={name.family} key={name.family} style={{fontFamily: `${name.family}`}} >{name.family}</option>

                                        )
                                    })   
                                    }
                                </select>
                        }

                    </div>

                    <div className='flex flex-col gap-2'>
                        <label htmlFor="select-font" className='text-sm'>Estilo</label>
                        <select id='select-font' className="rounded-sm border p-2 text-xs font-bold text-gray-900 focus:outline-none" onChange={(e)=>{setCurrentStyle(e.target.value)}}>
                            <option value={'font-thin'} className='font-thin'>Thin</option>
                            <option value={'font-extralight'} className='font-extralight'>Extra Light</option>
                            <option value={'font-normal'} className='font-normal'>Normal</option>
                            <option value={'font-medium'} className='font-medium'>Medium</option>
                            <option value={'font-semibold'} className='font-semibold'>Semi Bold</option>
                            <option value={'font-bold'} className='font-bold'>Bold</option>
                            <option value={'font-extrabold'} className='font-extrabold'>Extra Bold</option>
                            <option value={'font-black'} className='font-black'>Black</option>
                        </select>
                    </div>
                </div>

              </div>
              <div className='bg-gray-50 rounded-sm border border-dotted text-gray-600'>
                
                <div className='p-8'>
                    <h1 className={`text-6xl ${currentStyle}`} style={{fontFamily: `${currentFont}`}} >{currentFont}</h1>
                    <p className='text-sm leading-relaxed mt-4' style={{fontFamily: `${currentFont}`}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil ipsam esse animi suscipit quos fuga quae a exercitationem quaerat unde labore illum, repudiandae blanditiis accusamus eveniet vitae fugiat est voluptas sit odio. Recusandae similique suscipit, aliquid dicta ducimus necessitatibus eaque voluptates dolorem quod consequatur laboriosam odit, deserunt, adipisci id eius.</p>
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
