import React, { useEffect, useState } from 'react'
import { Nav } from '../../../components/nav'
import { InputRange } from '../../../components/range';
import { AppContainer } from '../../../layout/container'

export const GradientTool = () => {


  const [colorTo, setColorTo] = useState('#201a23');
  const [colorFrom, setColorFrom] = useState('#67606A');
  const [degColor, setDegColor] = useState(0);

  useEffect(()=>{

    document.documentElement.style.setProperty('--text-gradient-to', colorTo);
    document.documentElement.style.setProperty('--text-gradient-from', colorFrom);
    document.documentElement.style.setProperty('--text-gradient-deg', degColor+'deg');

  }, [colorTo, colorFrom, degColor]);

  return (
    <>
    <Nav />
    <AppContainer>
      <div className="w-full mt-12">
        <div className="mb-12 w-full">
          <h1 className="text-5xl font-bold text-gray-900">Texto gradiente</h1>
          <p className="mt-5 w-6/12 leading-relaxed text-gray-400">Con esta herramientas podrás convertir de mayúsculas minúsculas facilmente, además de porder convervir a todo tipo de oración.</p>
        </div>

        <div className="w-full">

          <div className="flex flex-col gap-4">

            <h1 className="text-xl font-bold text-gray-900">Ejemplo</h1>

            <div className='p-8 border border-dotted grid grid-cols-2 sm:grid-cols-1'>
              <div className='text-gray-400'>
                <h1 className='text-7xl font-bold gradient-text'>¡Este es un increíble ejemplo!</h1>
                <p className='mt-4 leading-relaxed'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta et cum sunt cumque. Delectus explicabo repellendus magnam ipsa autem odio error ab, hic est obcaecati aspernatur possimus suscipit et eos itaque quam laborum, cumque reprehenderit provident iste alias voluptates consequatur enim. Delectus placeat maxime nisi iusto consectetur perferendis mollitia reprehenderit!</p>
              </div>
              <div className='flex items-center justify-center'>
                <img className='rounded-sm' src="https://picsum.photos/1920/1080?grayscale" alt="" />
              </div>
            </div>

            <div className='w-3/12 mt-8'>
              <h1 className="text-xl font-bold text-gray-600 mb-4">Propiedades</h1>

              <div className='flex flex-col gap-4'>
                <input type="color" name="" id="" onChange={(e)=>{setColorTo(e.target.value)}} />
                <input type="color" name="" id="" onChange={(e)=>{setColorFrom(e.target.value)}} />
                <InputRange 
                  id={1} 
                  min={0} 
                  max={360} 
                  step={1} 
                  text={'Grados: ' + degColor} 
                  event={setDegColor}
                />
              </div>

            </div>

          </div>

        </div>

      </div>
    </AppContainer>
  </>

  )
}
