import React from 'react'

export const Container = ( { children } ) => {
return (
<div className='h-screen w-full flex flex-col text-gray-100'>
    {children}
</div>
)
}

export const LayoutContainer = ({children}) => {
return(
<div className='w-full bg-gray-900'>
    <div className='w-8/12 mx-auto p-4'>
        {children}
    </div>
</div>
)
}

export const AppContainer = ({children}) => {
return(
<div className='w-8/12 mx-auto flex-grow p-4'>
    {children}
</div>
)
}