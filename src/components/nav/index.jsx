import React from 'react'
import { useNavigate } from 'react-router-dom'

export const Nav = () => {

    const navigate = useNavigate();

  return (
    <div className='py-2 bg-gray-900/50'>
        <div className='w-8/12 mx-auto p-4'>
            <button onClick={()=>{navigate(-1)}} className='py-2 px-3 rounded-full flex items-center justify-between transition text-gray-900 bg-gradient-to-t to-blue-100/80 from-blue-300 font-bold'><i className="gg-chevron-left"></i> Regresar</button>
        </div>
    </div>
  )
}
