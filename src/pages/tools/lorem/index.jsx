import React, {useState} from 'react'
import { Toggle } from '../../../components/toggle'
import { LoremIpsum } from 'react-lorem-ipsum'
import { AppContainer } from '../../../layout/container'
import { InputRange } from '../../../components/range'
import { Nav } from '../../../components/nav'

export const LoremTool = () => {

    const [paragraphs, setParagraphs] = useState(2);
    const [words, setWords] = useState(8);
    const [sentences, setSentences] = useState(8);
    const [initLorem, setInitLorem] = useState(true);
    const [isRandom, setIsRandom] = useState(true);

    const ranges = [
      {
        id: 1,
        min: 2,
        max: 50,
        step: 1,
        text: 'Número de parráfos: ',
        event: setParagraphs,
        count: paragraphs
      },
      {
        id: 2,
        min: 8,
        max: 50,
        step: 1,
        text: 'Palabras por oración: ',
        event: setWords,
        count: words
      },
      {
        id: 3,
        min: 8,
        max: 25,
        step: 1,
        text: 'Oraciones por parráfo: ',
        event: setSentences,
        count: sentences
      }
    ]

    const handleLorem = () => {
        setInitLorem(!initLorem);
    }

    const handleRandom = () => {
        setIsRandom(!isRandom);
    }

return (
<>
<Nav/>  
<AppContainer>
  <div className="w-full mt-12">
    <div className="grid w-full grid-cols-2 gap-8">
      <div className="text-gray-600">
        <div className="mb-12 w-full">
          <h1 className="text-5xl font-bold text-gray-900">Generador Lorem</h1>
          <p className="mt-5 leading-relaxed">Genera texto de relleno para ver una idea de como se visualiza un texto en tu sitio.</p>
        </div>
        <div className="flex flex-col gap-8">
          <h1 className="text-2xl font-bold">Propiedades</h1>

            {
              ranges.map(range=> {
                return(
                <InputRange 
                  key={range.id} 
                  id={range.id} 
                  min={range.min} 
                  max={range.max} 
                  step={range.step} 
                  text={range.text + range.count} 
                  event={range.event} />
                )
              })
            }
          
            <Toggle id={1} handle={handleLorem} checked={initLorem} text={'Iniciar oraciones con: "Lorem ipsum dolor"'}/>
          
         
            <Toggle id={2} handle={handleRandom} checked={isRandom} text={'Palabras random'}/>
          
        </div>
      </div>
      <div className="flex flex-col gap-4 divide-y rounded-sm p-5 text-gray-400 border border-dotted">
        <div className="mb-4 flex items-center gap-4">
          <span className="h-4 w-4 rounded-full bg-red-500 animate-pulse"></span>
          <h1 className="text-base font-bold uppercase">Live Preview</h1>
        </div>
        <div className="pt-4">
          <h1 className="text-4xl font-bold text-gray-900">Lorem Ipsum Dolor</h1>
          <div className='select-all lorem mt-4'>
                <LoremIpsum
                    p={paragraphs}
                    avgWordsPerSentence={words}
                    avgSentencesPerParagraph={sentences}
                    startWithLoremIpsum={initLorem}
                    random={isRandom}
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