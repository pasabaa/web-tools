import React from 'react'
import { useNavigate } from 'react-router-dom'

export const Nav = () => {

    const navigate = useNavigate();

  return (
    <div className='py-2'>
        <div className='w-8/12 mx-auto py-4'>
            <button onClick={()=>{navigate(-1)}} className='rounded-sm flex items-center justify-between transition font-bold text-gray-900 underline'><i className="bi bi-chevron-left mr-2"></i> Regresar</button>
        </div>
    </div>
  )
}
