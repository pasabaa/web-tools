import React, { useEffect, useState } from 'react'
import { Nav } from '../../../components/nav'
import { AppContainer } from '../../../layout/container'
import axios from 'axios'

export const FontTool = () => {

    const [nameFonts, setNameFonts] = useState([]);
    const [currentFont, setCurrentFont] = useState('Mukta');
    const [currentStyle, setCurrentStyle] = useState('font-thin');

    const [value, setValue] = useState('');

    const [isLoading, setIsLoading] = useState(true);

    const onChange = (event) => {

      setValue(event.target.value);

    }

    const onSearch  = (searchTerm) => {
      setValue(searchTerm)
      setCurrentFont(searchTerm)
      console.log('search', searchTerm)
    }


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
                <h1 className="text-xl font-bold text-gray-600 mb-4">Propiedades</h1>
                <div className='flex gap-8'>
                    <div className='flex flex-col gap-2'>
                        <label htmlFor="select-font" className='text-sm'>Busca una fuente</label>
                        <div>
                          <div className='flex gap-3'>
                            <input className='bg-gray-50 border p-1 text-sm italic focus:not-italic focus:outline-none' type="text" value={value} onChange={onChange} placeholder={'Montserrat, Roboto, Lato, Nunito...'} />
                            <button className='text-gray-100 bg-black  hover:bg-black/90 transition text-sm p-2' onClick={()=>onSearch(value)}>Probar</button>
                          </div>

                          <div>
                            {
                              nameFonts.filter(item => {
                                const searchTerm = value.toLowerCase();
                                const name = item.family.toLowerCase();
                                return searchTerm && name.includes(searchTerm) && name !== searchTerm;
                              }).slice(0, 10)
                              .map(name=>{

                                let face = new FontFace(name.family, `url(${name.files.regular})`)

                                document.fonts.add(face);

                                return(
                                  <div key={name.family} onClick={()=>onSearch(name.family)} style={{fontFamily: `${name.family}`}}>{name.family}</div>
                                )
                              })
                            }
                          </div>
                        </div>
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
