import React from 'react'

export const Toggle = ( {id} ) => {
return (
<label for={`toogle-${id}`} className="flex cursor-pointer items-center">
    <div className="relative flex w-full">
        <input id={`toogle-${id}`} type="checkbox" className="sr-only" />
        <div className="h-2 w-6 rounded-full bg-gray-600 shadow-inner"></div>
        <div className="dot absolute -left-1 -top-1 h-4 w-4 rounded-full bg-gray-100 transition"></div>
        <div className="active ml-4 -mt-1.5 text-sm">
            <p className="transition ease-in-out">Palabras random</p>
        </div>
    </div>
</label>
)
}