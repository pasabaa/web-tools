import React from 'react'

export const Toggle = ( {id, handle, checked, text} ) => {
return (
<label htmlFor={`toogle-${id}`} className="flex cursor-pointer items-center">
    <div className="relative flex w-full">
        <input 
            id={`toogle-${id}`} 
            type="checkbox" 
            className="sr-only" 
            onChange={handle} 
            checked={checked} />
        <div className="h-2 w-6 rounded-sm bg-black shadow-inner"></div>
        <div className="checked dot absolute -left-1 -top-1 h-4 w-4 bg-gray-100 transition"></div>
        <div className="checked ml-4 -mt-1.5 text-sm">
            <p className="transition ease-in-out">{text}</p>
        </div>
    </div>
</label>
)
}