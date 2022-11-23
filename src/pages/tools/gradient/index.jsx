import React, { useEffect, useState } from 'react'
import { Nav } from '../../../components/nav'
import { InputRange } from '../../../components/range';
import { AppContainer } from '../../../layout/container'
import { copyTextToClipboard } from '../../../Utils';

export const GradientTool = () => {

  const [colorTo, setColorTo] = useState('#201a23');
  const [colorFrom, setColorFrom] = useState('#67606A');
  const [degColor, setDegColor] = useState(0);

  const code = `background-image: linear-gradient(${degColor+'deg'}, ${colorTo}, ${colorFrom}); background-clip: text; color: transparent;`;

  const [isCopied, setIsCopied] = useState();

  const handleCopyClick = () => {
    copyTextToClipboard(code)
      .then(() => {
        setIsCopied(true);
        setTimeout(() => {
          setIsCopied(false);
        }, 600);
      })
      .catch((err) => {
        console.log(err);
      });
  }

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
                <h1 className='text-7xl font-bold gradient-text'>¡Este es un increíble título!</h1>
                <p className='mt-4 leading-relaxed'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta et cum sunt cumque. Delectus explicabo repellendus magnam ipsa autem odio error ab, hic est obcaecati aspernatur possimus suscipit et eos itaque quam laborum, cumque reprehenderit provident iste alias voluptates consequatur enim. Delectus placeat maxime nisi iusto consectetur perferendis mollitia reprehenderit!</p>
              </div>
              <div className='flex items-center justify-start bg-gray-50 rounded-sm border border-dotted text-gray-900 p-8'>
                <pre className='whitespace-pre-wrap'>
                  <code>
                    {code}
                  </code>
                </pre>
              </div>
              <div className='col-end-3 col-span-1 mt-4'>
                <button 
                onClick={handleCopyClick} 
                className="flex justify-between rounded-sm border py-2 px-4 bg-black/90 hover:bg-black text-xs font-bold text-gray-100">
                  <span>
                    {isCopied ? 'Copiado' : 'Copiar'}
                  </span>
                </button>
              </div>
            </div>

            <div className='w-3/12 mt-8'>
              <h1 className="text-xl font-bold text-gray-600 mb-4">Propiedades</h1>

              <div className='flex flex-col gap-4'>
                <div className='flex items-center justify-between'>
                  <label className="text-sm" htmlFor={'gradient-to'}>De color</label>
                  <input className='appearance-none w-10 h-10 rounded-sm border-none cursor-pointer bg-transparent' type="color" id="gradient-to" onChange={(e)=>{setColorTo(e.target.value)}} />
                </div>
                <div className='flex items-center justify-between'>
                  <label className="text-sm" htmlFor={'gradient-from'}>A color</label>
                  <input className='appearance-none w-10 h-10 rounded-sm border-none cursor-pointer bg-transparent' type="color" id="gradient-from" onChange={(e)=>{setColorFrom(e.target.value)}} />
                </div>


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
